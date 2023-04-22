const path = require('path');
const GasPlugin = require('gas-webpack-plugin');

const config = {
  entry: './ts/teste.ts',
  output: {
    path: path.resolve(__dirname, 'src/code'),
    filename: 'teste.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'ts-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts']
  },
   plugins: [
    new GasPlugin()
  ]
};
 
module.exports = config