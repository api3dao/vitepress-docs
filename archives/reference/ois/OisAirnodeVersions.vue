<!--
  This component displays a list of OIS versions and the Airnodes version they 
  relate to.

  This component must be updated when a new Airnode version is deployed. This
  is described in the /dev/versions.md page.
-->

<template>
  <div>
    Be sure to use the correct OIS version for the Airnode version you are
    deploying.
    <table>
      <th>Airnode version</th>
      <th>Latest compatible OIS version</th>
      <tr>
        <td>0.11.x</td>
        <td>2.0.0</td>
      </tr>
      <tr>
        <td>0.10.x</td>
        <td>
          <a href="https://old-docs.api3.org/ois/v1.4" target="_blank"
            >1.4.0 <ExternalLinkImage
          /></a>
        </td>
      </tr>
      <tr>
        <td>0.9.x</td>
        <td>
          <a href="https://github.com/api3dao/ois/tree/v1.2.0" target="_blank"
            >1.2.0 <ExternalLinkImage
          /></a>
        </td>
      </tr>
      <tr>
        <td>0.8.x</td>
        <td>
          <a href="https://github.com/api3dao/ois/tree/v1.1.2" target="_blank"
            >1.1.2 <ExternalLinkImage
          /></a>
        </td>
      </tr>
      <tr>
        <td>0.2.x through 0.7.x</td>
        <td>
          <a href="https://github.com/api3dao/ois/tree/v1.0.0" target="_blank"
            >1.0.0 <ExternalLinkImage
          /></a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import versions from '../../../.vitepress/versions';
import { useData } from 'vitepress';

export default {
  name: 'OisAirnodeVersions',
  data: () => ({
    hideLatestOisLink: undefined,
    gitHubImg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>`,
  }),
  mounted() {
    const { page } = useData();
    console.log(page);
    this.$nextTick(function () {
      console.log(versions.versionsOIS);
    });
  },
};
</script>
