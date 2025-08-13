import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Overview',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete overview of the minimalist design system showcasing all components working together in harmony.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const DesignSystemShowcase: Story = {
  render: () => `
    <div style="
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
      background-color: #fafafa;
      min-height: 100vh;
      padding: 2rem;
    ">
      <div style="max-width: 1200px; margin: 0 auto;">
        
        <!-- Header -->
        <header style="text-align: center; margin-bottom: 4rem; padding: 2rem 0;">
          <ds-typography variant="h1" weight="bold" align="center">
            Minimalist Design System
          </ds-typography>
          <ds-typography variant="body" color="secondary" align="center" style="margin-top: 1rem;">
            Elegant, clean components for modern web applications
          </ds-typography>
        </header>

        <!-- Typography Section -->
        <section style="
          background: white; 
          border-radius: 0.75rem; 
          padding: 2rem; 
          margin-bottom: 2rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          border: 1px solid #f3f4f6;
        ">
          <ds-typography variant="h2" weight="semibold" style="margin-bottom: 1.5rem;">
            Typography
          </ds-typography>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
            <div>
              <ds-typography variant="h3" weight="medium" style="margin-bottom: 1rem;">Headings</ds-typography>
              <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                <ds-typography variant="h4">Heading 4</ds-typography>
                <ds-typography variant="h5">Heading 5</ds-typography>
                <ds-typography variant="h6">Heading 6</ds-typography>
              </div>
            </div>
            
            <div>
              <ds-typography variant="h3" weight="medium" style="margin-bottom: 1rem;">Body Text</ds-typography>
              <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                <ds-typography variant="body">Regular body text</ds-typography>
                <ds-typography variant="body-sm">Small body text</ds-typography>
                <ds-typography variant="caption" color="secondary">Caption text</ds-typography>
              </div>
            </div>
          </div>
        </section>

        <!-- Buttons Section -->
        <section style="
          background: white; 
          border-radius: 0.75rem; 
          padding: 2rem; 
          margin-bottom: 2rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          border: 1px solid #f3f4f6;
        ">
          <ds-typography variant="h2" weight="semibold" style="margin-bottom: 1.5rem;">
            Buttons
          </ds-typography>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
            <div>
              <ds-typography variant="h3" weight="medium" style="margin-bottom: 1rem;">Variants</ds-typography>
              <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <ds-button variant="primary">Primary</ds-button>
                <ds-button variant="secondary">Secondary</ds-button>
                <ds-button variant="ghost">Ghost</ds-button>
              </div>
            </div>
            
            <div>
              <ds-typography variant="h3" weight="medium" style="margin-bottom: 1rem;">Sizes</ds-typography>
              <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
                <ds-button size="sm">Small</ds-button>
                <ds-button size="md">Medium</ds-button>
                <ds-button size="lg">Large</ds-button>
              </div>
            </div>
            
            <div>
              <ds-typography variant="h3" weight="medium" style="margin-bottom: 1rem;">States</ds-typography>
              <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <ds-button>Normal</ds-button>
                <ds-button loading>Loading</ds-button>
                <ds-button disabled>Disabled</ds-button>
              </div>
            </div>
          </div>
        </section>

        <!-- Inputs Section -->
        <section style="
          background: white; 
          border-radius: 0.75rem; 
          padding: 2rem; 
          margin-bottom: 2rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          border: 1px solid #f3f4f6;
        ">
          <ds-typography variant="h2" weight="semibold" style="margin-bottom: 1.5rem;">
            Form Inputs
          </ds-typography>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
            <div>
              <ds-input 
                label="Email Address" 
                type="email" 
                placeholder="Enter your email"
                helper-text="We'll never share your email"
              ></ds-input>
            </div>
            
            <div>
              <ds-input 
                label="Password" 
                type="password" 
                placeholder="Enter password"
                required
              ></ds-input>
            </div>
            
            <div>
              <ds-input 
                label="Error State" 
                value="invalid@email" 
                error="Please enter a valid email address"
              ></ds-input>
            </div>
            
            <div>
              <ds-input 
                label="Disabled Input" 
                value="Cannot edit this"
                disabled
              ></ds-input>
            </div>
          </div>
        </section>

        <!-- Loading States Section -->
        <section style="
          background: white; 
          border-radius: 0.75rem; 
          padding: 2rem; 
          margin-bottom: 2rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          border: 1px solid #f3f4f6;
        ">
          <ds-typography variant="h2" weight="semibold" style="margin-bottom: 1.5rem;">
            Loading States
          </ds-typography>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;">
            <div style="text-align: center;">
              <ds-typography variant="h3" weight="medium" style="margin-bottom: 1rem;">Spinner Sizes</ds-typography>
              <div style="display: flex; gap: 1.5rem; justify-content: center; align-items: center;">
                <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
                  <ds-spinner size="sm"></ds-spinner>
                  <ds-typography variant="caption" color="secondary">Small</ds-typography>
                </div>
                <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
                  <ds-spinner size="md"></ds-spinner>
                  <ds-typography variant="caption" color="secondary">Medium</ds-typography>
                </div>
                <div style="display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
                  <ds-spinner size="lg"></ds-spinner>
                  <ds-typography variant="caption" color="secondary">Large</ds-typography>
                </div>
              </div>
            </div>
            
            <div style="text-align: center;">
              <ds-typography variant="h3" weight="medium" style="margin-bottom: 1rem;">In Context</ds-typography>
              <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center;">
                <ds-button loading size="md">Processing...</ds-button>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                  <ds-spinner size="sm"></ds-spinner>
                  <ds-typography variant="body-sm" color="secondary">Loading data</ds-typography>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Complete Form Example -->
        <section style="
          background: white; 
          border-radius: 0.75rem; 
          padding: 2rem; 
          margin-bottom: 2rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          border: 1px solid #f3f4f6;
        ">
          <ds-typography variant="h2" weight="semibold" style="margin-bottom: 1.5rem;">
            Complete Form Example
          </ds-typography>
          
          <div style="max-width: 500px;">
            <form style="display: flex; flex-direction: column; gap: 1.5rem;">
              <ds-input 
                label="Full Name" 
                type="text" 
                placeholder="John Doe"
                required
              ></ds-input>
              
              <ds-input 
                label="Email Address" 
                type="email" 
                placeholder="john@example.com"
                helper-text="We'll use this to send you updates"
                required
              ></ds-input>
              
              <ds-input 
                label="Company" 
                type="text" 
                placeholder="Acme Inc."
              ></ds-input>
              
              <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 1rem;">
                <ds-button variant="ghost">Cancel</ds-button>
                <ds-button variant="primary" type="submit">Submit</ds-button>
              </div>
            </form>
          </div>
        </section>

        <!-- Footer -->
        <footer style="text-align: center; padding: 2rem 0; margin-top: 2rem;">
          <ds-typography variant="caption" color="muted">
            Minimalist Design System • Clean • Elegant • Functional
          </ds-typography>
        </footer>

      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all design system components working together in a realistic application layout.'
      }
    }
  }
};
