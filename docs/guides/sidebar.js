module.exports = [
  {
    text: '',
    collapsed: false,
    items: [{ text: 'Getting Started', link: '/guides/' }],
  },
  {
    text: 'Airnode',
    collapsed: false,
    items: [
      {
        text: 'Setting up an Airnode with your API',
        link: '/guides/airnode/setting-up-airnode/',
      },
      {
        text: 'Deploying an Airnode on a Cloud Provider',
        collapsed: false,
        items: [
          {
            text: '• Deploying Airnode via AWS',
            link: '/guides/airnode/deploy-airnode/deploy-aws/',
          },
          {
            text: '• Deploying Airnode via GCP',
            link: '/guides/airnode/deploy-airnode/deploy-gcp/',
          },
          {
            text: '• Deploying Airnode locally using Docker',
            link: '/guides/airnode/deploy-airnode/deploy-container/',
          },
          {
            text: '• Generating Airnode Config using ChainAPI',
            link: '/guides/airnode/deploy-airnode/generate-config-chainapi/',
          },
        ],
      },
      {
        text: 'Calling an Airnode',
        link: '/guides/airnode/calling-an-airnode/',
      },
      {
        text: 'Post processing',
        link: '/guides/airnode/post-processing/',
      },
      {
        text: 'Making an RRP Request',
        link: '/guides/airnode/rrp-request',
      },
      {
        text: 'Making RRP Template Requests',
        link: '/guides/airnode/using-rrp-templates',
      },
      {
        text: 'Monorepo Examples',
        link: '/guides/airnode/monorepo-examples',
      },
    ],
  },
  {
    text: 'QRNG',
    collapsed: false,
    items: [
      {
        text: 'Getting Started with QRNG',
        link: '/guides/qrng/',
      },
      {
        text: 'Using QRNG - Remix Example',
        link: '/guides/qrng/qrng-remix/',
      },
      {
        text: 'QRNG YouTube Tutorials',
        link: '/guides/qrng/youtube-demos/',
      },
    ],
  },
];
