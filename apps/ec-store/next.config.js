//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = (/** @type {boolean} */ isServer) => {
  const location = isServer ? 'ssr' : 'chunks';

  return {
    store: `store@${process.env.NEXT_PUBLIC_STORE_URL}/_next/static/${location}/remoteEntry.js`,
    cart: `cart@${process.env.NEXT_PUBLIC_CART_URL}/_next/static/${location}/remoteEntry.js`,
    member: `member@${process.env.NEXT_PUBLIC_MEMBER_URL}/_next/static/${location}/remoteEntry.js`,
    order: `order@${process.env.NEXT_PUBLIC_ORDER_URL}/_next/static/${location}/remoteEntry.js`,
  };
};

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
        hostname: 's3-ap-northeast-1.amazonaws.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'global-bbn-s3.s3.ap-northeast-1.amazonaws.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'dummyjson.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdn2.thecatapi.com',
        pathname: '**',
      },
    ],
    dangerouslyAllowSVG: true,
  },
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'store',
        filename: 'static/chunks/remoteEntry.js',
        remotes: remotes(isServer),
        extraOptions: {},
        exposes: {},
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
