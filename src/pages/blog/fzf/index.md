---
language: en
title: "fzf - The Fuzzy Finder"
date: 2019-08-21T21:36:51+07:00
url: /2019/08/21/fzf
description: fzf is a command-line fuzzy finder, and is my new favorite thing.
tags:
- command line
- fzf
- fuzzy search
- terminal
- tools
thumbnail: images/cover.png
---

[`fzf`](https://github.com/junegunn/fzf) is my new favorite command-line tool.
I learned about this tool from Remy Sharp's post: [**CLI: Improved**](https://remysharp.com/2018/08/23/cli-improved).

From the GitHub page - fzf is *a general-purpose command-line fuzzy finder*.
It does the search and nothing else.

> Fuzzy finders allow you to search for things in the list by typing only some parts of the text, similar to VSCode's command panel <kbd>cmd</kbd>+<kbd>p</kbd> or <kbd>cmd</kbd>+<kbd>shift</kbd>+<kbd>p</kbd> combos.

By default, `fzf` performs fuzzy search on files in the current directory
and prints the selected item's path as an output to `STDOUT`.

```sh
$ fzf
```

<video src="images/default-2.mp4" width="100%" autoplay muted controls></video>

We can use this output with other tasks. For example, open the file in a code editor

```sh
$ vim $(fzf)
```

<video src="images/vim.mp4" width="100%" autoplay muted controls></video>

or combine with `cat` or `bat` to display the file preview as shown in @rem's post.

```sh
$ fzf --preview 'bat --color "always" {}'
```

<video src="images/preview.mp4" width="100%" autoplay muted controls></video>

Check out the [wiki page](https://github.com/junegunn/fzf/wiki/examples) for more advanced examples and use cases like with command history,
running processes, git history, etc.

## Fast

Not only fzf is super simple, it's also super fast. It's *crazy fast*.

Even with a big list (`node_modules/` folder is included),
fzf is still very fast. It can do the search without waiting for file indexing to be finished.

<video src="images/big-folder.mp4" width="100%" autoplay muted controls></video>

## Example Use Case: `git diff`

Let's look at a bit more complex example.

I use `$ git diff` command a lot in a day.
It displays the diffs of all files changed at once in order.
Sometimes it hard to find the file I want to see the diff
when there are many files changed.

I can use `fzf` to filter through the files
and check the diff of 1 file at a time in the preview panel.

<video src="images/git-diff.mp4" width="100%" autoplay muted controls></video>

The command I use is:

```sh
$ git status -s \
	| fzf --no-sort --reverse \
	--preview 'git diff --color=always {+2} | diff-so-fancy' \
	--bind=ctrl-j:preview-down --bind=ctrl-k:preview-up \
	--preview-window=right:60%:wrap
```

Let's break it down:

1. `git status -s` prints git status in short format - only status and file name separated by a space.
2. Then pipe the output to `fzf`.
3. `--no-sort --reverse`: disable sorting (no need here), use reverse layout to display the list from the top.
4. `--preview 'git diff --color=always {+2} | diff-so-fancy`: display file preview using `git diff` command with [`diff-so-fancy`](https://github.com/so-fancy/diff-so-fancy).
The `{+2}` part is to tell fzf to split selected line (which is the output from `git status -s`) with a space, and take the 2nd part which is the file name to use with `git diff`.
5. `--bind=ctrl-j:preview-down --bind=ctrl-k:preview-up`: bind 2 keys <kdb>ctrl-j</kbd> and <kbd>ctrl-k</kbd> to scroll down and up in the preview panel without using the mouse.
6. `--preview-window=right:60%:wrap`: set the layout for preview window to display at the right side of the screen, take 60% of the screen space, and wrap the text if it is too long.

I create an alias `gd` for this long command in my `.zshrc` profile.

```sh
# ~/.aliases
alias gd="git status -s | fzf ..."
```

(Check out [forgit](https://github.com/wfxr/forgit) plugin of fzf for more integrations with git)

---

I only touch the surface but already have a lot of joy trying fzf.
To me, it's like when [`z`](https://github.com/rupa/z) makes `cd` fun again.

### Installation

fzf can be installed via Homebrew on macOS.

```sh
$ brew install fzf
```

It is also available as a [Vim plugin](https://github.com/junegunn/fzf/blob/master/README-VIM.md).
I haven't try it myself yet but curious to see how it compares to my [`CtrlP + ag`](https://armno.in.th/2015/02/26/setting-up-vim-part-2/#ctrlp-the-silver-searcher) set up.
