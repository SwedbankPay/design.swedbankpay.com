/* eslint camelcase: 0, object-curly-newline: 0 */
const pkg = require("./package.json");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const isProd = (process.env.NODE_ENV === "production");
const isDeploy = (process.env.WEBPACK === "deploy");
const devServer = (process.env.WEBPACK === "devserver");
const version = pkg.version;

const extractPX = new ExtractTextPlugin({
    filename: `${version}/styles/px.css`,
    disable: !isProd
});

const extractDocumentation = new ExtractTextPlugin({
    filename: `${version}/styles/templates/documentation.css`,
    disable: !isProd
});

const extractDesignGuide = new ExtractTextPlugin({
    filename: "styles/designguide.css",
    disable: !isProd
});

const config = {
    entry: {
        app: "./src/index.js",
        "react-libraries": [
            "react",
            "react-dom",
            "react-dom/server",
            "react-router-dom",
            "react-prism"
        ],
        "core-libraries": [
            "prismjs",
            "prismjs/themes/prism.css",
            "prismjs/plugins/toolbar/prism-toolbar.css",
            "prismjs/plugins/toolbar/prism-toolbar.min.js",
            "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js",
            "js-beautify",
            "clipboard"
        ],
        polyfills: "./src/polyfills/index.js",
        "px-script": "./src/px-script/index.js"
    },
    output: {
        library: "payex",
        path: path.resolve(__dirname, "dist"),
        filename: `${version}/scripts/[name].js?[hash]`,
        publicPath: (isProd ? "/design.payex.com/" : "/")
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
                test: /px\.less$/,
                use: extractPX.extract({
                    fallback: "style-loader",
                    use: [
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
                        },
                        { loader: "less-loader" }
                    ]
                })
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
                test: /documentation\.less$/,
                use: extractDocumentation.extract({
                    fallback: "style-loader",
                    use: [
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
                        },
                        { loader: "less-loader" }
                    ]
                })
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
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            hash: true,
            title: "PayEx DesignGuide"
        }),
        new FaviconsWebpackPlugin({
            logo: "./src/img/favicon.png",
            title: "PayEx DesignGuide",
            prefix: isProd ? "icons/" : "",
            icons: {
                android: false,
                appleIcon: false,
                appleStartup: false,
                coast: false,
                favicons: true,
                firefox: false,
                opengraph: false,
                twitter: false,
                yandex: false,
                windows: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ["react-libraries", "core-libraries", "polyfills", "px-script"],
            minChunks: Infinity
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.NamedChunksPlugin(),
        extractPX,
        extractDocumentation,
        extractDesignGuide,
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/) // For now this ignores moment's locale folder, which doubles moment's size..
    ]
};

if (!devServer && !isDeploy) {
    config.plugins.push(
        new CleanWebpackPlugin(["dist"]),
        new BundleAnalyzerPlugin()
    );
}

if (isProd) {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
            dead_code: true,
            drop_console: true, // TODO: keep console warnings and errors
            unused: false
        }
    }));
}


module.exports = config;
