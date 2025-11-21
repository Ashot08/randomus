import webpack from 'webpack';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildLoaders = ({isDev}: BuildOptions): webpack.RuleSetRule[] => {

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev ? "[path][name]__[local]--[hash:base64:4]" : "[hash:base64:6]",
            namedExport: false,
          }
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const imageLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const svgLoader = {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
  };

  return [
    typeScriptLoader,
    cssLoader,
    imageLoader,
    svgLoader,
  ];
}
