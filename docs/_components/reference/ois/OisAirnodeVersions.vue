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
        <td>0.2.x through 0.7.x</td>
        <td>
          <a href="https://github.com/api3dao/ois/tree/v1.0.0" target="_blank"
            >1.0.0 <ExternalLinkImage
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
        <td>0.9.x</td>
        <td>
          <a href="https://github.com/api3dao/ois/tree/v1.2.0" target="_blank"
            >1.2.0 <ExternalLinkImage
          /></a>
        </td>
      </tr>
      <tr>
        <td>0.10.x</td>
        <td>
          <a href="https://github.com/api3dao/ois/tree/v1.4.0" target="_blank"
            >1.4.0 <ExternalLinkImage
          /></a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'OisAirnodeVersions',
};
</script>
