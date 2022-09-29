<!-- 
Display a paragraph about the execution of the deployer (linux) root permissions.
This component will is inline with any paragraph it is in. Otherwise it must 
be wrapped inside a paragraph element.
-->

<template>
  Normally (for Linux/Mac/WSL2) the deployer image <code>deploy</code> command
  is run by the user root. This may cause permission issues when the
  <code>receipt.json</code> file is generated. Optionally you can specify the
  <a href="https://en.wikipedia.org/wiki/User_identifier" target="_blank"
    >UID (user identifier)</a
  >
  and
  <a href="https://en.wikipedia.org/wiki/Group_identifier" target="_blank"
    >GID (group identifier)</a
  >
  that the deployer image should use. Do so by setting the environment variables
  USER_ID and GROUP_ID, otherwise omit the line containing the variables.
</template>

<script>
export default {
  name: 'DeployerPermissionsWarning',
};
</script>
