/* eslint camelcase: 0, object-curly-newline: 0 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const isProd = (process.env.NODE_ENV === "production");

const extractPX = new ExtractTextPlugin({
    filename: "styles/px.css",
    disable: !isProd
});

const extractDocumentation = new ExtractTextPlugin({
    filename: "styles/templates/documentation.css",
    disable: !isProd
});

const extractDesignGuide = new ExtractTextPlugin({
    filename: "styles/designGuide.css",
    disable: !isProd
});

const config = {
    entry: {
        app: "./src/index.js",
        "react-libraries": [
            "react",
            "react-dom",
            "react-router-dom"
        ],
        "core-libraries": [
            "@fortawesome/fontawesome-free-brands",
            "@fortawesome/react-fontawesome",
            "prismjs",
            "react-prism",
            "js-beautify"
        ],
        polyfills: "./src/polyfills/index.js",
        "px-script": "./src/px-script/index.js"
    },
    output: {
        library: "payex",
        path: path.resolve(__dirname, "dist"),
        filename: "scripts/[name].js?[hash]",
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
                    },
                    {
                        loader: "image-webpack-loader",
                        options: {
                            gifsicle: { interlaced: false },
                            optipng: { optimizationLevel: 7 },
                            pngquant: {
                                quality: "65-90",
                                speed: 4
                            },
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            }
                        }
                    }
                ]
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
        new FaviconsWebpackPlugin({
            logo: "./src/img/favicon.png",
            title: "PayEx DesignGuide",
            prefix: "icons/",
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
        })
    ]
};

if (isProd) {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
            dead_code: true,
            drop_console: true, // TODO: keep console warnings and errors
            unused: true
        }
    }));
}


module.exports = config;
