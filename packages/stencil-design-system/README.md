# Design System

A modern, framework-agnostic design system built with Stencil and Tailwind CSS.

## Features

- 🎨 **Framework Agnostic** - Works with React, Vue, Angular, or vanilla JavaScript
- 🎯 **TypeScript** - Full type safety and IntelliSense support
- 🎨 **Tailwind CSS** - Utility-first styling with full theming support
- 📚 **Storybook** - Component documentation and development environment
- 🧪 **Testing** - Unit tests with Jest and Stencil testing utilities
- 🔧 **SSR Compatible** - Works with server-side rendering frameworks
- 🎭 **Themeable** - CSS custom properties for runtime theming

## Quick Start

### Installation

```bash
npm install @jesusrugama/stencil-design-system
```

### Usage

#### Vanilla JavaScript/HTML

```html
<!DOCTYPE html>
<html>
<head>
  <script type="module" src="https://unpkg.com/@jesusrugama/stencil-design-system/dist/design-system/design-system.esm.js"></script>
</head>
<body>
  <ds-button variant="primary">Click me</ds-button>
  <ds-input label="Name" placeholder="Enter your name"></ds-input>
</body>
</html>
```

#### React

```jsx
import { defineCustomElements } from '@jesusrugama/stencil-design-system/loader';

// Call this once in your app
defineCustomElements();

function App() {
  return (
    <div>
      <ds-button variant="primary">Click me</ds-button>
      <ds-input label="Name" placeholder="Enter your name" />
    </div>
  );
}
```

#### Vue

```vue
<template>
  <div>
    <ds-button variant="primary">Click me</ds-button>
    <ds-input label="Name" placeholder="Enter your name" />
  </div>
</template>

<script>
import { defineCustomElements } from '@jesusrugama/stencil-design-system/loader';

defineCustomElements();
</script>
```

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/@jesusrugama/stencil-design-system.git
cd stencil-design-system

# Install dependencies
npm install

# Start development server
npm start
```

### Available Scripts

- `npm start` - Start development server with hot reload
- `npm run build` - Build the component library
- `npm test` - Run unit tests
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production
- `npm run playground` - Start playground development server

### Project Structure

```
src/
├── components/          # Component implementations
│   ├── button/
│   │   ├── button.tsx
│   │   ├── button.stories.ts
│   │   └── button.spec.ts
│   └── input/
├── tokens/             # Design tokens
│   ├── colors.ts
│   ├── typography.ts
│   └── spacing.ts
├── styles/             # Global styles
│   ├── variables.css
│   └── base.css
└── index.ts           # Main entry point
```

## Components

### Button

A versatile button component with multiple variants and states.

```html
<ds-button variant="primary" size="md">Primary Button</ds-button>
<ds-button variant="secondary" size="lg" disabled>Disabled</ds-button>
<ds-button variant="ghost" loading>Loading</ds-button>
```

**Props:**
- `variant`: `primary` | `secondary` | `ghost` | `danger`
- `size`: `sm` | `md` | `lg`
- `disabled`: boolean
- `loading`: boolean
- `full-width`: boolean

### Input

A flexible input component supporting various types and states.

```html
<ds-input 
  type="email" 
  label="Email Address" 
  placeholder="Enter your email"
  required
  helper-text="We'll never share your email"
></ds-input>
```

**Props:**
- `type`: `text` | `email` | `password` | `number` | `tel` | `url` | `search`
- `size`: `sm` | `md` | `lg`
- `label`: string
- `placeholder`: string
- `error`: string
- `helper-text`: string
- `required`: boolean
- `disabled`: boolean
- `readonly`: boolean

## Theming

The design system uses CSS custom properties for theming. You can customize the appearance by overriding these variables:

```css
:root {
  --ds-color-primary-600: #your-primary-color;
  --ds-color-secondary-100: #your-secondary-color;
  /* ... other variables */
}

/* Dark theme example */
[data-theme="dark"] {
  --ds-color-primary-600: #3b82f6;
  --ds-color-secondary-100: #1e293b;
  --ds-color-secondary-900: #f1f5f9;
}
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-component`
3. Make your changes and add tests
4. Run tests: `npm test`
5. Build the project: `npm run build`
6. Submit a pull request

## License

MIT License - see [LICENSE](LICENSE) file for details.
