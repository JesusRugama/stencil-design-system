import type { Meta, StoryObj } from '@storybook/html';

// Template functions for cleaner story definitions
const SpinnerTemplate = (args: any) => `
  <ds-spinner
    size="${args.size}"
  ></ds-spinner>
`;

const SpinnerGroupTemplate = (
  spinners: Array<{ size?: string; label: string }>
) => `
  <div style="display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;">
    ${spinners
      .map(
        spinner => `
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
        <ds-spinner size="${spinner.size || 'md'}"></ds-spinner>
        <span style="font-size: 0.875rem; color: #6b7280;">${spinner.label}</span>
      </div>
    `
      )
      .join('')}
  </div>
`;

const meta: Meta = {
  title: 'Minimalist Design System/Spinner',
  component: 'ds-spinner',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Elegant loading spinner with smooth CSS animations and size variants.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the spinner'
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    size: 'md',
  },
  render: args => SpinnerTemplate(args),
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'sm',
  },
  render: Default.render,
};

export const Medium: Story = {
  args: {
    ...Default.args,
    size: 'md',
  },
  render: Default.render,
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: 'lg',
  },
  render: Default.render,
};

// Showcase all sizes
export const AllSizes: Story = {
  render: () =>
    SpinnerGroupTemplate([
      { size: 'sm', label: 'Small (16px)' },
      { size: 'md', label: 'Medium (24px)' },
      { size: 'lg', label: 'Large (32px)' },
    ]),
  parameters: {
    docs: {
      description: {
        story: 'All available spinner sizes with smooth animations.'
      }
    }
  }
};

// Loading states in context
export const InContext: Story = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 2rem; align-items: center;">
      <!-- Button with loading spinner -->
      <ds-button loading size="md">Loading...</ds-button>
      
      <!-- Card with loading content -->
      <div style="
        padding: 2rem; 
        border: 1px solid #e5e7eb; 
        border-radius: 0.5rem; 
        background: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        min-width: 200px;
      ">
        <ds-spinner size="md"></ds-spinner>
        <span style="color: #6b7280; font-size: 0.875rem;">Loading content...</span>
      </div>
      
      <!-- Inline loading -->
      <div style="display: flex; align-items: center; gap: 0.5rem;">
        <ds-spinner size="sm"></ds-spinner>
        <span style="color: #374151;">Processing request</span>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Examples of spinners used in different UI contexts.'
      }
    }
  }
};
