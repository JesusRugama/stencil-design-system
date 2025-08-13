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

const ButtonGroupTemplate = (
  buttons: Array<{ variant?: string; size?: string; children: string; disabled?: boolean; loading?: boolean }>
) => `
  <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
    ${buttons
      .map(
        btn => `
      <ds-button 
        variant="${btn.variant || 'primary'}" 
        size="${btn.size || 'md'}"
        ${btn.disabled ? 'disabled' : ''}
        ${btn.loading ? 'loading' : ''}
      >
        ${btn.children}
      </ds-button>
    `
      )
      .join('')}
  </div>
`;

const meta: Meta = {
  title: 'Minimalist Design System/Button',
  component: 'ds-button',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Elegant, minimalist button component with subtle hover effects and clean styling.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost'],
      description: 'Visual style variant of the button'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button'
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
  render: args => ButtonTemplate(args),
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

// Showcase all variants
export const AllVariants: Story = {
  render: () =>
    ButtonGroupTemplate([
      { variant: 'primary', children: 'Primary' },
      { variant: 'secondary', children: 'Secondary' },
      { variant: 'ghost', children: 'Ghost' },
    ]),
  parameters: {
    docs: {
      description: {
        story: 'All available button variants in the minimalist design system.'
      }
    }
  }
};

// Showcase all sizes
export const AllSizes: Story = {
  render: () =>
    ButtonGroupTemplate([
      { variant: 'primary', size: 'sm', children: 'Small' },
      { variant: 'primary', size: 'md', children: 'Medium' },
      { variant: 'primary', size: 'lg', children: 'Large' },
    ]),
  parameters: {
    docs: {
      description: {
        story: 'Button sizes from small to large with consistent styling.'
      }
    }
  }
};

// Interactive states showcase
export const InteractiveStates: Story = {
  render: () =>
    ButtonGroupTemplate([
      { variant: 'primary', children: 'Normal' },
      { variant: 'primary', children: 'Loading', loading: true },
      { variant: 'primary', children: 'Disabled', disabled: true },
    ]),
  parameters: {
    docs: {
      description: {
        story: 'Different interactive states including loading and disabled.'
      }
    }
  }
};

export const Variants: Story = {
  render: () =>
    ButtonGroupTemplate([
      { variant: 'primary', children: 'Primary' },
      { variant: 'secondary', children: 'Secondary' },
      { variant: 'ghost', children: 'Ghost' },
      { variant: 'danger', children: 'Danger' },
    ]),
};
