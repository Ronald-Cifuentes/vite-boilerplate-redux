// eslint-disable-next-line @typescript-eslint/no-var-requires
const remoteConfig = require('./remote.config.json')

module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
        },
      ],
      [
        '@babel/preset-env',
        {
          corejs: {
            version: '^3.15.2',
          },
          useBuiltIns: 'usage',
          targets: {
            edge: '17',
            firefox: '60',
            chrome: '67',
            safari: '11.1',
            ie: '11',
          },
        },
      ],
      '@babel/preset-typescript',
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      '@babel/plugin-syntax-jsx',
      [
        'babel-plugin-styled-components',
        {
          namespace: remoteConfig.scope,
        },
      ],
    ],
  }
}
