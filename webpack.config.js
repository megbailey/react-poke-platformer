
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV == 'production';
const port = process.env.PORT || 3000;

const library = 'poke-platformer'
const filename = 'bundle.js'
const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';


const config = {
    entry: './src/game/index.js',
    output: {
        path: path.resolve(__dirname, `dist`),
        filename: `${filename}`,
        library: `${library}`,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    devServer: {
        port: port,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    resolve: {
        extensions: [ '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /nodeModules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:[
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ],
                        plugins:[
                            "@babel/syntax-dynamic-import", 
                            "@babel/plugin-syntax-jsx", 
                            "@babel/plugin-transform-class-properties",
                            "@babel/plugin-transform-runtime"
                        ],
                    }
                },
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                // https://webpack.js.org/guides/asset-modules/
                test: /\.(png|jp(e*)g|svg|gif)$/,
                type: "asset/inline",
            }

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        config.plugins.push(new MiniCssExtractPlugin());
        // don't include react in library export so that it doesnt conflict when being used by other projects
        config.externals = {
            'react': 'react',
            'react-dom': 'react-dom',
        }
        
    } else {
        config.mode = 'development';
        // If in development, entry point is one level higher so that app will render at div <div id='root'></div>
        config.entry = './src/index.js';
    }
    return config;
};
