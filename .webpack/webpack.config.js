const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  // entry: './src/index.pug',
  output: {
    filename: '[name]bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}