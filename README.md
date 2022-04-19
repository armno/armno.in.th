# Astro Starter Kit: Minimal

```
npm init astro -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
|:----------------  |:-------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 👀 Want to learn more?

Feel free to check [our documentation](https://github.com/withastro/astro) or jump into our [Discord server](https://astro.build/chat).

-----

### notes

likes:

- great dx
- super fast
- easy to integreate tailwind
- components import just makes more sense than partials
- no theme/no complicated file structures from Hugo
- use components in Markdown content. same as Hugo partials, but with more familiar syntax

issues found:

- no global / site variables. need to pass props
- images: either have to move all images in the post to `/public`, or import them 1 by 1 and use with <img>
- can't import videos
- content migration must be .. painful
  - images must be moved, or re-imported
  - custom `url` value in frontmatter does not work.
    has to deal with dates in the url because it didn't
    reflex the actual file structure
  - custom `url` value in frontmatter might not work
- updating .md file does not trigger reload sometimes
- dev server silent die. esp when creat new file/delete a file
- JSX 🤔
- autoimport in vscode does not work
- `/post/page/2` will turn to `post/2`
- tailwind not update when add new class. need to restart dev server
- `getStaticPaths() called twice during the build.`
- imporing images with the same file name, in different pages -> the build takes forever
- migrate all posts was a pain
  - to replace all Hugo's shortcodes with Components
  - to update all image paths
  - to add `layout` entry in every `.md` file
  - to add a new redirect entry in `_redirect` file
