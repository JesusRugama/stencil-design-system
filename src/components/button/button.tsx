import { Component, Prop, h, Element } from '@stencil/core';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  tag: 'ds-button',
  shadow: false,
  styleUrl: 'button.css',
})
export class Button {
  @Element() el!: HTMLElement;

  @Prop() variant: ButtonVariant = 'primary';
  @Prop() size: ButtonSize = 'md';
  @Prop() disabled: boolean = false;
  @Prop() fullWidth: boolean = false;
  @Prop() loading: boolean = false;
  @Prop() type: ButtonType = 'button';

  private getButtonClasses(): string {
    const classes = ['ds-button'];
    
    classes.push(`ds-button--${this.variant}`);
    classes.push(`ds-button--${this.size}`);
    
    if (this.fullWidth) classes.push('ds-button--full-width');
    if (this.disabled || this.loading) classes.push('ds-button--disabled');
    if (this.loading) classes.push('ds-button--loading');
    
    return classes.join(' ');
  }

  render() {
    const classes = this.getButtonClasses();

    return (
      <button
        type={this.type}
        class={classes}
        disabled={this.disabled || this.loading}
        aria-disabled={this.disabled || this.loading ? 'true' : 'false'}
      >
        {this.loading && (
          <ds-spinner />
        )}
        <slot />
      </button>
    );
  }
}
