const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const isDevelopment = process.env.NODE_ENV === 'development'
const runtimeCaching = require('next-pwa/cache')
const nextTranslate = require('next-translate')
const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching,
  disable: isDevelopment,
  mode: 'production',
  buildExcludes: [
    /middleware-manifest\.json$/,
    /middleware-runtime\.js$/,
    /middleware-runtime\.js.map$/,
    /middleware\.js$/,
    /middleware\.js.map$/,
  ],
})

module.exports = nextTranslate(
  withPWA(
    withBundleAnalyzer({
      reactStrictMode: true,
      pageExtensions: ['js', 'jsx', 'md', 'mdx'],
      eslint: {
        dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
      },
      webpack: (config, { dev, isServer }) => {
        config.module.rules.push({
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack'],
        })

        if (!dev && !isServer) {
          // Replace React with Preact only in client production build
          Object.assign(config.resolve.alias, {
            'react/jsx-runtime.js': 'preact/compat/jsx-runtime',
            react: 'preact/compat',
            'react-dom/test-utils': 'preact/test-utils',
            'react-dom': 'preact/compat',
          })
        }

        return config
      },
    })
  )
)
