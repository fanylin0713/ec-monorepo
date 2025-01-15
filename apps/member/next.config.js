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
  // outputFileTracingRoot: path.join(__dirname, '../../'),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-ap-northeast-1.amazonaws.com',
        pathname: '**',
      },
    ],
    dangerouslyAllowSVG: true,
  },
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'member',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {},
        extraOptions: {},
        exposes: {
          './MemberStatus': './components/MemberStatus.tsx',
          './LoginForm': './components/LoginForm.tsx',
          './member-slice': './lib/features/MemberSlice.ts',
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
