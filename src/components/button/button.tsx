import { Component, Prop, h, Host } from '@stencil/core';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  tag: 'ds-button',
  shadow: true,
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
    const baseClasses = [
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
    ];

    // Size classes
    const sizeClasses = {
      sm: ['px-3', 'py-2', 'text-sm', 'leading-5'],
      md: ['px-4', 'py-2.5', 'text-sm', 'leading-5'],
      lg: ['px-6', 'py-3', 'text-base', 'leading-6'],
    };

    // Variant classes
    const variantClasses = {
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
    };

    // Additional classes
    const additionalClasses = [];
    if (this.fullWidth) additionalClasses.push('w-full');
    if (this.loading) additionalClasses.push('cursor-wait');

    return [
      ...baseClasses,
      ...sizeClasses[this.size],
      ...variantClasses[this.variant],
      ...additionalClasses,
    ].join(' ');
  }

  render() {
    return (
      <Host class={this.fullWidth ? 'block w-full' : 'inline-block'}>
        <button
          class={this.getButtonClasses()}
          disabled={this.disabled || this.loading}
          type={this.type}
        >
          {this.loading && (
            <span class="flex items-center justify-center">
              <svg
                class="w-4 h-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-dasharray="31.416"
                  stroke-dashoffset="31.416"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    dur="2s"
                    values="0 31.416;15.708 15.708;0 31.416;0 31.416"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="stroke-dashoffset"
                    dur="2s"
                    values="0;-15.708;-31.416;-31.416"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </span>
          )}
          <span class={`flex items-center justify-center gap-2 ${this.loading ? 'opacity-0' : ''}`}>
            <slot></slot>
          </span>
        </button>
      </Host>
    );
  }
}
