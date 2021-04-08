/* eslint camelcase: 0, object-curly-newline: 0 */
const path = require("path");
const webpack = require("webpack");
const appRoutes = require("./tools/generate-routes-copy-array");
const levelsToRoot = require("./tools/levels-to-root");
const TerserPlugin = require("terser-webpack-plugin");
const SentryCliPlugin = require("@sentry/webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = (env, argv) => {

    console.log({ argv });

    const brand = argv.brand || "swedbankpay";
    const brandTitle = brand === "swedbankpay" ? "Swedbank Pay" : "PayEx"; // <-- Used with the HTML plugin for titles etc...
    const isProd = argv.mode === "production";
    const isDevServer = !!argv.env.WEBPACK_SERVE;
    const version = env && env.semver ? env.semver : "LOCAL_DEV";
    const isRelease = env && env.release === "true";
    const isGitHubActions = env && env.github_actions === "true";
    const basename = env && env.basename ? `/${env.basename}/` : "/";
    const infoVersion = env && env.info_version ? env.info_version : "LOCAL_DEV";

    const config = {
        mode: argv.mode || "production",
        entry: {
            dg: ["@babel/polyfill", "./src/scripts/main/index.js"],
            "dg-dashboard": "./src/scripts/dashboard/index.js",
            app: ["@babel/polyfill/noConflict", `./src/${brand}.js`]
        },
        resolve: {
            extensions: [".js", ".jsx", ".json"]
        },
        output: {
            path: path.resolve(__dirname, `dist${basename}`),
            filename: "scripts/[name].js",
            chunkFilename: "scripts/[name].[contenthash].js",
            publicPath: basename
        },
        devtool: "source-map",
        devServer: {
            contentBase: path.resolve(__dirname, `dist${basename}`),
            publicPath: basename,
            compress: true,
            port: 3000,
            hot: true,
            clientLogLevel: "warning",
            historyApiFallback: true,
            disableHostCheck: true /* Temporary fix for the websocket issue with webpack dev server on IE11 [AW] */
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
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                },
                {
                    test: /\.less$/,
                    resolve: { extensions: [".less"] },
                    use: [
                        {
                            loader: isProd ? MiniCssExtractPlugin.loader : "style-loader"
                        },
                        "css-loader",
                        "postcss-loader",
                        {
                            loader: "less-loader",
                            options: {
                                lessOptions: {
                                    javascriptEnabled: true
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: isProd ? MiniCssExtractPlugin.loader : "style-loader"
                        },
                        "css-loader",
                        "postcss-loader"
                    ]
                },
                {
                    test: /\.(woff(2)?|ttf|eot)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: "fonts/",
                                name: "[name].[ext]"
                            }
                        }
                    ]
                },
                {
                    test: /\.svg$/i,
                    include: [
                        path.resolve(__dirname, "src/icons/flags/1x1")
                    ],
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: "img/flags/1x1/",
                                name: "[name].[ext]?[contenthash]"
                            }
                        }
                    ]
                },
                {
                    test: /\.svg$/i,
                    include: [
                        path.resolve(__dirname, "src/icons/flags/4x3")
                    ],
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: "img/flags/4x3/",
                                name: "[name].[ext]?[contenthash]"
                            }
                        }
                    ]
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    exclude: /flags/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                outputPath: "img/",
                                name: "[name].[ext]?[contenthash]"
                            }
                        }
                    ]
                }
            ]
        },
        optimization: {
            moduleIds: "deterministic",
            runtimeChunk: "single",
            // runtimeChunk: true,
            splitChunks: {
                chunks: "all",
                cacheGroups: {
                    defaultVendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                        reuseExistingChunk: true
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    },
                    dgStyles: {
                        name: "dg-style",
                        test: brand === "swedbankpay" ? /(flatpickr\.css|swedbankpay\.less)$/ : /(flatpickr\.css|payex\.less)$/,
                        chunks: "all",
                        enforce: true
                    },
                    docStyles: {
                        name: "documentation",
                        test: brand === "swedbankpay" ? /documentation-swedbankpay\.less/ : /documentation-payex\.less/,
                        chunks: "all",
                        enforce: true
                    }
                }
            },
            minimize: isProd,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        compress: { drop_console: true },
                        sourceMap: true // Must be set to true if using source-maps in production
                    }
                }),
                new CssMinimizerPlugin()
            ],
            mergeDuplicateChunks: isProd
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                hash: true,
                title: `${brandTitle} Design Guide`,
                meta: {
                    "informational-version": infoVersion
                }
            }),
            new MiniCssExtractPlugin({
                filename: "styles/[name].css"
            }),
            new webpack.DefinePlugin({
                "process.env": {
                    basename: JSON.stringify(basename),
                    version: JSON.stringify(version),
                    sentry: isRelease,
                    isGitHubActions,
                    google: isRelease,
                    brand: JSON.stringify(brand),
                    brandTitle: JSON.stringify(brandTitle)
                }
            }),
            // Ignores moments locale folder which doubles the size of the package, moment is a dependency of chart.js [EH]
            new webpack.IgnorePlugin({
                resourceRegExp: /^\.\/locale$/,
                contextRegExp: /moment$/
            })
        ]
    };

    if (!env && !isDevServer) {
        config.plugins.push(
            new BundleAnalyzerPlugin()
        );
    }

    if (isRelease) {
        const rootPath = levelsToRoot(basename);

        config.plugins.push(
            new HtmlWebpackPlugin({
                filename: `${rootPath}index.html`,
                template: "./build/rootindex.html",
                hash: true,
                title: `${brandTitle} Design Guide`,
                chunks: ["dg"],
                basename
            }),
            new HtmlWebpackPlugin({
                filename: `${rootPath}404.html`,
                template: "./build/root404.html",
                hash: true,
                chunks: ["dg"],
                title: `${brandTitle} Design Guide`,
                basename
            }),
        );

        // Don't create new sentry release on GitHub Actions while we're using AppVeyor [THN]
        // if (!isGitHubActions) {
        //     config.plugins.push(
        //         new SentryCliPlugin({
        //             release: version,
        //             include: ".",
        //             ignore: ["node_modules", "webpack.config.js"]
        //         })
        //     );
        // }
    }

    if (isProd && !isDevServer) {
        const onEndArchive = [
            {
                source: "./dist/temp/icons",
                destination: `./dist${basename}release/icons.zip`
            }
        ];

        if (isRelease) {
            onEndArchive.push({
                source: "./dist/temp/release",
                destination: `./dist${basename}release/${brand === "swedbankpay" ? "Swedbankpay" : "Payex"}.DesignGuide.v${version}.zip`
            });
        }

        config.plugins.push(
            new FaviconsWebpackPlugin({
                logo: `./src/img/${brand}/favicon.png`,
                cache: true,
                prefix: "icons/",
                inject: true,
                favicons: {
                    appName: `${brandTitle} Design Guide`,
                    developerName: brandTitle,
                    developerURL: null, // prevent retrieving from the nearest package.json
                    icons: {
                        coast: false,
                        yandex: false
                    }
                }
            }),
            new FileManagerPlugin({
                events: {
                    onStart: [
                        {
                            delete: ["./dist"]
                        }
                    ],
                    onEnd: [
                        {
                            copy: [
                                {
                                    source: `./src/img/${brand}/resources/typography/*.png`,
                                    destination: `./dist${basename}img/typography`
                                },
                                {
                                    source: `./src/img/${brand}/resources/logotype/*.png`,
                                    destination: `./dist${basename}img/logotype`
                                },
                                {
                                    source: `./src/img/${brand}/documentation/buttons/*.png`,
                                    destination: `./dist${basename}img/documentation/buttons`
                                },
                                {
                                    source: `./src/img/${brand}/documentation/logotype/*.png`,
                                    destination: `./dist${basename}img/documentation/logotype`
                                },
                                {
                                    source: `./src/img/${brand}/documentation/cards/*.png`,
                                    destination: `./dist${basename}img/documentation/cards`
                                },
                                {
                                    source: `./src/img/${brand}/documentation/accessibility/*.png`,
                                    destination: `./dist${basename}img/documentation/accessibility`
                                },
                                {
                                    source: `./src/img/${brand}/documentation/imagery/*.svg`,
                                    destination: `./dist${basename}img/documentation/imagery`
                                },
                                {
                                    source: `./src/img/${brand}/documentation/spacing/*.svg`,
                                    destination: `./dist${basename}img/documentation/spacing`
                                },
                                {
                                    source: `./src/img/${brand}/documentation/copywriting/*.png`,
                                    destination: `./dist${basename}img/documentation/copywriting`
                                },
                                {
                                    source: `./src/img/${brand}/documentation/grid/*.png`,
                                    destination: `./dist${basename}img/documentation/grid`
                                },
                                {
                                    source: `./src/img/${brand}/documentation/colors/*.png`,
                                    destination: `./dist${basename}img/documentation/colors`
                                },
                                {
                                    source: `./src/img/${brand}/documentation/introduction/*.png`,
                                    destination: `./dist${basename}img/documentation/introduction`
                                },
                                {
                                    source: `./src/img/${brand}/documentation/forDevelopers/*.png`,
                                    destination: `./dist${basename}img/documentation/forDevelopers`
                                },
                                {
                                    source: `./src/img/${brand}/documentation/forDesigners/*.png`,
                                    destination: `./dist${basename}img/documentation/forDesigners`
                                },
                                {
                                    source: "./src/img/background/*.svg",
                                    destination: `./dist${basename}img/background`
                                },
                                {
                                    source: "./src/assets/logos/*.zip",
                                    destination: `./dist${basename}release/logos`
                                },
                                {
                                    source: "./src/assets/fonts/*.zip",
                                    destination: `./dist${basename}release/fonts`
                                },
                                {
                                    source: "./src/assets/templates/*",
                                    destination: `./dist${basename}templates`
                                },
                                {
                                    source: `./dist${basename}icons`,
                                    destination: "./dist/temp/icons/icons"
                                },
                                {
                                    source: `./dist${basename}scripts/dg.js`,
                                    destination: "./dist/temp/release/scripts"
                                },
                                {
                                    source: `./dist${basename}scripts/dg.js.map`,
                                    destination: "./dist/temp/release/scripts"
                                },
                                {
                                    source: `./dist${basename}scripts/dg-dashboard.js`,
                                    destination: "./dist/temp/release/scripts"
                                },
                                {
                                    source: `./dist${basename}scripts/dg-dashboard.js.map`,
                                    destination: "./dist/temp/release/scripts"
                                },
                                {
                                    source: `./dist${basename}styles/dg-style.css`,
                                    destination: "./dist/temp/release/styles"
                                }
                            ],
                            mkdir: [`./dist${basename}release`],
                            archive: onEndArchive,
                            delete: ["./dist/temp"]
                        },
                        {
                            copy: appRoutes.map(route => ({
                                source: `./dist${basename}index.html`,
                                destination: `./dist${basename}${route}/`
                            }))
                        }
                    ]
                }
            })
        );
    }

    return config;
};
