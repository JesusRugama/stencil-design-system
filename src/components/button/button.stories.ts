import type { Meta, StoryObj } from '@storybook/html';

// Template functions for cleaner story definitions
const ButtonTemplate = (args: any) => `
  <ds-button
    variant="${args.variant}"
    size="${args.size}"
    ${args.disabled ? 'disabled' : ''}
    ${args.fullWidth ? 'full-width' : ''}
    ${args.loading ? 'loading' : ''}
    type="${args.type}"
  >
    ${args.children || 'Click me'}
  </ds-button>
`;

const ButtonGroupTemplate = (buttons: Array<{variant?: string, size?: string, children: string}>) => `
  <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
    ${buttons.map(btn => `
      <ds-button variant="${btn.variant || 'primary'}" size="${btn.size || 'md'}">
        ${btn.children}
      </ds-button>
    `).join('')}
  </div>
`;

const meta: Meta = {
  title: 'Components/Button',
  component: 'ds-button',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    fullWidth: false,
    loading: false,
    type: 'button',
  },
  render: (args) => ButtonTemplate(args),
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: 'secondary',
  },
  render: Primary.render,
};

export const Ghost: Story = {
  args: {
    ...Primary.args,
    variant: 'ghost',
  },
  render: Primary.render,
};

export const Danger: Story = {
  args: {
    ...Primary.args,
    variant: 'danger',
  },
  render: Primary.render,
};

export const Loading: Story = {
  args: {
    ...Primary.args,
    loading: true,
  },
  render: Primary.render,
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
  render: Primary.render,
};

export const FullWidth: Story = {
  args: {
    ...Primary.args,
    fullWidth: true,
  },
  render: Primary.render,
  parameters: {
    layout: 'padded',
  },
};

export const Sizes: Story = {
  render: () => ButtonGroupTemplate([
    { variant: 'primary', size: 'sm', children: 'Small' },
    { variant: 'primary', size: 'md', children: 'Medium' },
    { variant: 'primary', size: 'lg', children: 'Large' }
  ]),
};

export const Variants: Story = {
  render: () => ButtonGroupTemplate([
    { variant: 'primary', children: 'Primary' },
    { variant: 'secondary', children: 'Secondary' },
    { variant: 'ghost', children: 'Ghost' },
    { variant: 'danger', children: 'Danger' }
  ]),
};
