const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const config = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/assets/',
		filename: 'bundle.js' //'bundle-[name]-[hash:8].js',
	},
	module: {
		rules: [{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
					 	plugins: ['lodash','istanbul'],
					 	presets: ['es2015']
					}
				},
				exclude: '/node_modules/'
			}, {
				test: /\.css$/,
		        use: ['style-loader', 'css-loader', 'postcss-loader']
			}/*{ 
				test: /\.css$/, 
				use: ExtractTextPlugin.extract({
		          fallback: "style-loader",
		          use: "css-loader"
		        })
			}*/, {
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				use: 'file-loader'
			}, {
				test: /\.(woff|woff2)$/,
				use: 'url-loader?prefix=font/&limit=5000'
			}, {
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				use: 'url-loader?limit=10000&mimetype=application/octet-stream'
			}, {
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				use: 'url-loader?limit=10000&mimetype=image/svg+xml'
			}, {
		        test: /\.(png|jpg|gif)$/,
		        use: 'file-loader'
		    }
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		//new ExtractTextPlugin("styles.css"),
		new LodashModuleReplacementPlugin(),
		new HtmlWebpackPlugin()
	],
	devtool: 'eval-source-map'//开发环境关联source
};

module.exports = config;