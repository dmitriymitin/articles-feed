import {BuildOptions} from "../types/config";
import webpack from "webpack";

export function buildSvgLoader(options: BuildOptions): webpack.RuleSetRule {

  return {
    test: /\.svg$/,
    use: [{
      loader: '@svgr/webpack',
      options: {
        icon: true,
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
      }
    }],
  }
}
