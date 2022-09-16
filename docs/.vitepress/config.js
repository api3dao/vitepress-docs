export default {
  title: 'Documentation',
  description: 'Just playing around.',
  markdown: {
    lineNumbers: true,
  },
  appearance: true,
  ignoreDeadLinks: true,
  head: [
    [
      'link',
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/small-logo.png' },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/small-logo.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/small-logo.png',
      },
    ],
  ],
  basePaths: {
    '/': 'All Documentation',
    '/airnode/v0.7': 'Airnode v0.7',
    '/airnode/v0.6': 'Airnode v0.6',
    '/airnode/v0.5': 'Airnode v0.5',
    '/airnode/v0.4': 'Airnode v0.4',
    '/airnode/v0.3': 'Airnode v0.3',
    '/airnode/v0.2': 'Airnode v0.2',
    '/airnode/pre-alpha': 'Airnode pre-alpha',
    '/api3': 'API3',
    '/chainapi': 'ChainAPI',
    '/dapis': 'dAPIs',
    '/dao-members': 'DAO Members',
    '/ois/v1.1': 'OIS v1.1',
    '/ois/v1.0': 'OIS v1.0',
    '/qrng': 'QRNG',
  },
  themeConfig: {
    logo: {
      light: './API3-Active.png',
      dark: './api3-inactive.png',
    },
    siteTitle: 'Documentation',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/api3dao/api3-docs' },
      {
        icon: 'discord',
        link: 'https://discord.com/channels/758003776174030948/765618225144266793',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present API3',
    },
    sidebar: {
      '/explore/': require('../explore/sidebar.js'),
      '/guides/developers/': require('../guides/developers/sidebar.js'),
      '/guides/providers/': require('../guides/providers/sidebar.js'),
      '/reference/airnode/v0.8/': require('../reference/airnode/v0.8/sidebar.js'),
      '/reference/airnode/latest/': require('../reference/airnode/latest/sidebar.js'),
      '/reference/airnode/v0.6/': require('../reference/airnode/v0.6/sidebar.js'),
      '/reference/airnode/v0.5/': require('../reference/airnode/v0.5/sidebar.js'),
      '/reference/airnode/v0.4/': require('../reference/airnode/v0.4/sidebar.js'),
      '/reference/airnode/v0.3/': require('../reference/airnode/v0.3/sidebar.js'),
      '/reference/airnode/v0.2/': require('../reference/airnode/v0.2/sidebar.js'),
      '/reference/airnode/pre-alpha/': require('../reference/airnode/pre-alpha/sidebar.js'),
      '/reference/ois/v1.1/': require('../reference/ois/v1.1/sidebar.js'),
      '/reference/ois/v1.0/': require('../reference/ois/v1.0/sidebar.js'),
      '/reference/dapis/': require('../reference/dapis/sidebar.js'),
    },
    nav: nav(),
    algolia: {
      appId: 'x',
      apiKey: 'x',
      indexName: 'me',
    },
  },
};

function nav() {
  return [
    { text: 'Home', link: '/' },
    { text: 'Explore', link: '/explore/', activeMatch: '/explore/.*' },
    {
      text: 'Guides',
      items: [
        { text: 'dAPP Developers', link: '/guides/developers/' },
        { text: 'API Providers', link: '/guides/providers/' },
      ],
    },
    {
      text: 'Reference',
      items: [
        { text: 'dAPIs', link: '/reference/dapis/introduction/api3-market.md' },
        { text: 'Airnode', link: '/reference/airnode/latest/' },
        { text: 'OIS', link: '/reference/ois/v1.1/' },
      ],
    },
  ];
}
