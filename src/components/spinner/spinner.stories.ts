import type { Meta, StoryObj } from '@storybook/html';

// Template functions for cleaner story definitions
const SpinnerTemplate = () => `
  <ds-spinner></ds-spinner>
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
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => SpinnerTemplate(),
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
