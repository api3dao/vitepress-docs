<!-- 
This component warns developers not to run multiple Airnode deployments simultaneously.

Use of .html in the removeLink property for the router-link element is intended. 

WARNING: Do not place HTML comment lines inside paragraph elements.
-->

<template>
  <div class="custom-block warning">
    <p class="custom-block-title">Warning about simultaneous deployments</p>
    <p style="padding-top: 8px">
      Avoid running multiple deployments simultaneously as doing so might result
      in a broken deployment. If this occurs, the standard removal approach may
      not succeed and
      <a :href="removeLink"
        ><span style="color: rgb(16, 185, 129)">Manual Removal</span></a
      >
      may be required.
    </p>
  </div>
</template>

<script>
export default {
  name: 'WarningSimultaneousDeployments',
  props: ['removeLink'],
};
</script>
