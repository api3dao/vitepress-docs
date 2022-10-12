---
lang: en-US
title: Versions
sidebarHeader: Reference
sidebarSubHeader: Airnode
version: v1.0
basePath: /airnode/latest/
outline: deep
tags:
---

<VersionWarning/>

<PageHeader>{{$frontmatter.version}}</PageHeader>

# {{$frontmatter.title}}

The latest version of Airnode is `{{versions.airnodeLatest}}`. See the
[change log](https://github.com/api3dao/airnode/blob/master/packages/airnode-node/CHANGELOG.md)
in the Airnode repo for all Airnode versions.

<table>
    <tr v-if="versions.versionsAirnode" v-for="(item, index) in versions.versionsAirnode">
        <td v-if="vrs === item.version"><b>{{item.version}}</b></td>
        <td v-else><a  :href="item.path">{{item.version}}</a></td>
    </tr>
</table>

## Previous Versions (v0.x)

Prior to version `v1.0` there are several `v0.x` versions of Airnode. Their
documentation is available at
[https://api3dao.github.io/api3-docs](https://api3dao.github.io/api3-docs).

<table>
    <tr v-for="(item, index) in versionsLegacy">
        <td>{{item.version}}</td>
    </tr>
</table>

<script setup lang="ts">
    import versions from '../../../.vitepress/versions.json';
    import versionsLegacy from '../../../.vitepress/versionsAirnodeLegacy.json';
    import { useData } from 'vitepress';

    const { frontmatter } = useData();
    let vrs = frontmatter._value.version;
</script>
