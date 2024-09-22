# Markdown to Static HTML Page Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and was built initially for SJTU ICS class to translate Markdown to a beautiful static HTML page.

## Usage

You can put your Markdown text file into `src/markdown/tutorial.md`. If you have more than two files or want to use a different file name, just make some corresponding changes to `src/view/Home.jsx`.

And the stylesheet for this project is based on TailwindCSS, which you can build with `npm run compilecss`.

To build the static page you can run `npm run build`. But please note that React is targeted to build one frontend with router, so if you are going to use some proxy tools such as Nginx to deploy some static pages (which is why this project was built originally), please modify some urls in the built html/json files (change absolute paths into corresponding relative ones by removing the "/" before them). In this project, just modify `build/index.html` and `build/asset-manifest.json` and everything will go well.

