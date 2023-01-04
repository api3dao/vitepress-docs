module.exports = [
  {
    text: '',
    collapsable: false,
    items: [
      { text: 'Understanding QRNG', link: '/reference/qrng/' },
      {
        text: 'Chains',
        link: '/reference/qrng/chains',
      },
      { text: 'Providers', link: '/reference/qrng/providers' },
      { text: 'QrngExample.sol', link: '/reference/qrng/qrng-example' },
      { text: 'RemixExample.sol', link: '/reference/qrng/remix-example' },
    ],
  },

  {
    text: 'Contracts and Functions',
    collapsible: true,
    collapsed: false,
    items: [
      {
        text: 'AirnodeRrpV0.sol',
        link: '/reference/qrng/functions/airnode-rrp-v0',
      },
      {
        text: 'makeFullRequest()',
        link: '/reference/qrng/functions/make-full-request',
      },
    ],
  },
];
