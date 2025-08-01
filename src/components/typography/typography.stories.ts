import type { Meta, StoryObj } from '@storybook/html';

// Template functions for cleaner story definitions
const TypographyTemplate = (args: any) => `
  <ds-typography
    variant="${args.variant}"
    color="${args.color}"
    align="${args.align}"
    weight="${args.weight}"
  >
    ${args.children || 'Sample text content'}
  </ds-typography>
`;

const TypographyGroupTemplate = (
  items: Array<{ variant?: string; color?: string; children: string; weight?: string }>
) => `
  <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 600px;">
    ${items
      .map(
        item => `
      <ds-typography 
        variant="${item.variant || 'body'}" 
        color="${item.color || 'primary'}"
        weight="${item.weight || 'normal'}"
      >
        ${item.children}
      </ds-typography>
    `
      )
      .join('')}
  </div>
`;

const meta: Meta = {
  title: 'Minimalist Design System/Typography',
  component: 'ds-typography',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Elegant typography component with semantic HTML, responsive scaling, and consistent type hierarchy.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body', 'body-sm', 'caption', 'overline'],
      description: 'Typography variant that determines size and semantic HTML tag'
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'muted', 'accent'],
      description: 'Text color variant'
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
      description: 'Text alignment'
    },
    weight: {
      control: { type: 'select' },
      options: ['normal', 'medium', 'semibold', 'bold'],
      description: 'Font weight'
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    variant: 'body',
    color: 'primary',
    align: 'left',
    weight: 'normal',
    children: 'This is the default typography component with clean, readable styling.'
  },
  render: args => TypographyTemplate(args),
};

// Heading variants
export const Headings: Story = {
  render: () =>
    TypographyGroupTemplate([
      { variant: 'h1', children: 'Heading 1 - Main page title', weight: 'bold' },
      { variant: 'h2', children: 'Heading 2 - Section title', weight: 'semibold' },
      { variant: 'h3', children: 'Heading 3 - Subsection title', weight: 'semibold' },
      { variant: 'h4', children: 'Heading 4 - Component title', weight: 'medium' },
      { variant: 'h5', children: 'Heading 5 - Small section', weight: 'medium' },
      { variant: 'h6', children: 'Heading 6 - Smallest heading', weight: 'medium' },
    ]),
  parameters: {
    docs: {
      description: {
        story: 'All heading variants from H1 to H6 with appropriate semantic HTML tags and responsive sizing.'
      }
    }
  }
};

// Body text variants
export const BodyText: Story = {
  render: () =>
    TypographyGroupTemplate([
      { variant: 'body', children: 'Regular body text for main content and paragraphs with comfortable reading size.' },
      { variant: 'body-sm', children: 'Small body text for secondary information, captions, or compact layouts.' },
      { variant: 'caption', children: 'Caption text for image descriptions, form help text, or metadata.' },
      { variant: 'overline', children: 'OVERLINE TEXT FOR LABELS AND CATEGORIES' },
    ]),
  parameters: {
    docs: {
      description: {
        story: 'Body text variants for different content types and hierarchy levels.'
      }
    }
  }
};

// Color variants
export const Colors: Story = {
  render: () =>
    TypographyGroupTemplate([
      { variant: 'body', color: 'primary', children: 'Primary text color for main content' },
      { variant: 'body', color: 'secondary', children: 'Secondary text color for supporting content' },
      { variant: 'body', color: 'muted', children: 'Muted text color for subtle information' },
      { variant: 'body', color: 'accent', children: 'Accent text color for highlights and emphasis' },
    ]),
  parameters: {
    docs: {
      description: {
        story: 'Available color variants for different content emphasis levels.'
      }
    }
  }
};

// Font weights
export const FontWeights: Story = {
  render: () =>
    TypographyGroupTemplate([
      { variant: 'body', weight: 'normal', children: 'Normal weight text for regular content' },
      { variant: 'body', weight: 'medium', children: 'Medium weight text for subtle emphasis' },
      { variant: 'body', weight: 'semibold', children: 'Semibold weight text for stronger emphasis' },
      { variant: 'body', weight: 'bold', children: 'Bold weight text for maximum emphasis' },
    ]),
  parameters: {
    docs: {
      description: {
        story: 'Font weight variations for different emphasis levels.'
      }
    }
  }
};

// Text alignment
export const TextAlignment: Story = {
  render: () => `
    <div style="width: 400px; display: flex; flex-direction: column; gap: 1rem;">
      <ds-typography variant="body" align="left">
        Left-aligned text is the default and most common alignment for body content.
      </ds-typography>
      <ds-typography variant="body" align="center">
        Center-aligned text works well for headings, callouts, and featured content.
      </ds-typography>
      <ds-typography variant="body" align="right">
        Right-aligned text can be useful for numerical data or special layouts.
      </ds-typography>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Text alignment options for different layout needs.'
      }
    }
  }
};

// Complete type scale showcase
export const TypeScale: Story = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 800px;">
      <!-- Headings section -->
      <div>
        <ds-typography variant="overline" color="muted" weight="medium">HEADINGS</ds-typography>
        <div style="margin-top: 1rem; display: flex; flex-direction: column; gap: 0.75rem;">
          <ds-typography variant="h1" weight="bold">The quick brown fox jumps</ds-typography>
          <ds-typography variant="h2" weight="semibold">The quick brown fox jumps over</ds-typography>
          <ds-typography variant="h3" weight="semibold">The quick brown fox jumps over the lazy</ds-typography>
          <ds-typography variant="h4" weight="medium">The quick brown fox jumps over the lazy dog</ds-typography>
          <ds-typography variant="h5" weight="medium">The quick brown fox jumps over the lazy dog and runs</ds-typography>
          <ds-typography variant="h6" weight="medium">The quick brown fox jumps over the lazy dog and runs away</ds-typography>
        </div>
      </div>
      
      <!-- Body text section -->
      <div>
        <ds-typography variant="overline" color="muted" weight="medium">BODY TEXT</ds-typography>
        <div style="margin-top: 1rem; display: flex; flex-direction: column; gap: 1rem;">
          <ds-typography variant="body">
            Regular body text provides comfortable reading for main content. This size is optimized for 
            readability across different devices and screen sizes, ensuring a pleasant reading experience.
          </ds-typography>
          <ds-typography variant="body-sm">
            Small body text is perfect for secondary information, form labels, or when you need to 
            fit more content in a compact space while maintaining readability.
          </ds-typography>
          <ds-typography variant="caption" color="secondary">
            Caption text works well for image descriptions, metadata, timestamps, or any supplementary 
            information that supports the main content.
          </ds-typography>
        </div>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Complete typography scale showing the relationship between all variants in a realistic content layout.'
      }
    }
  }
};
