import type { StorybookConfig } from '@storybook/html-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  typescript: {
    check: false,
  },
  viteFinal: async (config) => {
    // Ensure Tailwind CSS is processed
    if (!config.css) config.css = {};
    config.css.postcss = {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    };
    
    return config;
  },
};

export default config;
