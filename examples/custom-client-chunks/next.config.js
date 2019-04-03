const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')

const nextConfig = {
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html'
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html'
    }
  },
  webpack (config, { dev, buildId, isServer }) {
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups.momenetjs = {
        name: 'momenetjs',
        chunks: chunk => {
          return (
            [
              `static/${buildId}/pages/about.js`,
              `static/${buildId}/pages/contact.js`
            ].indexOf(chunk.name) !== -1
          )
        },
        minChunks: 2,
        enforce: true
      }
    }

    return config
  }
}

module.exports = withBundleAnalyzer(nextConfig)
