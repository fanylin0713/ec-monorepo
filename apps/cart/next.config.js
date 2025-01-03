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
          './CountButtonGroup': './components/CountButtonGroup.tsx',
          './CountText': './components/CountText.tsx',
          './counter-slice': './lib/features/CounterSlice.ts',
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
