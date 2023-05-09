const isProduction = process.env.NODE_ENV === 'production';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './path/to/my/entry/file.js',
  };

  module.exports = {
	entry: './path/to/my/entry/file.js',
	output: {
	  path: path.resolve(__dirname, 'dist'),
	  filename: 'my-first-webpack.bundle.js',
	},
  };

  module.exports = {
	output: {
	  filename: 'my-first-webpack.bundle.js'
	},
	module: {
	  rules: [
		{
		  test: /\.scss$/,
		  use: [
			'style-loader', 'css-loader', 'sass-loader',
		  ]
		}
	  ]
	}
  };

  module.exports = {
	output: {
	  filename: '[name].js[hash]'
	},
	module: {
	  rules: [
		{
		  test: /\.scss$/,
		  use: [
			'style-loader',
			'css-loader',
			'sass-loader',
		  ]
		}
	  ]
	},
	plugins: [
	  new HtmlWebpackPlugin({
		template: './src/index.html'
	  })
	]
  };

  module.exports = {
	mode: 'production',
  };

  module.exports = {
	mode: process.env.NODE_ENV,
	devtool: isProduction ? 'none' : 'inline-source-map',
	module: {
	  rules: [
		{
		  test: /\.(js)$/,
		  exclude: /(node_modules)/,
		  loader: 'babel-loader'
		}
	  ]
	},
	externals: {
	  $: 'jquery',
	  jQuery: 'jquery',
	  'window.jQuery': 'jquery'
	},
  };





