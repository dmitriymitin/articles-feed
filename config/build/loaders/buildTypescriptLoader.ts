import {BuildOptions} from "../types/config";
import webpack from "webpack";

export function buildTypescriptLoader(options: BuildOptions): webpack.RuleSetRule {
  return {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
}
