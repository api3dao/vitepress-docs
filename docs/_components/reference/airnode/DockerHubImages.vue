<!--
Shows a list of Docker images for each deployed nodeVersion. Only useful 
inside the Airnode doc set.
-->

<template>
  <span>
    <p>
      All images are available on DockerHub, see the links below. It is not
      required to download these manually as they are pulled automatically when
      running the provided Docker desktop commands.
    </p>

    <ul>
      <li>
        <a
          :href="'https://hub.docker.com/r/api3/airnode-deployer/tags'"
          target="_docker-hub"
          >AWS/GCP Deployer Images
        </a>
      </li>

      <li>
        <a
          :href="'https://hub.docker.com/r/api3/airnode-client/tags'"
          target="_docker-hub"
          >Client Images
        </a>
      </li>

      <li>
        <a
          :href="'https://hub.docker.com/r/api3/airnode-admin/tags'"
          target="_docker-hub"
          >Admin CLI Images
        </a>
      </li>
    </ul>

    <p>
      All image versions must pair with the
      <a class="route-link" :href="path"> nodeVersion </a>
      from your Airnode config.json file. However there is a
      <code>latest</code> image version provided for convenience which always
      requires the highest <code>nodeVersion</code> found in the
      <code>config.json</code>
      file at the time of its execution.
    </p>
  </span>
</template>

<script>
import { useRoute } from 'vitepress';

export default {
  name: 'DockerHubImages',
  data: () => ({
    path: '',
    route: useRoute().path,
  }),
  mounted() {
    this.$nextTick(function () {
      this.path =
        '/' +
        this.route.split('/')[1] +
        '/' +
        this.route.split('/')[2] +
        '/' +
        this.route.split('/')[3] +
        '/deployment-files/config-json.html#nodeversion';
    });
  },
};
</script>
