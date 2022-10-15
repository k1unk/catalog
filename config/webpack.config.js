const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const mode = "production";
const devMode = mode !== "production";
module.exports = {
    mode: mode,
    entry: './src/index.js',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        hot: true,
        open: true,
        client: {
            overlay: {
                warnings: false,
                errors: true
            }
        },
        historyApiFallback: true
    },
    optimization: {
        minimizer: [].concat(devMode ? [] : [new OptimizeCSSAssetsPlugin({})])
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(process.cwd(), 'src/index.html'),
            minify: true
        }),
        new VueLoaderPlugin(),
    ].concat(devMode ? [] : [
        new MiniCssExtractPlugin()]),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(process.cwd(), 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: "javascript/auto"
            },
            {
                test: /\.css$/i,
                  use: [devMode ? "style-loader" : MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 25 *1024,
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            disable: devMode,
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};

