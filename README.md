# README

Skeleton to set up quick and dirty progessive web apps (PWA).

Uses Typescript, React and MUI.

## Setup

Stuff you should probably change after cloning:

1. `package.json` defines your public_url, used for routing stuff and when building (also used for github pages, if you host there)
2. `public/index.html` title, favicon, descriptions etc. See https://vite-pwa-org.netlify.app/guide/pwa-minimal-requirements.html#entry-point 
3. `vite.config.ts` for setting your Web App Manifest file.

### Customizing

* Make logo maskable to ensure you get nice icons when installed: https://web.dev/articles/maskable-icon
* Change `background_color` in manifest.json to match with your icon on the startup splash screen.

