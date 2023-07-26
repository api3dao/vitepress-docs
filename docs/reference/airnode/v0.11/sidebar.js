module.exports = [
  {
    text: 'Understanding Airnode',
    collapsed: false,
    items: [
      {
        text: 'Overview',
        link: '/reference/airnode/v0.11/understand/',
      },
      {
        text: 'Configuring Airnode',
        link: '/reference/airnode/v0.11/understand/configuring',
      },
      {
        text: 'API Integration',
        link: '/reference/airnode/v0.11/understand/api-integration',
      },
      {
        text: 'API Security',
        link: '/reference/airnode/v0.11/understand/api-security',
      },
      {
        text: 'Using Authorizers',
        link: '/reference/airnode/v0.11/understand/apply-auth',
      },
      {
        text: 'Using Authorizations',
        link: '/reference/airnode/v0.11/understand/using-authorizations',
      },
      {
        text: 'Heartbeat',
        link: '/reference/airnode/v0.11/understand/heartbeat',
      },
      {
        text: 'HTTP Gateways',
        link: '/reference/airnode/v0.11/understand/http-gateways',
      },
      {
        text: 'OEV Gateway',
        link: '/reference/airnode/v0.11/understand/oev-gateway',
      },
      {
        text: 'Deploying Airnode',
        link: '/reference/airnode/v0.11/understand/deploying',
      },
      {
        text: 'Monitoring Airnode',
        link: '/reference/airnode/v0.11/understand/monitor',
      },
    ],
  },
  {
    text: 'Airnode for dApp Developers',
    collapsed: false,
    items: [
      { text: 'Airnode RRP', link: '/reference/airnode/v0.11/developers/' },
      {
        text: 'Requesters and Sponsors',
        link: '/reference/airnode/v0.11/developers/requesters-sponsors',
      },
      {
        text: 'Using Templates (RRP)',
        link: '/reference/airnode/v0.11/developers/using-templates',
      },
      {
        text: 'Verify Airnode Addresses',
        link: '/reference/airnode/v0.11/developers/verify-airnode-addresses',
      },
    ],
  },
  {
    text: 'Deployment References',
    collapsed: false,
    items: [
      {
        text: 'Contract Addresses',
        link: '/reference/airnode/v0.11/',
      },
      { text: 'Versions', link: '/reference/airnode/v0.11/versions' },
      {
        text: 'Cloud Resources',
        link: '/reference/airnode/v0.11/cloud-resources',
      },
      {
        text: 'Chain Idiosyncrasies',
        link: '/reference/airnode/v0.11/chain-idiosyncrasies',
      },
      {
        text: 'Migration Guide',
        link: '/reference/airnode/v0.11/migration',
      },
    ],
  },
  {
    text: 'Concepts and Definitions',
    collapsed: true,
    items: [
      {
        text: 'Request-Response Protocol',
        link: '/reference/airnode/v0.11/concepts/',
      },
      {
        text: 'Airnode',
        link: '/reference/airnode/v0.11/concepts/airnode',
      },
      {
        text: 'Endpoint',
        link: '/reference/airnode/v0.11/concepts/endpoint',
      },
      {
        text: 'Authorizers',
        link: '/reference/airnode/v0.11/concepts/authorizers',
      },
      {
        text: 'Authorizations',
        link: '/reference/airnode/v0.11/concepts/authorizations',
      },
      {
        text: 'Airnode Authentication',
        link: '/reference/airnode/v0.11/concepts/airnode-auth',
      },
      {
        text: 'Relayed Meta Data Authentication',
        link: '/reference/airnode/v0.11/concepts/relay-meta-auth',
      },
      {
        text: 'Requester',
        link: '/reference/airnode/v0.11/concepts/requester',
      },
      {
        text: 'Sponsor',
        link: '/reference/airnode/v0.11/concepts/sponsor',
      },

      {
        text: 'Template',
        link: '/reference/airnode/v0.11/concepts/template',
      },
      {
        text: 'Request',
        link: '/reference/airnode/v0.11/concepts/request',
      },
      {
        text: 'Chain Providers',
        link: '/reference/airnode/v0.11/concepts/chain-providers',
      },
      {
        text: 'Gas Price Strategies',
        link: '/reference/airnode/v0.11/concepts/gas-prices',
      },
    ],
  },
  {
    text: 'Docker Images',
    collapsed: false,
    items: [
      {
        text: 'Overview',
        link: '/reference/airnode/v0.11/docker/',
      },
      {
        text: 'AWS/GCP Deployer Image',
        link: '/reference/airnode/v0.11/docker/deployer-image',
      },
      {
        text: 'Client Image',
        link: '/reference/airnode/v0.11/docker/client-image',
      },
      {
        text: 'Admin CLI Image',
        link: '/reference/airnode/v0.11/docker/admin-cli-image',
      },
    ],
  },
  {
    text: 'Deployment Files',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/reference/airnode/v0.11/deployment-files/' },

      {
        text: 'config.json',
        link: '/reference/airnode/v0.11/deployment-files/config-json',
      },
      {
        text: 'secrets.env',
        link: '/reference/airnode/v0.11/deployment-files/secrets-env',
      },
      {
        text: 'aws.env',
        link: '/reference/airnode/v0.11/deployment-files/aws-env',
      },
      {
        text: 'receipt.json',
        link: '/reference/airnode/v0.11/deployment-files/receipt-json',
      },
      {
        text: 'Examples',
        items: [
          {
            text: 'config.json',
            link: '/reference/airnode/v0.11/deployment-files/examples/config-json',
          },
          {
            text: 'secrets.env',
            link: '/reference/airnode/v0.11/deployment-files/examples/secrets-env',
          },
          {
            text: 'aws.env',
            link: '/reference/airnode/v0.11/deployment-files/examples/aws-env',
          },
        ],
      },
      {
        text: 'Templates',
        items: [
          {
            text: 'OIS Object',
            link: '/reference/airnode/v0.11/deployment-files/templates/ois-json',
          },
          {
            text: 'config.json',
            link: '/reference/airnode/v0.11/deployment-files/templates/config-json',
          },
          {
            text: 'secrets.env',
            link: '/reference/airnode/v0.11/deployment-files/templates/secrets-env',
          },
          {
            text: 'aws.env',
            link: '/reference/airnode/v0.11/deployment-files/templates/aws-env',
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
        link: '/reference/airnode/v0.11/specifications/ois',
      },
      {
        text: 'Airnode ABI',
        link: '/reference/airnode/v0.11/specifications/airnode-abi',
      },
      {
        text: 'Reserved Parameters',
        link: '/reference/airnode/v0.11/specifications/reserved-parameters',
      },
    ],
  },
  {
    text: 'Packages',
    collapsed: true,
    items: [
      { text: 'Overview', link: '/reference/airnode/v0.11/packages/' },
      { text: 'Adapter', link: '/reference/airnode/v0.11/packages/adapter' },
      {
        text: 'Airnode ABI',
        link: '/reference/airnode/v0.11/packages/airnode-abi',
      },
      {
        text: 'Admin CLI',
        link: '/reference/airnode/v0.11/packages/admin-cli',
      },
      { text: 'Deployer', link: '/reference/airnode/v0.11/packages/deployer' },
      {
        text: 'Validator',
        link: '/reference/airnode/v0.11/packages/validator',
      },
    ],
  },
];
