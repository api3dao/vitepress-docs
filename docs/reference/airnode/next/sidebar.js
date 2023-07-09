module.exports = [
  {
    text: 'Understanding Airnode',
    collapsed: false,
    items: [
      {
        text: 'Overview',
        link: '/reference/airnode/next/understand/',
      },
      {
        text: 'Configuring Airnode',
        link: '/reference/airnode/next/understand/configuring',
      },
      {
        text: 'API Integration',
        link: '/reference/airnode/next/understand/api-integration',
      },
      {
        text: 'API Security',
        link: '/reference/airnode/next/understand/api-security',
      },
      {
        text: 'Using Authorizers',
        link: '/reference/airnode/next/understand/apply-auth',
      },
      {
        text: 'Using Authorizations',
        link: '/reference/airnode/next/understand/using-authorizations',
      },
      {
        text: 'Heartbeat',
        link: '/reference/airnode/next/understand/heartbeat',
      },
      {
        text: 'HTTP Gateways',
        link: '/reference/airnode/next/understand/http-gateways',
      },
      {
        text: 'OEV Gateway',
        link: '/reference/airnode/next/understand/oev-gateway',
      },
      {
        text: 'Deploying Airnode',
        link: '/reference/airnode/next/understand/deploying',
      },
      {
        text: 'Monitoring Airnode',
        link: '/reference/airnode/next/understand/monitor',
      },
    ],
  },
  {
    text: 'Airnode for dApp Developers',
    collapsed: false,
    items: [
      { text: 'Airnode RRP', link: '/reference/airnode/next/developers/' },
      {
        text: 'Requesters and Sponsors',
        link: '/reference/airnode/next/developers/requesters-sponsors',
      },
      {
        text: 'Using Templates (RRP)',
        link: '/reference/airnode/next/developers/using-templates',
      },
      { text: 'Fees', link: '/reference/airnode/next/developers/fees' },
      {
        text: 'Verify Airnode Addresses',
        link: '/reference/airnode/latest/developers/verify-airnode-addresses',
      },
    ],
  },
  {
    text: 'Deployment References',
    collapsed: false,
    items: [
      {
        text: 'Contract Addresses',
        link: '/reference/airnode/next/',
      },
      { text: 'Versions', link: '/reference/airnode/next/versions' },
      {
        text: 'Cloud Resources',
        link: '/reference/airnode/next/cloud-resources',
      },
      {
        text: 'Chain Idiosyncrasies',
        link: '/reference/airnode/next/chain-idiosyncrasies',
      },
      {
        text: 'Migration Guide',
        link: '/reference/airnode/next/migration',
      },
    ],
  },
  {
    text: 'Concepts and Definitions',
    collapsed: true,
    items: [
      {
        text: 'Request-Response Protocol',
        link: '/reference/airnode/next/concepts/',
      },
      {
        text: 'Airnode',
        link: '/reference/airnode/next/concepts/airnode',
      },
      {
        text: 'Endpoint',
        link: '/reference/airnode/next/concepts/endpoint',
      },
      {
        text: 'Authorizers',
        link: '/reference/airnode/next/concepts/authorizers',
      },
      {
        text: 'Authorizations',
        link: '/reference/airnode/next/concepts/authorizations',
      },
      {
        text: 'Airnode Authentication',
        link: '/reference/airnode/next/concepts/airnode-auth',
      },
      {
        text: 'Relayed Meta Data Authentication',
        link: '/reference/airnode/next/concepts/relay-meta-auth',
      },
      {
        text: 'Requester',
        link: '/reference/airnode/next/concepts/requester',
      },
      {
        text: 'Sponsor',
        link: '/reference/airnode/next/concepts/sponsor',
      },

      {
        text: 'Template',
        link: '/reference/airnode/next/concepts/template',
      },
      {
        text: 'Request',
        link: '/reference/airnode/next/concepts/request',
      },
      {
        text: 'Chain Providers',
        link: '/reference/airnode/next/concepts/chain-providers',
      },
      {
        text: 'Gas Price Strategies',
        link: '/reference/airnode/next/concepts/gas-prices',
      },
    ],
  },
  {
    text: 'Docker Images',
    collapsed: false,
    items: [
      {
        text: 'Overview',
        link: '/reference/airnode/next/docker/',
      },
      {
        text: 'AWS/GCP Deployer Image',
        link: '/reference/airnode/next/docker/deployer-image',
      },
      {
        text: 'Client Image',
        link: '/reference/airnode/next/docker/client-image',
      },
      {
        text: 'Admin CLI Image',
        link: '/reference/airnode/next/docker/admin-cli-image',
      },
    ],
  },
  {
    text: 'Deployment Files',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/reference/airnode/next/deployment-files/' },

      {
        text: 'config.json',
        link: '/reference/airnode/next/deployment-files/config-json',
      },
      {
        text: 'secrets.env',
        link: '/reference/airnode/next/deployment-files/secrets-env',
      },
      {
        text: 'aws.env',
        link: '/reference/airnode/next/deployment-files/aws-env',
      },
      {
        text: 'receipt.json',
        link: '/reference/airnode/next/deployment-files/receipt-json',
      },
      {
        text: 'Examples',
        items: [
          {
            text: 'config.json',
            link: '/reference/airnode/next/deployment-files/examples/config-json',
          },
          {
            text: 'secrets.env',
            link: '/reference/airnode/next/deployment-files/examples/secrets-env',
          },
          {
            text: 'aws.env',
            link: '/reference/airnode/next/deployment-files/examples/aws-env',
          },
        ],
      },
      {
        text: 'Templates',
        items: [
          {
            text: 'OIS Object',
            link: '/reference/airnode/next/deployment-files/templates/ois-json',
          },
          {
            text: 'config.json',
            link: '/reference/airnode/next/deployment-files/templates/config-json',
          },
          {
            text: 'secrets.env',
            link: '/reference/airnode/next/deployment-files/templates/secrets-env',
          },
          {
            text: 'aws.env',
            link: '/reference/airnode/next/deployment-files/templates/aws-env',
          },
        ],
      },
    ],
  },
  {
    text: 'Specifications',
    collapsed: true,
    items: [
      {
        text: 'Oracle Integration (OIS)',
        link: '/reference/airnode/next/specifications/ois',
      },
      {
        text: 'Airnode ABI',
        link: '/reference/airnode/next/specifications/airnode-abi',
      },
      {
        text: 'Reserved Parameters',
        link: '/reference/airnode/next/specifications/reserved-parameters',
      },
    ],
  },
  {
    text: 'Packages',
    collapsed: true,
    items: [
      { text: 'Overview', link: '/reference/airnode/next/packages/' },
      { text: 'Adapter', link: '/reference/airnode/next/packages/adapter' },
      {
        text: 'Airnode ABI',
        link: '/reference/airnode/next/packages/airnode-abi',
      },
      {
        text: 'Admin CLI',
        link: '/reference/airnode/next/packages/admin-cli',
      },
      { text: 'Deployer', link: '/reference/airnode/next/packages/deployer' },
      {
        text: 'Validator',
        link: '/reference/airnode/next/packages/validator',
      },
    ],
  },
];
