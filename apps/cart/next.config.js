//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
// const deps = require('../package.json').dependencies;

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
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
  /**
   *
   * @param {import('webpack').Configuration} config
   * @returns {import('webpack').Configuration}
   */
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
        // shared: {
        //   ...deps,
        //   react: {
        //     singleton: true,
        //     requiredVersion: deps['react'],
        //   },
        //   'react-dom': {
        //     singleton: true,
        //     requiredVersion: deps['react-dom'],
        //   },
        // },
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
