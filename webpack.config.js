var webpack = require('webpack');
var path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

// build 설정
var isProduction = process.argv.indexOf('-p') >= 0;
var sourcePath = path.join(__dirname, './src');
var outPath = path.join(__dirname, './dist');

// webpack 플러그인
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: sourcePath,
  entry: {
    main: './index.ts',
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'mobx',
      'mobx-react',
      'mobx-react-router'
    ]
  },
  output: {
    path: outPath,
    filename: 'bundle.js',
    publicPath: '/'
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    mainFields: ['module', 'browser', 'main'],
    alias: {
      Components: path.resolve(__dirname, './src/app/components'),
      Containers: path.resolve(__dirname, './src/app/containers'),
      Stores: path.resolve(__dirname, './src/app/stores'),
      Models: path.resolve(__dirname, './src/app/models')
    }
  },
  module: {
    loaders: [
      // typesciprt 로더
      {
        test: /\.tsx?$/,
        use: isProduction
          ? 'awesome-typescript-loader'
          : [
            'react-hot-loader/webpack',
            'awesome-typescript-loader'
          ]
      },
      // css 로더
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                sourceMap: !isProduction,
                importLoaders: 1,
                localIdentName: '[local]__[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  require('postcss-import')({ addDependencyTo: webpack }),
                  require('postcss-url')(),
                  require('postcss-cssnext')(),
                  require('postcss-reporter')(),
                  require('postcss-browser-reporter')({ disabled: isProduction }),
                ]
              }
            }
          ]
        })
      },
      // static 로더
      { test: /\.html$/, use: 'html-loader' },
      { test: /\.(jpg|png|svg|jpg|gif|woff|woff2|eot|ttf)$/, use: 'file-loader' },
      // url-loader 는 사용하지 않음
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        context: sourcePath
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      minChunks: Infinity
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextPlugin({
      filename: 'styles.css',
      disable: !isProduction
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      template: 'assets/index.html'
    }),
    // window 에 라이브러리 객체 삽입
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
      Util: 'exports-loader?Util!bootstrap/js/dist/util',
      Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown'
    }),
    new CopyWebpackPlugin(
      [ 
        // AdminLTE 복사
        { from: 'assets/lib/AdminLTE-2.4.2/dist', to: 'lib/AdminLTE' }
      ]
    )
  ],
  devServer: {
    contentBase: sourcePath,
    hot: true,
    stats: {
      warnings: false
    },
  },
  node: {
    fs: 'empty',
    net: 'empty'
  }
};