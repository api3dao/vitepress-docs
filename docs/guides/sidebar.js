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
            text: '• Funding a self-funded dAPI',
            link: '/guides/dapis/funding-self-funded-dapi/',
          },
          {
            text: '• Deploying a proxy for self-funded dAPIs',
            link: '/guides/dapis/deploying-proxy-self-funded-dapi/',
          },
          {
            text: '• Reading a self-funded dAPI proxy',
            link: '/guides/dapis/read-self-funded-dapi/',
          },
          {
            text: '• Funding multiple self-funded dAPIs via Gelato',
            link: '/guides/dapis/funding-multiple-self-funded-dapis/',
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
        text: 'Quick Start AWS',
        link: '/guides/airnode/quick-start-aws/',
      },
      {
        text: 'Quick Start GCP',
        link: '/guides/airnode/quick-start-gcp/',
      },
      {
        text: 'Quick Start Docker Container',
        link: '/guides/airnode/quick-start-container/',
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
        text: 'QRNG Example',
        link: '/guides/qrng/qrng-example',
      },
      {
        text: 'Remix Example',
        link: '/guides/qrng/remix-example/',
      },
      {
        text: 'Youtube QRNG-NFT Example',
        link: '/guides/qrng/youtube-nft-example',
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
