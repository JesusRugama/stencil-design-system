import { colors } from './colors';
import { typography } from './typography';
import { spacing, semanticSpacing } from './spacing';

// Re-export individual tokens
export { colors } from './colors';
export { typography } from './typography';
export { spacing, semanticSpacing } from './spacing';

// Export combined theme object
export const theme = {
  colors,
  typography,
  spacing,
  semanticSpacing,
};

export type Theme = typeof theme;
