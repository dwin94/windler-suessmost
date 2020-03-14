const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const cssnano = require('cssnano');

module.exports = {
  entry: [
    './app/assets/js/main.js',
    './app/assets/styles/main.sass'
  ],
  output: {
    path: __dirname + '/app/assets/dist',
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
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
                plugins: () => [cssnano({
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
                sassOptions: {
                  includePaths: [
                    './node_modules/normalize-scss/sass'
                  ]
                }
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
  ],
};
