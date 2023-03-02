---
title: Link Validation
sidebarHeader: Docs Development
sidebarSubHeader:
pageHeader: Docs Development
basePath: /dev/link-validation.html
outline: deep
tags:
---

<PageHeader/>

# {{$frontmatter.title}}

Use the script `/libs/link-validator.js` to validate links (with or without
attached anchors)and images. The link validator is a manual process that should
be performed as often as possible.

## Using the script

The script must be run locally and will not work as a GitHub action

### 1. Build the docs

Build the docs as usual using the standard build command provided by VitePress.

```sh
// From the vitepress-docs project root
// Build the docs website
yarn docs:build
```

Note that the build script may in fact catch bad links in of itself. Any
reported links should be fixed before proceeding.

### 2. Start the local VitePress server

VitePress has a built-in http server that publishes the files from the `/dist`
folder.

```sh
// Run from the root of vitepress-docs
yarn docs:serve

// Outputs
  vitepress v1.0.0-x

Built site served at http://localhost:8082/
```

### 3. Run the script

Open a new terminal window to run the script. The script's output will display
an indicator for failures as it steps through each file. There will be a summary
of all link failures at the end of the script output.

You can run the Link Validator against the entire `/dist` folder which will
validate everything (/pre-alpha, v0.11, /dapis, etc.) but this can be time
consuming. Narrowing the scope of the validation to a particular folder can
hasten the validation process. Be sure to use the correct port displayed by
VitePress server.

```sh
# Open a new terminal window.
# Run from the vitepress-docs project root.
# Start the nodejs script.
node ./libs/link-validator.js  http://127.0.0.1:8082  ./docs/.vitepress/dist/
```
