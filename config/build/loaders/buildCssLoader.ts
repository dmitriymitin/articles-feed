import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from "../types/config";
import webpack from "webpack";

export function buildCssLoader(options: BuildOptions): webpack.RuleSetRule {
    const { isDev } = options

    return {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    };
}
