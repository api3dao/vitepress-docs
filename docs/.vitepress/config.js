export default {
  title: 'Documentation',
  description: 'Just playing around.',
  markdown: {
    lineNumbers: true,
    toc: ['h2', 'h3', 'h4', 'h5'],
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
      '/guides/': require('../guides/sidebar.js'),
      '/reference/airnode/latest/': require('../reference/airnode/latest/sidebar.js'),
      '/reference/ois/latest/': require('../reference/ois/latest/sidebar.js'),
      '/reference/ois/v1.0/': require('../reference/ois/v1.0/sidebar.js'),
      '/reference/dapis/': require('../reference/dapis/sidebar.js'),
      '/dev/': require('../dev/sidebar.js'),
    },
    nav: nav(),
    /*algolia: {
      appId: 'x',
      apiKey: 'x',
      indexName: 'me',
    },*/
  },
};

function nav() {
  return [
    { text: 'Home', link: '/' },
    { text: 'Explore', link: '/explore/', activeMatch: '/explore/.*' },
    { text: 'Guides', link: '/guides/', activeMatch: '/guides/.*' },
    {
      text: 'Reference',
      items: [
        { text: 'dAPIs', link: '/reference/dapis/introduction/api3-market.md' },
        { text: 'Airnode', link: '/reference/airnode/latest/' },
        { text: 'OIS', link: '/reference/ois/latest/' },
      ],
    },
  ];
}
