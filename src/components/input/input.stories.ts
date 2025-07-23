import type { Meta, StoryObj } from '@storybook/html';

// Template functions for cleaner story definitions
const InputTemplate = (args: any) => `
  <ds-input
    type="${args.type}"
    size="${args.size}"
    value="${args.value || ''}"
    placeholder="${args.placeholder}"
    label="${args.label}"
    ${args.disabled ? 'disabled' : ''}
    ${args.required ? 'required' : ''}
    ${args.readonly ? 'readonly' : ''}
    error="${args.error}"
    helper-text="${args.helperText}"
    ${args.fullWidth ? 'full-width' : ''}
    name="${args.name || ''}"
    autocomplete="${args.autocomplete || ''}"
  ></ds-input>
`;

const InputGroupTemplate = (inputs: Array<{label: string, [key: string]: any}>) => `
  <div style="display: flex; flex-direction: column; gap: 1rem; width: 300px;">
    ${inputs.map(input => InputTemplate(input)).join('')}
  </div>
`;

const meta: Meta = {
  title: 'Components/Input',
  component: 'ds-input',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    value: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    readonly: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'text' },
    },
    helperText: {
      control: { type: 'text' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    type: 'text',
    size: 'md',
    placeholder: 'Enter text...',
    label: 'Label',
    disabled: false,
    required: false,
    readonly: false,
    error: '',
    helperText: '',
    fullWidth: false,
  },
  render: (args) => InputTemplate(args),
};

export const WithError: Story = {
  args: {
    ...Default.args,
    label: 'Email',
    type: 'email',
    value: 'invalid-email',
    error: 'Please enter a valid email address',
  },
  render: Default.render,
};

export const WithHelperText: Story = {
  args: {
    ...Default.args,
    label: 'Password',
    type: 'password',
    helperText: 'Must be at least 8 characters long',
  },
  render: Default.render,
};

export const Required: Story = {
  args: {
    ...Default.args,
    label: 'Full Name',
    required: true,
    placeholder: 'Enter your full name',
  },
  render: Default.render,
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    label: 'Disabled Input',
    value: 'This input is disabled',
    disabled: true,
  },
  render: Default.render,
};

export const Readonly: Story = {
  args: {
    ...Default.args,
    label: 'Readonly Input',
    value: 'This input is readonly',
    readonly: true,
  },
  render: Default.render,
};

export const FullWidth: Story = {
  args: {
    ...Default.args,
    label: 'Full Width Input',
    fullWidth: true,
  },
  render: Default.render,
  parameters: {
    layout: 'padded',
  },
};

export const Sizes: Story = {
  render: () => InputGroupTemplate([
    { size: 'sm', label: 'Small', placeholder: 'Small input' },
    { size: 'md', label: 'Medium', placeholder: 'Medium input' },
    { size: 'lg', label: 'Large', placeholder: 'Large input' }
  ]),
};

export const InputTypes: Story = {
  render: () => InputGroupTemplate([
    { type: 'text', label: 'Text', placeholder: 'Enter text' },
    { type: 'email', label: 'Email', placeholder: 'Enter email' },
    { type: 'password', label: 'Password', placeholder: 'Enter password' },
    { type: 'number', label: 'Number', placeholder: 'Enter number' },
    { type: 'tel', label: 'Phone', placeholder: 'Enter phone number' },
    { type: 'url', label: 'URL', placeholder: 'Enter URL' },
    { type: 'search', label: 'Search', placeholder: 'Search...' }
  ]),
};
