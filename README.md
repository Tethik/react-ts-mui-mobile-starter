# README

Skeleton to set up quick and dirty progessive web apps (PWA).

Uses Typescript, React and MUI.

## Setup

Stuff you should probably change after cloning:

1. `package.json` - change package name, currently used setting the basename for routing stuff and when building (by default set up for github pages)
2. `public/index.html` title, favicon, descriptions etc. See https://vite-pwa-org.netlify.app/guide/pwa-minimal-requirements.html#entry-point 
3. `vite.config.ts` for setting your Web App Manifest file.

### Customizing

* Make logo maskable to ensure you get nice icons when installed: https://web.dev/articles/maskable-icon
* Change `background_color` in manifest.json to match with your icon on the startup splash screen.

## Packaging 

The following should work to make into something app-store installable:
https://docs.pwabuilder.com/#/builder/quick-start

