module.exports = [
  {
    text: '',
    collapsed: false,
    items: [{ text: 'Getting Started', link: '/guides/' }],
  },
  {
    text: 'dAPIs',
    collapsed: false,
    items: [
      {
        text: 'Subscribing to Self-Funded dAPIs ',
        link: '/guides/dapis/subscribing-self-funded-dapis/',
      },
      {
        text: 'Reading a Self-Funded dAPI Proxy',
        link: '/guides/dapis/read-self-funded-dapi/',
      },
      /*{
        text: 'Self-Funded dAPIs',
        collapsed: false,
        items: [],
      },*/
    ],
  },
  {
    text: 'Airnode',
    collapsed: false,
    items: [
      {
        text: 'Deploying an Airnode',
        link: '/guides/airnode/deploy-airnode/generate-config-chainapi/',
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
        text: 'Making an RRP Request',
        link: '/guides/airnode/rrp-request',
      },
      {
        text: 'Using RRP Templates',
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
        link: '/guides/qrng/qrng-example',
      },
      {
        text: 'Using QRNG - Remix Guide',
        link: '/guides/qrng/qrng-remix/',
      },
      {
        text: 'Building a Lottery with QRNG',
        link: '/guides/qrng/lottery-guide/',
      },
      {
        text: 'Minting Dynamic NFTs with QRNG',
        link: '/guides/qrng/quantumon/',
      },
      {
        text: 'QRNG YouTube Tutorials',
        link: '/guides/qrng/youtube-demos/',
      },
    ],
  },
  {
    text: 'DAO Members',
    collapsed: false,
    items: [
      {
        text: 'DAO Dashboard',
        link: '/guides/dao-members/',
      },
      {
        text: 'Staking Tokens',
        link: '/guides/dao-members/staking',
      },
      {
        text: 'Working with Proposals',
        link: '/guides/dao-members/proposals',
      },
      {
        text: 'How to Vote',
        link: '/guides/dao-members/voting',
      },
      {
        text: 'Videos',
        link: '/guides/dao-members/videos',
      },
    ],
  },
  {
    text: 'Miscellaneous',
    collapsed: false,
    items: [
      { text: 'Create an Infura key', link: '/guides/infura-key' },
      {
        text: 'Remix Reload Contract',
        link: '/guides/remix-reload-contract',
      },
    ],
  },
];
