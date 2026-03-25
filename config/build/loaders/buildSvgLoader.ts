import webpack from "webpack";
import { BuildOptions } from "../types/config";

export function buildSvgLoader(
  options: Partial<BuildOptions> = {}
): webpack.RuleSetRule {
  return {
    test: /\.svg$/,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          // icon: true,
          // svgoConfig: {
          //   plugins: [
          //     {
          //       name: 'convertColors',
          //       params: {
          //         currentColor: true,
          //       }
          //     }
          //   ]
          // }
        },
      },
    ],
  };
}
