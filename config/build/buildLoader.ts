import webpack from "webpack";

import { buildBabelLoader } from "./loaders/buildBabelLoader";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildSvgLoader } from "./loaders/buildSvgLoader";
import { buildTypescriptLoader } from "./loaders/buildTypescriptLoader";
import { buildFileLoader } from "./loaders/builFileLoader";
import { BuildOptions } from "./types/config";

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
