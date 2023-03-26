import DefaultTheme from 'vitepress/theme';
import Api3Layout from './Api3Layout.vue';
import VersionPicklist from '../../_components/reference/VersionPicklist.vue';
import SearchBtn from '../../_components/search/SearchBtn.vue';
import SearchResults from '../../_components/search/SearchResults.vue';
import TutorialResponse from '../../_components/guides/TutorialResponse.vue';
import WarningSimultaneousDeployments from '../../_components/guides/WarningSimultaneousDeployments.vue';
import DeployerPermissionsWarning from '../../_components/guides/DeployerPermissionsWarning.vue';
import VersionWarning from '../../_components/VersionWarning.vue';
import PageHeader from '../../_components/PageHeader.vue';
import OisAirnodeVersions from '../../_components/reference/ois/OisAirnodeVersions.vue';
import InfoBtnBlue from '../../_components/InfoBtnBlue.vue';
import ExternalLinkImage from '../../_components/ExternalLinkImage.vue';
import CopyIcon from '../../_components/CopyIcon.vue';
import SponsorWalletWarning from '../../_components/reference/airnode/SponsorWalletWarning.vue';
import DockerHubImages from '../../_components/reference/airnode/DockerHubImages.vue';
import DeleteAirnodeAws from '../../_components/reference/airnode/DeleteAirnodeAws.vue';
import DeleteAirnodeGcp from '../../_components/reference/airnode/DeleteAirnodeGcp.vue';
import Video from '../../_components/Video.vue';
import SearchHighlight from '../../_components/SearchHighlight.vue';
import NavBox from '../../_components/NavBox.vue';
import NavBoxViewer from '../../_components/NavBoxViewer.vue';
import TodoLink from '../../_components/TodoLink.vue';
import FlexStartTag from '../../_components/FlexStartTag.vue';
import FlexEndTag from '../../_components/FlexEndTag.vue';

export default {
  ...DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: Api3Layout,
  enhanceApp({ app }) {
    app.component('VersionPicklist', VersionPicklist);
    app.component('SearchBtn', SearchBtn);
    app.component('SearchResults', SearchResults);
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
    app.component('SponsorWalletWarning', SponsorWalletWarning);
    app.component('DockerHubImages', DockerHubImages);
    app.component('DeleteAirnodeAws', DeleteAirnodeAws);
    app.component('DeleteAirnodeGcp', DeleteAirnodeGcp);
    app.component('Video', Video);
    app.component('SearchHighlight', SearchHighlight);
    app.component('NavBox', NavBox);
    app.component('NavBoxViewer', NavBoxViewer);
    app.component('TodoLink', TodoLink);
    app.component('FlexStartTag', FlexStartTag);
    app.component('FlexEndTag', FlexEndTag);
  },
  globalSearch: { index: { tag: 'myTags' } },
};
