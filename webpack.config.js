const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
// const ManifestPlugin = require('webpack-manifest-plugin');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  entry: [
    './app/assets/js/main.js',
    './app/assets/styles/main.sass'
  ],
  output: {
    path: __dirname + '/app/assets/dist',
    filename: "main.js",
    // filename: "main.[chunkhash].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [ '@babel/preset-env' ],
            plugins: [ '@babel/plugin-proposal-class-properties' ]
          }
        }
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer({
                      browsers: ['last 2 versions'],
                      cascade: false
                  }), cssnano({
                    preset: ['default', {
                      discardComments: {
                        removeAll: true,
                      },
                    }]
                  })]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                  includePaths: [
                    './node_modules/normalize-scss/sass'
                  ]
              }
            }
          ]
        })
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      // filename: '[name].[contenthash].css',
      allChunks: true,
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      notify: false,
      server: {
        baseDir: ['app']
      }
    }),
    // new ManifestPlugin()
  ],
};
