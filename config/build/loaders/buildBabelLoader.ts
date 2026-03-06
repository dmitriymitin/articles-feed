import { BuildOptions } from "../types/config";
import webpack from "webpack";

export function buildBabelLoader(options: BuildOptions): webpack.RuleSetRule {
    return {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                  [
                    "i18next-extract",
                    {
                        locales: ['ru', 'en'],
                        keyAsDefaultValue: true
                    }
                  ]
                ]
            },
        },
    };
}
