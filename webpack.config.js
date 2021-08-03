const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
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
			{
				test: /\.(js|jsx|ts|tsx)$/,
				include: path.resolve(__dirname, 'src'),
				exclude: path.resolve(__dirname, 'node_modules'),
				loader: "babel-loader",
				options: { presets: ["@babel/env"] }
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

		new webpack.HotModuleReplacementPlugin(),
	],
	// Dev server
	devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
};
