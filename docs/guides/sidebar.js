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
        text: 'Getting Started with dAPIs',
        link: '/guides/dapis/',
      },
      {
        text: 'Subscribing to dAPIs',
        collapsed: false,
        items: [
          {
            text: '• Subscribing to Managed dAPIs ',
            link: '/guides/dapis/subscribing-managed-dapis/',
          },
          {
            text: '• Subscribing to Self-Funded dAPIs ',
            link: '/guides/dapis/subscribing-self-funded-dapis/',
          },
        ],
      },
      {
        text: 'Reading a dAPI Proxy',
        link: '/guides/dapis/read-a-dapi/',
      },
      {
        text: 'Automate funding of multiple dAPIs with Gelato',
        link: '/guides/dapis/funding-multiple-dapis-gelato/',
      },
    ],
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
        text: 'Deploying the Airnode on a Cloud Provider',
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
        ],
      },
      {
        text: 'Calling the Airnode via a Smart Contract',
        link: '/guides/airnode/calling-an-airnode/',
      },
      {
        text: 'Advanced Features',
        collapsed: false,
        items: [
          {
            text: '• Making RRP Template Requests',
            link: '/guides/airnode/using-rrp-templates',
          },
          {
            text: '• Post processing',
            link: '/guides/airnode/post-processing/',
          },
        ],
      },
      {
        text: 'Airnode Examples',
        link: '/guides/airnode/monorepo-examples',
      },
      //{
      //text: 'Become an API Provider',
      //link: '/guides/airnode/become-api-provider',
      //},
    ],
  },
  {
    text: 'QRNG',
    collapsed: false,
    items: [
      {
        text: 'Getting Started with QRNG',
        link: '/guides/qrng/qrng-remix/',
      },
      {
        text: 'Demo Projects',
        collapsed: false,
        items: [
          {
            text: '• Building a Lottery with QRNG',
            link: '/guides/qrng/lottery-guide/',
          },
          {
            text: '• Minting Dynamic NFTs with QRNG',
            link: '/guides/qrng/quantumon/',
          },
          {
            text: `• Building a Roulette with QRNG`,
            link: '/guides/qrng/roulette-guide/',
          },
          {
            text: '• QRNG YouTube Tutorials',
            link: '/guides/qrng/youtube-demos/',
          },
        ],
      },
      {
        text: 'QRNG FAQs',
        link: '/guides/qrng/',
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
      {
        text: 'Add testnets to MetaMask',
        link: '/guides/misc/testnets-metamask/',
      },
      { text: 'Create an Infura key', link: '/guides/misc/infura-key/' },
      {
        text: 'Remix Reload Contract',
        link: '/guides/misc/remix-reload-contract/',
      },
    ],
  },
];
