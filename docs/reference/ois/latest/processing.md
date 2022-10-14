---
title: Pre/Post Processing
sidebarHeader: Reference
sidebarSubHeader: OIS
pageHeader: Reference → OIS → v1.2
path: /reference/ois/latest/processing.html
version:
outline: deep
tags:
---

<VersionWarning/>

<PageHeader/>

# {{$frontmatter.title}}

<!--TocHeader /> <TOC class="table-of-contents" :include-level="[2,5]" /-->

The processing schema is the same for both
[pre-processing](./ois.md#_5-9-preprocessingspecifications) and
[post-processing](./ois.md#_5-10-postprocessingspecifications).

The processing schema accepts an array of processing snippets which are chained.
The first snippet receives parameters submitted as part of a template or
on-chain request. The output of this snippet is passed to the second snippet and
so on.

Every processing snippet follows this schema:

- `environment` - Currently one of `Node 14` or `Node 14 async`. Both options
  interpret the code as JavaScript and execute in Node.js version 14. The async
  version can use asynchronous code. The code snippet is expected to call
  `resolve(output)` with the output value as an argument. Airnode will use the
  resolved value as the input to subsequent snippets (if defined).
- `value` - The processing code written as a string.
- `timeoutMs` - The maximum timeout that this snippet can run. In case the
  timeout is exceeded an error is thrown.

## Inputs

The processing snippet receives an `input` value which is either the initial
value or the output value from the previous processing snippet. The snippet must
create a variable `output` which will be used for the next processing snippet.
The processing snippet can use most Node.js built-in modules. Refer to the
source code of Airnode to understand how processing works and what modules are
made available to the snippet code. Modules cannot be imported directly in cloud
environments.

## Interpolation

Note, that config.json supports interpolation of secrets via the JavaScript
string interpolation pattern (e.g `${SECRET_NAME}`). This syntax conflicts with
the string interpolation inside the processing snippets. In order to use the
interpolation in snippets, you need to escape the interpolation.

For example, the following code:

```js
console.log(`Received input ${input}`);
const output = input;
```

should be escaped inside the `config.json` like this:

```json
{
  "environment": "Node 14",
  "timeoutMs": 5000,
  "value": "console.log(`Received input \\${input}`);\nconst output = input;"
}
```

## Error Handling and Security

Processing code is expected to be trustworthy as it is specified by the Airnode
operator. Processing is an advanced feature that carries great security risks.
It is therefore advised that developers using the processing feature familiarise
themselves with the Airnode sources prior to developing any processing code
snippets.

Processing code executes in a constrained execution environment resembling
Node.js. Some resources may not be available, for example the `require`
statement. Therefore code should be tested thoroughly in the target environment
(e.g. Lambda and/or Docker client). For example, authentication implemented in
pre-processing should always be executed at the end of the respective processing
chain and special care should be taken to avoid leakage of secrets.
