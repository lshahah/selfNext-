const withSass = require('@zeit/next-sass')
module.exports = withSass({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[path][name]__[local]--[hash:base64:5]',
      },
      // 配置eslint
      webpack: (config, {}) => {
        config.module.rules.push({
           //处理ES6，react，vue
            test: /\.m?js$/,
            use: [
              {
                loader: 'eslint-loader'
              },
            ]
        })
    
        return config
      }
})