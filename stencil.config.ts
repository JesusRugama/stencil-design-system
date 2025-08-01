import { Config } from '@stencil/core';
import { postcss } from '@stencil-community/postcss';

export const config: Config = {
  namespace: 'stencil-design-system',
  globalStyle: 'src/styles/base.css',
  plugins: [
    postcss({
      plugins: [
        require('postcss-nesting'),
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: true,
  },
};
