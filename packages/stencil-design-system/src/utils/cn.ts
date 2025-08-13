import { clsx, type ClassValue } from 'clsx';

/**
 * Simple utility function to merge class names using clsx
 * Consumer classes will naturally override component default classes due to CSS specificity
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
