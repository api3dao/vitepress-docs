import DefaultTheme from 'vitepress/theme';
import VersionPicklist from '../../_components/reference/VersionPicklist.vue';
//import UiMarkdown from '../../_components/UiMarkdown.vue';
import Tabs from '../../_components/Tabs.vue';
import SearchBtn from '../../_components/search/SearchBtn.vue';
import SearchResults from '../../_components/search/SearchResults.vue';
import BlogPosts from '../../_components/explore/BlogPosts.vue';
import JobsEmailAddress from '../../_components/explore/JobsEmailAddress.vue';
import TutorialResponse from '../../_components/guides/TutorialResponse.vue';
import WarningSimultaneousDeployments from '../../_components/guides/WarningSimultaneousDeployments.vue';
import DeployerPermissionsWarning from '../../_components/guides/DeployerPermissionsWarning.vue';
import VersionWarning from '../../_components/VersionWarning.vue';
import PageHeader from '../../_components/PageHeader.vue';
import OisAirnodeVersions from '../../_components/reference/ois/OisAirnodeVersions.vue';
import InfoBtnBlue from '../../_components/InfoBtnBlue.vue';
import ExternalLinkImage from '../../_components/ExternalLinkImage.vue';
import CopyIcon from '../../_components/CopyIcon.vue';
import ContractAddresses from '../../_components/reference/airnode/ContractAddresses.vue';
import SponsorWalletWarning from '../../_components/reference/airnode/SponsorWalletWarning.vue';
import ChainsList from '../../_components/reference/dapis/chains/ChainsList.vue';
import ChainsItem from '../../_components/reference/dapis/chains/ChainsItem.vue';
import DockerHubImages from '../../_components/reference/airnode/DockerHubImages.vue';
import DeleteAirnodeAws from '../../_components/reference/airnode/DeleteAirnodeAws.vue';
import DeleteAirnodeGcp from '../../_components/reference/airnode/DeleteAirnodeGcp.vue';
import ChainName from '../../_components/ChainName.vue';
import ElementSelect from '../../_components/ElementSelect.vue';
import Video from '../../_components/Video.vue';
import SearchHighlight from '../../_components/SearchHighlight.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('VersionPicklist', VersionPicklist);
    //app.component('UiMarkdown', UiMarkdown);
    app.component('Tabs', Tabs);
    app.component('SearchBtn', SearchBtn);
    app.component('SearchResults', SearchResults);
    app.component('BlogPosts', BlogPosts);
    app.component('JobsEmailAddress', JobsEmailAddress);
    app.component('TutorialResponse', TutorialResponse);
    app.component(
      'WarningSimultaneousDeployments',
      WarningSimultaneousDeployments
    );
    app.component('DeployerPermissionsWarning', DeployerPermissionsWarning);
    app.component('VersionWarning', VersionWarning);
    app.component('PageHeader', PageHeader);
    app.component('OisAirnodeVersions', OisAirnodeVersions);
    app.component('InfoBtnBlue', InfoBtnBlue);
    app.component('ExternalLinkImage', ExternalLinkImage);
    app.component('CopyIcon', CopyIcon);
    app.component('ContractAddresses', ContractAddresses);
    app.component('SponsorWalletWarning', SponsorWalletWarning);
    app.component('ChainsList', ChainsList);
    app.component('ChainsItem', ChainsItem);
    app.component('DockerHubImages', DockerHubImages);
    app.component('DeleteAirnodeAws', DeleteAirnodeAws);
    app.component('DeleteAirnodeGcp', DeleteAirnodeGcp);
    app.component('ChainName', ChainName);
    app.component('ElementSelect', ElementSelect);
    app.component('Video', Video);
    app.component('SearchHighlight', SearchHighlight);
  },
  globalSearch: { index: { tag: 'myTags' } },
};
