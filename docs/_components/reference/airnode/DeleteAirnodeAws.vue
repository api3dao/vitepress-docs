<!--
This component displays a simple form to guide the reader through
a manual removal of an Airnode from AWS. Prior to Airnode v0.4 the 
DynamoDB was used for an Airnode. Because DynamoDB was removed in v0.4
a new property was added allowing the parent component to show the 
DynamoDB instructions which are normally hidden.
https://renatello.com/dynamic-drop-down-list-in-vue-js/
-->

<template>
  <span>
    <!-- TODO: Is there an AWS API to pull down a list of regions? -->

    <div>Select the region where your Airnode lives.</div>
    <!-- prettier-ignore -->
    <select class="picklist" @change="setRegion($event)">
      <option value="us-east-1">US East (N. Virginia) us-east-1</option>
      <option value="us-east-2">US East (Ohio) us-east-2</option>
      <option value="us-west-1">US West (N. California) us-west-1</option>
      <option value="us-west-2">US West (Oregon) us-west-2</option>
      <option disabled>──────────────</option>
      <option value="af-south-1">Africa (Cape Town) af-south-1</option>
      <option disabled>──────────────</option>
      <option value="ap-east-1">Asia Pacific (Hong Kong) ap-east-1</option>
      <option value="ap-south-1">Asia Pacific (Mumbai) ap-south-1</option>
      <option value="ap-northeast-3">Asia Pacific (Osaka) ap-northeast-3</option>
      <option value="ap-northeast-2">Asia Pacific (Seoul) ap-northeast-2</option>
      <option value="ap-southeast-1">Asia Pacific (Singapore) ap-southeast-1</option>
      <option value="ap-southeast-2">Asia Pacific (Sydney) ap-southeast-2</option>
      <option value="ap-northeast-1">Asia Pacific (Tokyo) ap-northeast-1</option>
      <option disabled>──────────────</option>
      <option value="ca-central-1">Canada (Central) ca-central-1</option>
      <option disabled>──────────────</option>
      <option value="eu-central-1">Europe (Frankfurt) eu-central-1</option>
      <option value="eu-west-1">Europe (Ireland) eu-west-1</option>
      <option value="eu-west-2">Europe (London) eu-west-2</option>
      <option value="eu-south-1">Europe (Milan) eu-south-1</option>
      <option value="eu-west-3">Europe (Paris) eu-west-3</option>
      <option value="eu-north-1">Europe (Stockholm) eu-north-1</option>
      <option disabled>──────────────</option>
      <option value="me-south-1">Middle East (Bahrain) me-south-1</option>
      <option disabled>──────────────</option>
      <option value="sa-east-1">South America (São Paulo) sa-east-1</option>
    </select>

    <p>
      Click the following links and delete all elements for each feature with
      the <b>appropriate</b> <code>airnodeAddressShort</code>.
    </p>
    <!-- prettier-ignore -->
    <ul>
      <li><a :href="'https://' +region + '.console.aws.amazon.com/events/home?region=' + region + '#rules'" target="_aws-console">EventBridge<ExternalLinkImage/></a>
        :  Delete the rules.
      </li>
      
      <li><a :href="'https://' +region + '.console.aws.amazon.com/cloudwatch/home?region=' + region + '#logsV2:log-groups'" target="_aws-console">CloudWatch<ExternalLinkImage/></a>
        : Delete the log groups.
      </li>
      
      <li><a :href="'https://' +region + '.console.aws.amazon.com/lambda/home?region=' + region + '#/functions'" target="_aws-console">Lambda<ExternalLinkImage/></a>
        : Delete the functions.
      </li>

      <li v-show="dynamoDB==='show'"><a :href="'https://' +region + '.console.aws.amazon.com/dynamodbv2/home?region=' + region + '#/tables'" target="_aws-console">DynamoDB<ExternalLinkImage/></a>
        : There is one table to delete.
      </li>

      <li><a :href="'https://console.aws.amazon.com/iamv2/home?#/roles'" target="_aws-console">IAM<ExternalLinkImage/></a>
        : Delete the IAM roles.
      </li>

      <li><a :href="'https://' +region + '.console.aws.amazon.com/apigateway/main/apis?region=' + region" target="_aws-console">API Gateways<ExternalLinkImage/></a>:  Delete the API Gateways.
          <ol>
            <li>Click on the desired API Gateway.</li>
            <li>Next click on API Keys in the left hand sidebar.</li>
            <li>Then click on the Airnode specific API Key.</li>
            <li>Select the <i>Delete API Key</i> button to remove the key.</li>
            <li>Click <a :href="'https://' +region + '.console.aws.amazon.com/apigateway/main/apis?region=' + region" target="_aws-console">here<ExternalLinkImage/></a> to return to the API Gateway.</li>
            <li>Delete the API Gateway.</li>
            <li>Repeat for other Airnode gateways if present.</li>
          </ol>
      </li>

      <li><a :href="'https://s3.console.aws.amazon.com/s3/home?region=' + region" target="_aws-console">S3<ExternalLinkImage/></a>
        : Delete the Airnode's S3 bucket directory, not the S3 bucket. Drill down to the directory  
        identified by the <i>stage</i> name of the Airnode which can be found in the config.json and 
        the receipt.json files.
      </li>

    </ul>
  </span>
</template>

<script>
export default {
  name: 'DeleteAirnodeAws',
  props: ['dynamoDB'],
  data: () => ({
    region: 'us-east-1',
  }),
  methods: {
    setRegion(event) {
      this.region =
        event.target.options[event.target.options.selectedIndex].value;
    },
  },
};
</script>

<style>
.picklist {
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
  margin-top: 15px;
  max-width: 320px;
}
</style>
