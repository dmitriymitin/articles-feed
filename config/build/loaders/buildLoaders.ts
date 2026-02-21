import webpack from "webpack";
import {BuildOptions} from "../types/config";
import {buildCssLoader} from "./buildCssLoader";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

  // Если не используем тс - нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoader = buildCssLoader(options);

  return [
    typescriptLoader,
    cssLoader
  ]
}
