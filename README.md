# README

WIP Skeleton to set up quick and dirty progessive web apps (PWA).

Uses Typescript, React and MUI.

## Usage

Stuff you should probably change after cloning:

1. `public/manifest.json` describes various things about your "app"
2. `package.json` defines your public_url, used for routing stuff and when building (also used for github pages, if you host there)
3. `public/index.html` title, favicon, descriptions etc.

### Customizing

* Make logo maskable to ensure you get nice icons when installed: https://web.dev/articles/maskable-icon
* Change `background_color` in manifest.json to match with your icon on the startup splash screen.


## TODO

templateify
https://create-react-app.dev/docs/custom-templates/

in the meanwhile `git checkout-index` should work:

```
git checkout-index -a -f --prefix=~/code/js/my-recipes/app/
```

