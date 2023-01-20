const path = require('path');

module.exports = {
  mode: 'production',
  entry: './packages/index.ts',
  output: {
    path: path.resolve(__dirname, '../build/package'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', 'scss', 'css'],
  },
  module: {
    rules: [
      {
        test: /\.j|tsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
