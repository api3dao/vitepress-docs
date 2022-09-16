---
lang: en-US
title: About the Journey
sidebarHeader: Explore
home: false
tags:
  - help
  - dude
head:
  - - meta
    - name: foo
      content: bar
  - - link
    - rel: canonical
      href: foobar
  - - script
    - {}
    - console.log('About the Journey > $fronmatter > script');
---

# {{$frontmatter.title}}

Moving from VuePress `v1` to VitePress `v1`.

```js
let i = 0;
console.log('HELLO WORLD'); // Long code comment to detect scroll.
```

This is a deployment from the firebase-push script

## Custom Tabs (Vue 3x) Component

<Tabs>

@tab:Mac OS

Below is the code you can copy. Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua.

```js
let i = 0;
console.log('HELLO WORLD'); // Long code comment to detect scroll.
```

@tab:Windows

![img](/API3-Active.png)

@tab:Linux

Go to [Airnode](/reference/airnode/latest/)!

</Tabs>

## Fancy Btn using a slot

Nothing fancy about it. <FancyButton >Click me</FancyButton>

## Component with internal markdown-it complier

## <UiMarkdown markdown="

[link here](/) <br/>

```js
let s = 2;
```

"/>

## CodeBlock component by VitePress

<p>
  <a href="/guides/providers/#advanced-manual-creation">Link</a> Talk about the API3 project.

  <pre><code>
  let j = 'abc';
  l = undefined;
  </code></pre>
</p>

Talk about the API3 project. Lorem ipsum dolor sit amet, consectetur adipiscing
elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
culpa qui officia deserunt mollit anim id est laborum.
