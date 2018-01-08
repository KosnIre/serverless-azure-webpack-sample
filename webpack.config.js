const path = require('path');
const slsw = require('serverless-webpack');

console.log('Webpack config is in', __dirname);

console.log('slsw found Entries: ', slsw.lib.entries);


module.exports = {
  target: 'node',
  // Generate sourcemaps for proper error messages
  devtool: 'source-map',
  // Since Azure Functions is slow to load many small files, we should have NO externals (if at all possible)
  externals: [],
  entry: slsw.lib.entries,
  output: {
    libraryTarget: 'commonjs',
    // .webpack folder should be relative to the directory where we execute sls command
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
