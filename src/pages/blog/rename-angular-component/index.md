---
language: en
title: "Renaming an Angular Component"
date: 2019-08-22T23:15:48+07:00
url: /2019/08/22/rename-angular-component
description: TL;DR - There is still no easy way to rename a component
tags:
- angular
- web development
- javascript
thumbnail: images/rename-folder.png
---

<p class="lead"><strong>TL;DR</strong> - There is no easy way to rename an Angular component.
There is no <code>$ ng rename</code> or <code>$ ng move</code> commands to rename components easily in the Angular CLI.</p>

Some people have been asked for this as a CLI feature. See the issue [angular-cli#900](https://github.com/angular/angular-cli/issues/900) on GitHub for the discussion.

Renaming a component is not a common task I would do often.
However, it can be a bit cumbersome when I have to.

With help from VSCode, and some manual tasks, this is how I rename an Angular component.
Maybe it's not the best way but at least it works most of the time. And if you have a better solution, please let me know.

Note: This post is based on `@angular/cli 8.2.2`.

### 1. Use `Rename Symbol` command

With the cursor at the Component class, open Command Palette in VSCode with <kbd>cmd+shift+p</kbd>.

Select **"Rename Symbol"** command and change the class name.

VSCode will change the class name, and update all the references to this class in other files.
This is safer than using global search and replace.

<video src="images/rename-symbol.mp4" width="100%" autoplay muted controls loop></video>

### 2. Save all files with `Save All` command

When VSCode changes the symbol name, it will open all updated files but will not save the changes to disk.

A quick way to save all files is also using the command palette.

<kbd>cmd+shift+p</kbd> and select **"File: Save All"**.

<video src="images/save-all.mp4" width="100%" autoplay muted controls loop></video>

### 3. Rename folder and file names manually

Rename the component's folder and files names to the new name.
This is done manually from VSCode's file explorer.

![rename folder](images/rename-folder.png)

![rename files](images/rename-files.png)

VSCode will prompt to update import paths in other files. Select Yes.

![rename files](images/auto-update-imports.png)

### 4. Update paths in component decorator

Back to the component class, update paths in component decorator
with new file names that were changed in the previous step.

<video src="images/update-references.mp4" width="100%" autoplay muted controls loop></video>

### 5. Update component selector used in the templates

Since the component's selector is changed, there will be a need to update component's template tag in other templates too.

![update template tag](images/update-template-tag.png)

### 6. Update component name in its spec file

Update component's name in its spec file `*.spec.ts` to make the unit test report correct with updated name.

<video src="images/update-spec.mp4" width="100%" autoplay muted controls loop></video>

### 7. Verify

Check if everything is still working.

I like to run unit tests and run the production build commands
just to see if there is any error reported.

- `$ ng test`
- `$ ng build --prod`

If not, I *assume* renaming the component is done. 🤞

![production build](images/prod-build.png)
