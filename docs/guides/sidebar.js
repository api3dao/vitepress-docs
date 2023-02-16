module.exports = [
  {
    text: '',
    collapsible: true,
    collapsed: false,
    items: [{ text: 'Getting Started', link: '/guides/' }],
  },
  {
    text: 'API3 Market',
    collapsible: true,
    collapsed: false,
    items: [{ text: 'Subscribing to dAPIs ', link: '/guides/market/' }],
  },
  {
    text: 'dAPIs',
    collapsible: true,
    collapsed: false,
    items: [
      {
        text: 'Self-Funded dAPIs',
        collapsible: true,
        collapsed: false,
        items: [
          {
            text: '• Getting Started with Self-Funded dAPIs',
            link: '/guides/dapis/getting-started-self-funded-dapi/',
          },
          {
            text: '• Reading a Self-Funded dAPI Proxy',
            link: '/guides/dapis/read-self-funded-dapi/',
          },
        ],
      },
    ],
  },
  {
    text: 'Airnode',
    collapsible: true,
    collapsed: false,
    items: [
      {
        text: 'Deploying an Airnode',
        link: '/guides/airnode/deploy-airnode/generate-config-chainapi/',
        collapsible: true,
        collapsed: false,
        items: [
          {
            text: 'Generating Airnode Config using ChainAPI',
            link: '/guides/airnode/deploy-airnode/generate-config-chainapi/',
          },
          {
            text: 'Deploying Airnode via AWS',
            link: '/guides/airnode/deploy-airnode/deploy-aws/',
          },
          {
            text: 'Deploying Airnode via GCP',
            link: '/guides/airnode/deploy-airnode/deploy-gcp/',
          },
          {
            text: 'Deploying Airnode locally using Docker',
            link: '/guides/airnode/deploy-airnode/deploy-container/',
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
  /*{
    text: 'ChainAPI',
    collapsible: true,
    collapsed: false,
    items: [
      {
        text: 'Integrate your API',
        link: '/guides/chainapi/integrate',
      },
      {
        text: 'Deploy an API Integration',
        link: '/guides/chainapi/deploy',
      },
    ],
  },*/
  {
    text: 'QRNG',
    collapsible: true,
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
    collapsible: true,
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
    collapsible: true,
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
