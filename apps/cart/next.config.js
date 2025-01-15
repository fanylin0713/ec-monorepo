const { composePlugins, withNx } = require('@nx/next');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  output: 'standalone',
  outputStyle: 'compressed',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dummyjson.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '**',
      },
    ],
    dangerouslyAllowSVG: true,
  },
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'cart',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {},
        extraOptions: {
          automaticAsyncBoundary: true,
        },
        exposes: {
          './CartIcon': './components/CartIcon.tsx',
          './AddCartButton': './components/AddCartButton.tsx',
          './CartList': './components/CartList.tsx',
          './cart-slice': './lib/features/CartSlice.ts',
        },
      })
    );

    return config;
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
