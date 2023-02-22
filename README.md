# armno.in.th

My website at [https://armno.in.th](https://armno.in.th). Built with [Astro](https://astro.build/).

[![Netlify Status](https://api.netlify.com/api/v1/badges/db3cb7c7-b2ee-443e-be46-9c0c4c040373/deploy-status)](https://app.netlify.com/sites/armnointh/deploys)

## Setup

```sh
$ npm install
$ npm start
```

## Creating a new post

1. create a new file `src/pages/blog/<post-name>/index.mdx`
2. fill in default frontmatter

```yml
---
title: ''
pubDate: # why do i have to manually fill this in though?
description: ''
thumbnail: ''
tags:
  -
categories:
  -
layout: '../../../layouts/PostLayout.astro'
---
```
