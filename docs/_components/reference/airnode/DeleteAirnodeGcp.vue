<!--
This component displays a simple form to guide the reader through
a manual removal of an Airnode from GCP. 
-->

<template>
  <span>
    <p>
      The steps below assume you have created a project that belongs to an
      organization.
    </p>

    <form action="#">
      <label for="fname">Enter your GCP project ID:</label>
      <br />
      <input
        class="inputField"
        type="text"
        :value="projectId"
        id="projectId"
        name="projectId"
      /><br /><br />
    </form>

    <p>Click the following links and delete all elements in each feature.</p>
    <!-- prettier-ignore -->
    <ul>
      <li><a :href="'https://console.cloud.google.com/api-gateway/api?orgonly=true&project='+projectId+'&supportedpurview=organizationId'" 
      target="_gcp-console">API Gateways</a>
        :  Delete the API Gateways.
        <ol>
          <li>Click on the gateway.</li>
          <li>Click on the GATEWAYS tab.</li>
          <li>Delete the gateway (a static red delete circle is the only feedback). Please wait as this can take a few minutes.</li>
          <li>Click on the CONFIGS tab.</li>
          <li>Delete the config file.</li>
          <li>Click the back arrow to return to the gateway summary page.</li>
          <li>Delete the gateway summary line (a static red delete circle is the only feedback). Please wait as this can take a several minutes.</li>
          <li>Repeat for other Airnode gateways if present.</li>
        </ol>
      </li>

      <li><a :href="'https://console.cloud.google.com/cloudscheduler?orgonly=true&project='+projectId+'&supportedpurview=organizationId'" 
      target="_gcp-console">Cloud Scheduler</a>
        : Delete the Cloud Scheduler.
      </li>
      
      <li><a :href="'https://console.cloud.google.com/functions?orgonly=true&project='+projectId+'&supportedpurview=organizationId'" 
      target="_gcp-console">Cloud Functions</a>
        : Delete all five Cloud Functions.
      </li>
                  
      <li><a :href="'https://console.cloud.google.com/storage/browser?forceOnBucketsSortingFiltering=false&orgonly=true&project='+projectId+'&supportedpurview=organizationId&prefix=&forceOnObjectsSortingFiltering=false'" 
      target="_gcp-console">Cloud Storage</a>
        : Delete the Airnode's bucket directory, not the bucket. Drill down to the directory 
        identified by the <i>stage</i> name of the Airnode which can be found in the config.json and 
        the receipt.json files.
      </li>
    </ul>

    <hr />
    <p>
      After removing an Airnode it may be necessary to wait several minutes
      before deploying / redeploying Airnode again to the same project. GCP
      takes several minutes to complete its behind the scenes clean-up of
      deleted cloud resources.
    </p>
  </span>
</template>

<script>
export default {
  name: 'DeleteAirnodeGcp',
  data: () => ({
    projectId: null,
    inputField: null,
  }),
  mounted() {
    this.$nextTick(function () {
      this.inputField = document.querySelector('#projectId');
      this.inputField.addEventListener('keyup', (event) => {
        this.projectId = this.inputField.value;
      });
    });
  },
};
</script>

<style>
.inputField {
  font-size: large;
  padding: 5px;
  color: gray;
  border: 2px solid gray;
  border-radius: 5px;
  /* Do not change the below settings. These are needed
     for mobile devices to prevent horizontal scrolling
     of the viewport, excluding margin-top.
  */
  margin-left: 0px;
  margin-top: 10px;
  max-width: 250px;
}
</style>
