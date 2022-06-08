---
language: en
title: "TIL: Convert a PNG to a JPG with sips"
pubDate: 2019-11-05T13:42:15+07:00
url: /2019/11/05/convert-png-to-jpg-command-line-sips
description: Today I learned how to convert a PNG image to a JPG image from the command line with sips command
thumbnail: /images/convert-png-to-jpg-command-line-sips/screenshot-jpg.jpg
tags:
- sips
- terminal
- bash
- tools
- image processing
categories:
- Tools
layout: '../../../layouts/PostLayout.astro'
setup: |
  import Picture from '../../../components/Picture.astro';
---

Today I learn how to use sips to convert a PNG image to a JPG image from the command line
from [The Robservatory](https://robservatory.com/use-sips-to-quickly-easily-and-freely-convert-image-files/) blog.

`sips` – **The Scriptable Image Processing System** – is a command line tool that comes pre-installed
with macOS (I'm using 10.15 Catalina). It can convert a PNG to a JPG like this:

```sh
$ sips --setProperty format jpeg input.png --out output.jpg
```

With JPG as an output file type, we can add `formatOptions` property to the command
to set JPG quality level of the output file to get smaller file size.

```sh
# set quality to 'normal`
$ sips --setProperty format jpeg \
  --setProperty formatOptions normal \
  input.png \
  --out output.jpg

# or set quality to a percentage value
$ sips --setProperty format jpeg \
  --setProperty formatOptions 42.195 \
  input.png \
  --out output.jpg
```

## Convert the last captured screenshot to a JPG

When I captured a screenshot to send via Slack or to attach in a ticket,
I often found the captured PNG file is way too big in terms of the file size,
especially when the screenshot has photos in it.

<Picture
  src="/images/convert-png-to-jpg-command-line-sips/screenshot-png.jpg"
  alt="Captured screenshot in PNG format"
  caption="Captured Screenshot in PNG format: 4.5MB"
/>

I wanted to quickly convert it to a JPG. I created a bash function in my [`.functions`](https://github.com/armno/dotfiles/blob/master/.functions) dotfile to do that.

```bash
function peg() {
  filename=$(ls -1t $HOME/Desktop/Screen\ Shot* | head -n 1)
  sips --oneLine --setProperty format jpeg "$filename" --out "$HOME/Desktop/screenshot.jpg"
}
```

- `ls -1t $HOME/Desktop/Screen\ Shot*`
  - List all the files in Desktop folder that starts with `Screen Shot`
  - `-1` for 1 row per file
  - `-t` to display the most recently modified first.
- `| head -n 1` grab only the first one from the list which in this case, is the last created file

So when I captured the screenshot, I go to the terminal and run `peg` command.
I get the JPG version of the file named `screenshot.jpg`.

<Picture
  src="/images/convert-png-to-jpg-command-line-sips/screenshot-jpg.jpg"
  alt="Captured screenshot after converted to JPG format: 666KB"
  caption="Captured Screenshot after converted to JPG format: 666KB"
/>

_More info about sips on [the sips man-page](https://www.unix.com/man-page/osx/1/sips/)._
