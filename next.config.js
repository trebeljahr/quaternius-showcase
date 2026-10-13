const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  // next-pwa precaches every file under public/ by default. That is 1545 .glb
  // models, ~185 MB, downloaded by every first-time visitor. The viewer already
  // fetches a model on demand, so keep them out of the precache manifest.
  // og-image.png is only ever read by crawlers, never by the page.
  // The viewer fetches hdri/*.hdr itself on every pack page. Workbox refetches
  // precache entries past the HTTP cache, so precaching the 1.5 MB file would
  // download it twice on a first visit.
  publicExcludes: ["!glb/**/*", "!og-image.*", "!hdri/**/*"],
});

const nextConfig = {
  // Static export for Cloudflare Workers assets hosting.
  output: "export",
  // Pin the workspace root to this repo. In a git worktree nested inside the
  // main checkout, Next otherwise sees two pnpm-lock.yaml files and warns.
  outputFileTracingRoot: __dirname,
  experimental: {},
  // No image optimization server behind a static export.
  images: { unoptimized: true },
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve("url-loader"),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve("file-loader"),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? "../" : ""}static/images/`,
            name: "[name]-[hash].[ext]",
            esModule: config.esModule || false,
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ["raw-loader", "glslify-loader"],
    });

    return config;
  },
};

const KEYS_TO_OMIT = [
  "webpackDevMiddleware",
  "configOrigin",
  "target",
  "analyticsId",
  "webpack5",
  "amp",
  "assetPrefix",
  // Next 15 warns on these deprecated keys whenever they are present, and
  // spreading defaultConfig below brings them in as empty objects.
  "publicRuntimeConfig",
  "serverRuntimeConfig",
];

module.exports = (_phase, { defaultConfig }) => {
  const plugins = [[withPWA], [withBundleAnalyzer, {}]];

  const wConfig = plugins.reduce((acc, [plugin, config]) => plugin({ ...acc, ...config }), {
    ...defaultConfig,
    ...nextConfig,
  });

  const finalConfig = {};
  Object.keys(wConfig).forEach((key) => {
    if (!KEYS_TO_OMIT.includes(key)) {
      finalConfig[key] = wConfig[key];
    }
  });

  return finalConfig;
};
