---
title: "Optimize Images in a Pull Request with GitHub Actions"
pubDate: 2020-08-31T15:06:46+07:00
description: Automatically optimize images in a pull request with Image Actions
thumbnail: /images/github-actions/action-details.png
tags:
- automation
- github
- github actions
- performance
categories:
- web development
language: en
layout: '../../../layouts/PostLayout.astro'
setup: |
  import Picture from '../../../components/Picture.astro';
---

[**GitHub Actions**](https://github.com/features/actions) is a service that provides automation and CI/CD built into GitHub's interface
and runs on GitHub's infrastructure or our own servers.

It's pretty similar to [GitLab CI](https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/) to GitLab
or [Azure Pipelines](https://azure.microsoft.com/en-us/services/devops/pipelines/) to Azure DevOps.
The workflows and configurations look more similar to Azure Pipelines than GitLab CI in my opinion.

### A Use Case for GitHub Actions: Image Optimization

One thing that can be (and should be) automated is image optimization: to reduce images file size to make them load and display faster.

We can use a GitHub Actions to make sure images that are on the `master` branch, will always be optimized
before they get deployed to the live website.

In this post, I will use [Image Actions](https://github.com/marketplace/actions/image-actions) to automatically optimize images
in this blog when a pull request is created.
Normally I do this task manually using [tinypng.com](https://tinypng.com/) for every single blog post.

## Adding Image Actions to the Project

Go to [repo page](https://github.com/armno/blog) on GitHub, select **Actions** menu and select **'set up a workflow yourself'**.

<Picture
  src="/images/github-actions/actions-tab.png"
  alt="Actions page on GitHub repo"
  width="868"
/>

It brings us to the workflow editor page.
Here we will have to create a yml file to define tasks for the automation we need.

<Picture
  src="/images/github-actions/workflow-editor.png"
  alt="Workflow editor page"
  width="717"
/>

To create a new workflow using the Image Action, we can either:

- search for 'image actions' and select the item to view the code snippet
- or go and grab the code from [Installation](https://github.com/marketplace/actions/image-actions#installation) guide from the Image Actions' marketplace page

<Picture
  src="/images/github-actions/search-image-actions.png"
  alt="Search for Image Actions"
  width="365"
/>

We can add some extra options and quality settings of each file type under `with:` section of the step.

My workflow looks like this:

```yaml
name: Compress images

on:
  pull_request:
    paths:
      - "**.jpg"
      - "**.jpeg"
      - "**.png"
      - "**.webp"
jobs:
  build:
    name: calibreapp/image-actions
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repo
        uses: actions/checkout@master

      - name: Compress Images
        uses: calibreapp/image-actions@master
        with:
          githubToken: ${{ secrets.GITHUB_TOKEN }}
          jpegQuality: "70"
          jpegProgressive: true
          pngQuality: "70"
```

When we save the workflow, it creates a new yaml file and put in the repo.
On the Actions page, now there should be a new workflow created.

<Picture
  src="/images/github-actions/empty-action.png"
  alt="Workflow is create on the Actions page"
  width="1174"
/>

Next I create [a test pull request](https://github.com/armno/blog/pull/169) to add 2 new images in my `/uses` page.
There is a new check created.

<Picture
  src="/images/github-actions/running-actions-in-pr.png"
  alt="A new pull request is created"
  width="944"
/>

We can go to the details page to see it runs.

<Picture
  src="/images/github-actions/action-details.png"
  alt="Action details"
  width="1440"
/>

On the first run, the workflow scans and optimizes all images in the repo so it takes a while.
But in the end, it reduces images by 37.7% or **21.59 MB** from the repo.
It is clear that many images are not properly optimized for a long time!

With Netlify's [Deploy Previews](https://armno.in.th/2018/09/02/netlify-deploy-preview/) feature,
I can compare original images and optimized images side-by-side.

<Picture
  src="/images/github-actions/optimized-images-preview.jpg"
  alt="Comparing original and optimized images"
  width="1000"
/>

Back to the pull request view, the Actions adds a new commit and push back to the branch.

<Picture
  src="/images/github-actions/new-commit-added-by-action.png"
  alt="new commit created by github actions"
  width="459"
/>

It also creates a new comment with optimization results into the pull request.

<Picture
  src="/images/github-actions/optimize-results.png"
  alt="Results of image optimization is added into the pull request"
  width="935"
/>

Some images are already optimized, so they are skipped.

<Picture
  src="/images/github-actions/already-optimized-images.png"
  alt="Some images are already optimized"
  width="894"
/>

### Comparing results with TinyPNG

Tinypng.com is an online image optimization service I usually use.
It can still do a better job than the Image Actions in terms of producing smaller file size.

<Picture
  src="/images/github-actions/vs-tinypng.png"
  alt="Comparing results with images optimized by tinypng.com"
  width="866"
  caption="Comparing results - Top: Image Actions. Bottom: tinypng.com"
/>


## Summary

The Image Actions is a good addition to my workflow.
Although it doesn't produce the smallest file size of the images,
but what I get back is an automated workflow and I don't have to manually optimize images again
when writing a blog post.

Another thing I like about GitHub Actions is the [marketplace](https://github.com/marketplace?type=actions):
there are plenty actions in various types created by the community
and are ready to use.

Happy automating 🦾.



