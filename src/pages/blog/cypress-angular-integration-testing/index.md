---
title: "Setting up Cypress for an Angular Project"
date: 2020-02-26T16:47:17+07:00
url: /2020/02/26/cypress-angular-integration-testing
description: Use Cypress (cypress.io) to implement automated testing for an Angular project
thumbnail: /images/cypress-angular-integration-testing/test-running-window.png
tags:
- javascript
- angular
- cypress
- testing
- framework
categories:
- web development
language: en
layout: '../../../layouts/PostLayout.astro'
setup: |
  import Picture from '../../../components/Picture.astro';
---

Cypress ([cypress.io](https://www.cypress.io/)) is a testing tool
that can test [anything that runs in a browser](https://docs.cypress.io/guides/overview/why-cypress.html#Who-uses-Cypress)
from unit tests to end-to-end tests.

<Picture
  src="/images/cypress-angular-integration-testing/cypress-logo.png"
  alt="Cypress Logo"
  width="515"
/>

I recently has a chance to use Cypress
in an Angular project I'm working on.
Cypress is used as a replacement of the built-in [Protractor](https://protractor.angular.io/)
to implement integration and end-to-end testing of the project.

<p class="message--warning">
Note: in this post, I'm referring Cypress as the open-source Cypress Test Runner,
and not their commercial <a href="https://www.cypress.io/dashboard" target="_blank" noopener>Dashboard Service</a>.
</p>

## Why Cypress?

I heard about Cypress from [Adventures in Angular podcast](https://devchat.tv/adv-in-angular/aia-155-cypress-io-end-end-testing-gleb-bahmutov/).
Back then Cypress only supports Google Chrome
so it didn't convince me much and I decided to [go with CodeceptJS](https://medium.com/@armno/setting-up-end-to-end-testing-in-angular-project-with-codeceptjs-ac1784de3420) instead.

Over the time, I could also see Cypress
has gained popularity and features.
Now with Cypress 4.0, [Firefox and Edge](https://cypress.io/blog/2020/02/06/introducing-firefox-and-edge-support-in-cypress-4-0/) are supported so there are no reason not to try it.

### Things I like about Cypress

- It's framework-agnostic &ndash; It doesn't matter how the application is built. As long as it runs on the browser, Cypress can test it.
- It's easy to set up in an on-going project.
- It's easy to write tests. Tests can be written in either BDD or TDD styles.
- It works well with our CI environments (we use GitLab CI at [work](https://www.buzzwoo.de/)).
- It's fast(er) and (more) reliable, compared to CodeceptJS.
- The time travel feature is HUGE &ndash; we can go back in time at any step of the test and see what happened.

## 1. Adding Cypress to an Angular project

<p class="message--warning">
In this post, I will use a bare bone Angular project generated with
Angular CLI as a test project,
but the main content will not be specific to Angular at all.
</p>

There are already many articles on the internet on how to use Cypress
with an Angular project and I learned from some of them.
You might want to check these articles:

- [How to get started with Cypress](https://medium.com/angular-in-depth/get-started-with-cypress-d6ac4b910605)
on Angular In Depth blog
- [Why I Moved from Protractor to Cypress and the 7 Steps to Cypress E2E Testing Success](https://christianlydemann.com/why-i-moved-from-protractor-to-cypress/) by Christian Lüdemann

> I create a companion repo for this post at <a href="https://github.com/armno/angular-cypress-101" target="_blank">(https://github.com/armno/angular-cypress-101)</a>

-----

We are going to test the default home page which looks like this:

<Picture
  src="/images/cypress-angular-integration-testing/default-home-page.png"
  alt="Angular's generated home page"
  width="785"
/>

To install Cypress into the project:

```sh
$ npm install --save-dev cypress
```

Then we can run Cypress with the command

```sh
$ npx cypress open
```

It will open a Cypress standalone app in its own window.

When we run Cypress for the first time,
it generates a bunch of examples that we can
learn from.

<Picture
  src="/images/cypress-angular-integration-testing/running-cypress-first-time.png"
  alt="Running Cypress for the first time"
  width="800"
/>

We can run the example tests to see Cypress in action.

<Picture
  src="/images/cypress-angular-integration-testing/running-all-specs.png"
  alt="Running all specs"
  width="1200"
/>

-----

## 2. Configure Cypress in `cypress.json`

`cypress.json` is a config file for Cypress. It should be already generated
at the project's root folder.
By default, it's an empty JSON file.

First thing I do is adding JSON schema to the config file
to get Code Intellisense support from VSCode.

```json
{
  "$schema": "https://on.cypress.io/cypress.schema.json"
}
```

By adding `$schema`, VSCode knows what are the possible configurations
we can add to the config file.

<Picture
  src="/images/cypress-angular-integration-testing/config-schema.png"
  alt="Added $schema to the config file"
  width="1024"
/>

### Changing tests directory

By default, Cypress keeps everything inside `cypress/` directory.
I like rename the folder to `tests/e2e` to make it more generic.

<Picture
  src="/images/cypress-angular-integration-testing/renamed-cypress-folder.png"
  alt="Move generated tests from Cypress to test/ folder"
  width="502"
/>

Then we need to update the paths in `cypress.json` file to reflect
the new directory structure.

```json
{
  ...
  "fixturesFolder": "tests/e2e/fixtures",
  "integrationFolder": "tests/e2e/integration",
  "pluginsFile": "tests/e2e/plugins/index.js",
  "supportFile": "tests/e2e/support/index.js"
  ...
}
```

Cypress can capture screenshots and videos from the tests.
I see them as an output from the test so I keep them
separate from test input (specs).

Normally I keep the output files in `output/` directory of the project.
This directory is ignored by Git.

Set the paths of captured screenshots and video files in `cypress.json`
config file:

```json
{
  ...
  "screenshotsFolder": "output/e2e/screenshots",
  "videosFolder": "output/e2e/videos"
  ...
}
```

Then I set the `baseUrl` in the config to point to
Angular's dev server's URL

```json
{
  ...
  "baseUrl": "http://localhost:4200",
  ...
}
```

My whole `cypress.json` config file looks like this:

```json
{
  "$schema": "https://on.cypress.io/cypress.schema.json",
  "chromeWebSecurity": false,
  "fixturesFolder": "tests/e2e/fixtures",
  "integrationFolder": "tests/e2e/integration",
  "pluginsFile": "tests/e2e/plugins/index.js",
  "supportFile": "tests/e2e/support/index.js",
  "screenshotsFolder": "output/e2e/screenshots",
  "videosFolder": "output/e2es/videos",
  "baseUrl": "http://localhost:4200"
}
```

Run the Angular app

```sh
$ ng serve
```

-----

## 3. Writing Tests

I will remove the generated examples from Cypress as we don't need them
for our app.

```sh
$ rm -rf tests/e2e/integration/examples
```

Then I create my first test file

```sh
$ touch tests/e2e/integration/home-page.spec.js
```

Before writing any tests, I add a [TypeScript `<reference>` directive](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html)
at the top of the spec file.

```js
/// <reference types="Cypress" />
```

This is to get type definition support from VSCode's IntelliSense
for auto-completion and method signatures of Cypress.

<Picture
  src="/images/cypress-angular-integration-testing/code-intellisense.png"
  alt="Getting code intellisense from VSCode"
  width="1024"
/>

Then write the first test in `home-page.spec.js` file.

We want to test if the generated app name shows up correctly.

```js
/// <reference types="Cypress" />

describe('Home Page', () => {
  it('should display the app name on the home page', () => {
    cy.visit('/'); // go to the home page

    // get the rocket element and verify that the app name is in it
    cy.get('.highlight-card')
      .should('contain.text', 'angular-cypress');
  });
});
```

In the Cypress app, click **Run all specs** button.
We can also choose the browser to run the test from
the dropdown above Run all specs button.

<Picture
  src="/images/cypress-angular-integration-testing/run-all-specs-button.png"
  alt="Run all specs"
  width="547"
/>

Cypress will open a new browser window and run the test.
We can see the test steps on the left panel
and the preview browser on the right.
And we can see the test is success.

<Picture
  src="/images/cypress-angular-integration-testing/test-running-window.png"
  alt="Test running window"
  width="1138"
/>

When hover over a step on the left panel,
the preview window shows what is happening.

In this case, I get an element with `cy.get()`
so the browser highlights the element on the page.

<Picture
  src="/images/cypress-angular-integration-testing/hover-step.png"
  alt="Hover each step to see the action"
  width="1138"
/>

### Add another test

Let's add a bit more complex test case on the home page.

We will test buttons in the Next Steps section if they correctly &ndash;
the buttons should display the command in the terminal preview area below.

<Picture
  src="/images/cypress-angular-integration-testing/buttons-to-test.png"
  alt="Buttons on the page we want to test"
  width="685"
/>

Create another test case in `home-page.spec.js` file.
The test doesn't do any assertion yet. Just visit the home page.

```js
// home-page.spec.js
it('should update preview command in the terminal area based on the selected button', () => {
  cy.visit('/');
});
```

When we run the tests, Cypress opens a browser window again.
This time, we use the **Selector Playground** icon
near the preview window's address bar.

<Picture
  src="/images/cypress-angular-integration-testing/open-selector-playground.png"
  alt="Open selector playground in Cypress window"
  width="395"
/>

Then we can select an element on the page
and it will create a selector with `cy.get()`
that we can copy it to use in our test.

<Picture
  src="/images/cypress-angular-integration-testing/select-element.png"
  alt="Selecting element from the page"
  width="629"
/>

Update our test case with action and assertion.

```js
// home-page.spec.js
it('should update preview command in the terminal area based on the selected button', () => {
  cy.visit('/');

  // click the `Add PWA Support` button
  cy.get(':nth-child(8) > :nth-child(3)').click();

  // verify that the text in the terminal area is updated
  cy.get('.terminal').should('contain.text', 'ng add @angular/pwa');
});
```

The test re-runs and we should see the result.

<Picture
  src="/images/cypress-angular-integration-testing/second-test-case-result.png"
  alt="Test result after updated the test"
  width="1088"
/>

We can click on each step of the test to see what happen.
That's the _time travel_.

![](images/time-travel.gif)

-----

There is a lot more Cypress can do &ndash; things like [triggering actions to the DOM elements](https://docs.cypress.io/guides/core-concepts/interacting-with-elements.html#Actionability)
or [stubbing network requests](https://docs.cypress.io/guides/guides/network-requests.html#Requests)
or [capturing videos](https://docs.cypress.io/guides/guides/screenshots-and-videos.html#Videos)
or even [testing REST APIs](https://github.com/cypress-io/cypress-example-api-testing).

Overall, I really like Cypress. It makes automated UI testing fun again.

Be sure to check their [documentation](https://docs.cypress.io/)
and their [example repos on GitHub](https://github.com/cypress-io?utf8=%E2%9C%93&q=example&type=&language=).
They are very good resources to learn from.

Happy Testing,
<br>Armno
