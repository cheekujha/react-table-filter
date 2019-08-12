var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const analyze = process.env.analyze;

let plugins = [
	new ExtractTextPlugin({
		filename: 'styles.css',
		disable: false,
		allChunks: true
	}),
	new webpack.optimize.AggressiveMergingPlugin()//Merge chunks
];

if (analyze) {
	plugins.push(new BundleAnalyzerPlugin())
}

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'lib'),
		library: 'tableFilter',
		libraryTarget: 'umd'
	},
	externals: {
		react: {
			root: 'React',
			commonjs2: 'react',
			commonjs: 'react',
			amd: 'react'
		},
		'react-dom': {
			root: 'ReactDOM',
			commonjs2: 'react-dom',
			commonjs: 'react-dom',
			amd: 'react-dom'
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			}
		]
	},
	plugins: plugins,
	optimization: {
		minimizer: [
			new TerserPlugin()
		]
	},
};
