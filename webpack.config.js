
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const port = process.env.PORT || 3000;

const library = 'poke-platformer'
const filename = 'index.js'

module.exports = (env, argv) => {

    const isProduction = !argv['mode'] || argv['mode'] === 'production';
    const isDevelopment = argv['mode'] === 'development';
    const isWebpackServer = process.env['WEBPACK_SERVE'] === 'true';

    console.log( `Prod: ${isProduction}`, `Dev: ${isDevelopment}`,`WebpackServer: ${isWebpackServer}`)
    const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

    const config = {
        entry: './src/game/index.js',
        output: {
            path: path.resolve(__dirname, `dist`),
            filename: `${filename}`,
           /*  library: {
                name: `${library}`,
                type: 'umd'
            },  */
            libraryTarget: 'commonjs2'
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
                    /* for separate image files in bundle
                    type: "asset/resource"
                    generator: {
                        filename: 'assets/img/[name][ext]',
                    }, */
                }
    
                // Add your rules for custom modules here
                // Learn more about loaders from https://webpack.js.org/loaders/
            ],
        },
    };

    if (isProduction) {
        config.mode = 'production';
        
        config.plugins.push(new MiniCssExtractPlugin());
        // don't include react in library export so that it doesnt conflict when being used by other projects
        config.externals = {
            'react': 'react',
            'react-dom': 'react-dom',
            'react-redux': 'react-redux'
        }

    } else if (isDevelopment) {
        config.mode = 'development';
    } 

    // If running as a server, we need to actually call our component library to render it. 
    // So entry point will be level higher so that app will render at <div id='root'></div>
    if ( isWebpackServer ) config.entry = './src/index.js';
    return config;
};
