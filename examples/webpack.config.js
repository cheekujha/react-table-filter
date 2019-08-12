var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'none',
	entry: './index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../docs')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				// exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						"presets": [
							[
								"@babel/preset-env",
								{
									"modules": "commonjs",
									"targets": {
										"node": "current"
									}
								}
							],
							"@babel/preset-react"
						],
						"plugins": [
							[
								"@babel/plugin-proposal-class-properties",{"loose": true}
							]
						]
					}
				}
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
					// use: ['css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'sass-loader']
				})
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader']
					// use: ['css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'sass-loader']
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({filename: 'styles.css', disable: false, allChunks: true}),
		new HtmlWebpackPlugin({
			filename: '../docs/index.html',
			template: 'index.html'
		})
	]
};
