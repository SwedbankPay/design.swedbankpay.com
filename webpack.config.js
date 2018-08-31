/* eslint camelcase: 0, object-curly-newline: 0 */
const pkg = require("./package.json");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const lessListPlugin = require("less-plugin-lists");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = (env, argv) => {
    const version = pkg.version;
    const isProd = argv.mode === "production";
    const isDevServer = !!argv.host;

    const config = {
        entry: {
            polyfills: "./src/polyfills/index.js",
            app: "./src/index.js",
            "px-script": "./src/px-script/index.js"
        },
        resolve: {
            extensions: [".js", ".jsx", ".json"]
        },
        output: {
            library: "payex",
            path: path.resolve(__dirname, "dist"),
            filename: `${version}/scripts/[name].js?[hash]`,
            publicPath: "/"
        },
        devtool: "source-map",
        devServer: {
            contentBase: path.resolve(__dirname, "dist"),
            publicPath: "/",
            compress: true,
            port: 3000,
            hot: true,
            clientLogLevel: "warning",
            historyApiFallback: true
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.less$/,
                    resolve: { extensions: [".less"] },
                    use: [
                        {
                            loader: isProd ? MiniCssExtractPlugin.loader : "style-loader"
                        },
                        {
                            loader: "css-loader",
                            options: {
                                minimize: isProd
                            } },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: () => autoprefixer({
                                    browsers: ["last 3 versions", "> 1%", "ie >= 11"],
                                    grid: true
                                })
                            }
                        },
                        {
                            loader: "less-loader",
                            options: {
                                javascriptEnabled: true,
                                plugins: [
                                    new lessListPlugin()
                                ]
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                minimize: isProd
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: () => autoprefixer({
                                    browsers: ["last 3 versions", "> 1%"]
                                })
                            }
                        }
                    ]
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: "img/",
                                name: "[name].[ext]?[hash]"
                            }
                        }
                    ]
                }
            ]
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10
                    },
                    pxStyles: {
                        name: "px",
                        test: /px\.less$/,
                        chunks: "all",
                        enforce: true
                    },
                    docStyles: {
                        name: "documentation",
                        test: /documentation\.less$/,
                        chunks: "all",
                        enforce: true
                    },
                    dgStyles: {
                        name: "designguide",
                        test: /designguide\.less$/,
                        chunks: "all",
                        enforce: true
                    }
                }
            },
            minimize: isProd,
            minimizer: [
                new UglifyJsPlugin({
                    sourceMap: true,
                    uglifyOptions: {
                        ecma: 8,
                        compress: {
                            dead_code: true,
                            drop_console: true, // TODO: keep console warnings and errors
                            unused: false
                        }
                    }
                })
            ],
            mergeDuplicateChunks: !isProd
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                hash: true,
                title: "PayEx DesignGuide"
            }),
            new HtmlWebpackPlugin({
                filename: "404.html",
                template: "./src/index.html",
                hash: true,
                title: "PayEx DesignGuide"
            }),
            new FaviconsWebpackPlugin({
                logo: "./src/img/favicon.png",
                title: "PayEx DesignGuide",
                prefix: "icons/",
                icons: {
                    android: isProd,
                    appleIcon: isProd,
                    appleStartup: isProd,
                    coast: isProd,
                    favicons: true,
                    firefox: false,
                    opengraph: isProd,
                    twitter: isProd,
                    yandex: false,
                    windows: isProd
                }
            }),
            new MiniCssExtractPlugin({
                filename: `${version}/styles/[name].css`
            }),
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/), // For now this ignores moment's locale folder, which doubles moment's size..
            new CopyWebpackPlugin([
                { from: "static" }
            ])
        ]
    };

    if (!isDevServer) {
        config.plugins.push(
            new CleanWebpackPlugin(["dist"])
        );
    }

    return config;
};
