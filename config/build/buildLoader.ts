import webpack from "webpack";
import {buildSvgLoader} from "./loaders/buildSvgLoader";
import {buildCssLoader} from "./loaders/buildCssLoader";
import {buildFileLoader} from "./loaders/builFileLoader";
import {BuildOptions} from "./types/config";
import {buildTypescriptLoader} from "./loaders/buildTypescriptLoader";
import {buildBabelLoader} from "./loaders/buildBabelLoader";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

  const svgLoader = buildSvgLoader(options);

  const cssLoader = buildCssLoader(options);

  const fileLoader = buildFileLoader(options);

  const babelLoader = buildBabelLoader(options);

  // Если не используем тс - нужен babel-loader
  const typescriptLoader = buildTypescriptLoader(options)


  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoader
  ]
}
