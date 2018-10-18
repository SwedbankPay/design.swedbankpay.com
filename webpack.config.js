/* eslint camelcase: 0, object-curly-newline: 0 */
const pkg = require("./package.json");
const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const lessListPlugin = require("less-plugin-lists");
const SentryCliPlugin = require("@sentry/webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const AppManifestWebpackPlugin = require("app-manifest-webpack-plugin");

module.exports = (env, argv) => {
    const version = env && env.semver ? env.semver : pkg.version;
    const isProd = argv.mode === "production";
    const isRelease = env && env.release === "true";
    const isDevServer = !!argv.host;
    const basename = env && env.basename ? `/${env.basename}/` : "/";

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
            filename: "scripts/[name].js?[hash]",
            chunkFilename: "scripts/[name].js?[hash]",
            publicPath: basename
        },
        // target: "async-node",
        devtool: "source-map",
        devServer: {
            contentBase: path.resolve(__dirname, "dist"),
            publicPath: basename,
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
                    exclude: modulePath => (
                        (/node_modules/).test(modulePath) &&
                        !(/node_modules\/*/).test(modulePath) &&
                        (/__snapshots__/).test(modulePath)
                    ),
                    loader: "babel-loader"
                },
                {
                    test: /\.less$/,
                    resolve: { extensions: [".less"] },
                    use: [
                        {
                            loader: isProd ? MiniCssExtractPlugin.loader : "style-loader"
                        },
                        { loader: "css-loader" },
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
            runtimeChunk: {
                name: entrypoint => `runtime~${entrypoint.name}`
            },
            splitChunks: {
                chunks: "async",
                minSize: 3000,
                maxSize: 0,
                minChunks: 2,
                maxAsyncRequests: 5,
                maxInitialRequests: 3,
                automaticNameDelimiter: "~",
                name: true,
                cacheGroups: {
                    // vendors: {
                    //     test: /[\\/]node_modules[\\/]/,
                    //     name: "vendors",
                    //     chunks: "all"
                    // },
                    app: {
                        name: "app",
                        test: /app\.js$/,
                        reuseExistingChunk: true,
                        chunks: "all",
                        enforce: true
                    },
                    pxScript: {
                        name: "px-script",
                        test: /px-script/,
                        reuseExistingChunk: false,
                        chunks: "all",
                        enforce: true
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
                        compress: { pure_funcs: ["console.log"] }
                    }
                }),
                new OptimizeCSSAssetsPlugin()
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
            new AppManifestWebpackPlugin({
                logo: "./src/img/favicon.png",
                output: "/icons/",
                config: {
                    appName: "PayEx DesignGuide",
                    developerName: "PayEx",
                    developerURL: "https://payex.com",
                    background: "#000",
                    theme_color: "#2da944",
                    version,
                    icons: {
                        android: true,
                        appleIcon: true,
                        appleStartup: true,
                        coast: true,
                        favicons: true,
                        firefox: false,
                        opengraph: true,
                        twitter: true,
                        yandex: false,
                        windows: true
                    }
                }
            }),
            new MiniCssExtractPlugin({
                filename: "styles/[name].css"
            }),
            new webpack.DefinePlugin({
                "process.env": {
                    basename: JSON.stringify(basename),
                    sentry: false,
                    google: false
                }
            }),
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/) // For now this ignores moment's locale folder, which doubles moment's size..
        ]
    };

    if (!env && !isDevServer) {
        config.plugins.push(
            new BundleAnalyzerPlugin()
        );
    }

    if (isProd && !isDevServer) {
        config.plugins.push(
            new FileManagerPlugin({
                onStart: [
                    {
                        delete: [
                            "./dist",
                            "./temp"
                        ]
                    }
                ],
                onEnd: [
                    {
                        copy: [
                            {
                                source: "./dist/icons",
                                destination: "./dist/temp/icons/icons"
                            },
                            {
                                source: "./dist/scripts/px-script.js",
                                destination: "./dist/temp/release/scripts"
                            },
                            {
                                source: "./dist/scripts/px-script.js.map",
                                destination: "./dist/temp/release/scripts"
                            },
                            {
                                source: "./dist/styles/px.css",
                                destination: "./dist/temp/release/styles"
                            }
                        ],
                        mkdir: [
                            "./dist/release"
                        ],
                        archive: [
                            {
                                source: "./dist/temp/icons",
                                destination: "./dist/release/icons.zip"
                            },
                            {
                                source: "./dist/temp/release",
                                destination: `./dist/release/PayEx.DesignGuide.v${version}.zip`
                            }
                        ],
                        delete: [
                            "./dist/temp"
                        ]
                    }
                ]
            })
        );
    }

    if (isRelease) {
        config.plugins.push(
            new SentryCliPlugin({
                release: version,
                include: ".",
                ignore: ["node_modules", "webpack.config.js"]
            }),
            new webpack.DefinePlugin({
                "process.env": {
                    sentry: true,
                    google: true
                }
            })
        );
    }

    return config;
};
