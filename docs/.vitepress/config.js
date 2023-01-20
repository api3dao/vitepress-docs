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
    ['link', { rel: 'stylesheet', href: '/api3.css' }],
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
  themeConfig: {
    logo: {
      light: '/API3-Active.png',
      dark: '/api3-inactive.png',
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
      '/reference/dapis/': require('../reference/dapis/sidebar.js'),
      '/reference/chainapi/': require('../../archives/reference/chainapi/sidebar.js'),
      '/reference/qrng/': require('../reference/qrng/sidebar.js'),
      '/reference/dao-members/': require('../reference/dao-members/sidebar.js'),
      '/dev/': require('../dev/sidebar.js'),
    },
    nav: nav(),
  },
};

function nav() {
  return [
    { text: 'Home', link: '/' },
    {
      text: 'Explore',
      link: '/explore/introduction/',
      activeMatch: '/explore/.*',
    },
    { text: 'Guides', link: '/guides/', activeMatch: '/guides/.*' },
    {
      text: 'Reference',
      items: [
        { text: 'dAPIs', link: '/reference/dapis/' },
        { text: 'Airnode', link: '/reference/airnode/latest/' },
        { text: 'OIS', link: '/reference/ois/latest/' },
        { text: 'QRNG', link: '/reference/qrng/' },
        { text: 'DAO Members', link: '/reference/dao-members/' },
      ],
    },
  ];
}
