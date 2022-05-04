module.exports = {
    entry: "./web/src",
    output: {
        path: __dirname + "../../static/js",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: [[
                        "@babel/preset-react", {
                            runtime: "automatic"
                        }
                    ]]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}