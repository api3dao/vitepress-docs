import DefaultTheme from 'vitepress/theme';
import VersionPicklist from '../../_components/reference/VersionPicklist.vue';
import UiMarkdown from '../../_components/UiMarkdown.vue';
import Tabs from '../../_components/Tabs.vue';
import FancyButton from '../../_components/FancyButton.vue';
import SearchBtn from '../../_components/search/SearchBtn.vue';
import SearchBox from '../../_components/search/SearchBox.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('VersionPicklist', VersionPicklist);
    app.component('UiMarkdown', UiMarkdown);
    app.component('Tabs', Tabs);
    app.component('FancyButton', FancyButton);
    app.component('SearchBtn', SearchBtn);
    app.component('SearchBox', SearchBox);
  },
  globalSearch: { index: { tag: 'myTags' } },
};
