import { Component, Prop, h, Host } from '@stencil/core';
import { cva, type VariantProps } from 'class-variance-authority';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonType = 'button' | 'submit' | 'reset';

// CVA variant definition
const buttonVariants = cva(
  // Base classes
  [
    'relative',
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2',
    'border',
    'border-transparent',
    'rounded-md',
    'font-medium',
    'ds-transition',
    'ds-focus-ring',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-primary-600',
          'text-white',
          'hover:bg-primary-700',
          'active:bg-primary-800',
          'disabled:hover:bg-primary-600',
        ],
        secondary: [
          'bg-secondary-100',
          'text-secondary-900',
          'border-secondary-300',
          'hover:bg-secondary-200',
          'hover:border-secondary-400',
          'active:bg-secondary-300',
          'disabled:hover:bg-secondary-100',
          'disabled:hover:border-secondary-300',
        ],
        ghost: [
          'bg-transparent',
          'text-secondary-700',
          'hover:bg-secondary-100',
          'active:bg-secondary-200',
          'disabled:hover:bg-transparent',
        ],
        danger: [
          'bg-error-600',
          'text-white',
          'hover:bg-error-700',
          'active:bg-error-800',
          'disabled:hover:bg-error-600',
        ],
      },
      size: {
        sm: ['px-3', 'py-2', 'text-sm', 'leading-5'],
        md: ['px-4', 'py-2.5', 'text-sm', 'leading-5'],
        lg: ['px-6', 'py-3', 'text-base', 'leading-6'],
      },
      fullWidth: {
        true: ['w-full'],
      },
      loading: {
        true: ['cursor-wait'],
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

@Component({
  tag: 'ds-button',
  shadow: false,
})
export class Button {
  /**
   * The button variant
   */
  @Prop() variant: ButtonVariant = 'primary';

  /**
   * The button size
   */
  @Prop() size: ButtonSize = 'md';

  /**
   * Whether the button is disabled
   */
  @Prop() disabled: boolean = false;

  /**
   * Whether the button should take full width
   */
  @Prop() fullWidth: boolean = false;

  /**
   * Whether the button is in loading state
   */
  @Prop() loading: boolean = false;

  /**
   * Button type attribute
   */
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  private getButtonClasses() {
    return buttonVariants({
      variant: this.variant,
      size: this.size,
      fullWidth: this.fullWidth,
      loading: this.loading,
    });
  }

  render() {
    return (
      <Host class={this.fullWidth ? 'block w-full' : 'inline-block'}>
        <button
          class={this.getButtonClasses()}
          disabled={this.disabled || this.loading}
          type={this.type}
        >
          {this.loading && <ds-spinner size='sm'></ds-spinner>}
          <span class='flex items-center justify-center gap-2'>
            <slot></slot>
          </span>
        </button>
      </Host>
    );
  }
}
