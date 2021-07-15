const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    // entry point of application
    entry: './src/index.js',
    // output path for bundled files
    output: {
        // path for the built project code
        path: path.resolve(__dirname, 'distributable'),
        // name for the output file
        filename: 'my-first-dist.bundle.js'
    },

    // plugins section
    plugins: [
        // eslint plugin
        new ESLintPlugin({
            exclude: path.resolve(__dirname, 'node_modules'),
        })
    ],
};
