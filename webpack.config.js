/* eslint camelcase: 0, object-curly-newline: 0 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

const isProd = (process.env.NODE_ENV === "production");

const extractPX = new ExtractTextPlugin({
    filename: "px.css",
    disable: !isProd
});

const extractDesignGuide = new ExtractTextPlugin({
    filename: "templates/DesignGuide.css",
    disable: !isProd
});

const config = {
    entry: {
        app: "./src/index.js",
        "react-libraries": [
            "react",
            "react-dom",
            "react-router-dom"
        ]
    },
    output: {
        library: "payex",
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js?[hash]",
        publicPath: "/"
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    cache: true,
    devtool: "source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        publicPath: "/",
        compress: true,
        port: 3000,
        hotOnly: true,
        clientLogLevel: "warning",
        historyApiFallback: true,
        progress: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /px\.less$/,
                use: extractPX.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                minimize: isProd,
                                url: false
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: () => autoprefixer({
                                    browsers: ["last 3 versions", "> 1%"]
                                })
                            }
                        },
                        { loader: "less-loader" }
                    ]
                })
            },
            {
                test: /designguide\.less$/,
                use: extractDesignGuide.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                minimize: isProd,
                                url: false
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: () => autoprefixer({
                                    browsers: ["last 3 versions", "> 1%"]
                                })
                            }
                        },
                        { loader: "less-loader" }
                    ]
                })
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            hash: true,
            title: "PayEx DesignGuide"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "react-libraries",
            minChunks: Infinity
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.NamedChunksPlugin(),
        extractPX,
        extractDesignGuide
    ]
};

if (isProd) {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
            dead_code: true,
            drop_console: true,
            unused: true
        }
    }));
}


module.exports = config;
