import DefaultTheme from 'vitepress/theme';
import VersionPicklist from '../../_components/reference/VersionPicklist.vue';
import UiMarkdown from '../../_components/UiMarkdown.vue';
import Tabs from '../../_components/Tabs.vue';
import FancyButton from '../../_components/FancyButton.vue';
import SearchBtn from '../../_components/search/SearchBtn.vue';
import SearchBox from '../../_components/search/SearchBox.vue';
import PillButtons from '../../_components/PillButtons.vue';
import BlogPosts from '../../_components/explore/BlogPosts.vue';
import JobsEmailAddress from '../../_components/explore/JobsEmailAddress.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('VersionPicklist', VersionPicklist);
    app.component('UiMarkdown', UiMarkdown);
    app.component('Tabs', Tabs);
    app.component('FancyButton', FancyButton);
    app.component('SearchBtn', SearchBtn);
    app.component('SearchBox', SearchBox);
    app.component('PillButtons', PillButtons);
    app.component('BlogPosts', BlogPosts);
    app.component('JobsEmailAddress', JobsEmailAddress);
  },
  globalSearch: { index: { tag: 'myTags' } },
};
