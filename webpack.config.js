const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require("webpack");


module.exports = {
  mode: 'development',
  // entry point of application
  entry: './src/index.js',
  // output path for bundled files
  output: {
    // path for the built project code
    path: path.resolve(__dirname, 'dist'),
    // name for the output file
    filename: 'index.js'
  },
  // loaders section
  module: {
    rules: [
      // JS Files
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: "babel-loader",
        options: {
          presets: ["@babel/env", ],
        }
      },
      // Css files works with modules and plain css
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        exclude: /\.module\.css$/
      },
    ]
  },
  // plugins section
  plugins: [
    // eslint plugin
    new ESLintPlugin({
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'dist'),
      ],
      failOnError: true,
      fix: true,
      extensions: ['js', 'jsx', 'ts', 'tsx']
    }),

    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'disabled',
      generateStatsFile: true,
    }),

    new webpack.HotModuleReplacementPlugin(),
  ],
  // Dev server
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true,
  },
};
