#!/usr/bin/env sh

# abort on errors
set -e

# build the docs
npm run docs:build

# navigate to the build output directory
cd docs/.vitepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# wkande/vitepress-docs uses the main branch as default.
# git init must start with a main branch so firebase-pages will
# "hang" off of it.
git init --initial-branch=main
git add -A
git commit -m 'Deploying a locally built /dist folder to main:firebase-pages as its own commit history.'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# If you are deploying to https://<USERNAME>.github.io/<REPO>
# NEVER push to main, use main:firebase-pages.
git push -f git@github.com:wkande/vitepress-docs.git main:firebase-pages

cd -

firebase deploy
