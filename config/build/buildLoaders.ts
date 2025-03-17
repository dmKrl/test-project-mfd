import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export function buildLoaders({ isDev, paths }: BuildOptions): webpack.RuleSetRule[] {
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const svgLoader = buildSvgLoader();

    const babelLoader = {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                targets: 'defaults',
                presets: [
                    ['@babel/preset-env'],
                ],
            },
        },
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const cssLoader = buildCssLoader(isDev);

    const fontsLoader = {
        test: /\.(ttf|eot|woff|woff2)$/,
        type: 'asset/resource',
    };

    return [
        typeScriptLoader,
        cssLoader,
        svgLoader,
        babelLoader,
        fileLoader,
        fontsLoader,
    ];
}
