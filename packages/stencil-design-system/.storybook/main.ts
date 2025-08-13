import type { StorybookConfig } from '@storybook/html-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  refs: {
    // This will make Overview the default story
  },
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  staticDirs: [
    { from: '../dist/esm', to: '/assets' },
    '../dist'
  ],
  typescript: {
    check: false,
  },
  viteFinal: async (config) => {
    // Ensure Tailwind CSS and nesting are processed
    if (!config.css) config.css = {};
    config.css.postcss = {
      plugins: [
        require('postcss-nesting'),
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    };
    
    return config;
  },
};

export default config;
