const path = require('path');
const slsw = require('serverless-webpack');

console.log('Webpack config is in', __dirname);

console.log('slsw found Entries: ', slsw.lib.entries);

// Get the names of all functions from the current serverless instance
const allFuncNames = slsw.lib.serverless.service.getAllFunctions();

module.exports = {
  target: 'node',
  // Generate sourcemaps for proper error messages
  devtool: 'source-map',
  // Since 'aws-sdk' is not compatible with webpack,
  // we exclude all node dependencies
  externals: [
  ],
  entry: slsw.lib.entries,
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(process.cwd(), '.webpack'),
    filename: '[name].js',
  },
  // Run babel on all .js files and skip those in node_modules
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: __dirname,
      exclude: /node_modules/,
    }]
  },
};
