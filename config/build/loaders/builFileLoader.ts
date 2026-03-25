import webpack from "webpack";
import { BuildOptions } from "../types/config";

export function buildFileLoader(options: BuildOptions): webpack.RuleSetRule {
  return {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };
}
