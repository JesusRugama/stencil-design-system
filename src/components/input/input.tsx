import { Component, Prop, h, Host, Event, EventEmitter, State, Watch } from '@stencil/core';
import { cva, type VariantProps } from 'class-variance-authority';

export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
export type InputSize = 'sm' | 'md' | 'lg';

// CVA variant definitions for Input
const inputContainerVariants = cva(
  // Base classes for container
  [
    'relative',
    'border',
    'rounded-md',
    'bg-white',
    'ds-transition',
  ],
  {
    variants: {
      state: {
        default: ['border-secondary-300', 'hover:border-secondary-400'],
        focused: ['border-primary-500', 'ring-2', 'ring-primary-100'],
        error: ['border-error-500'],
        errorFocused: ['border-error-500', 'ring-2', 'ring-error-100'],
      },
      disabled: {
        true: ['bg-secondary-50', 'border-secondary-200', 'cursor-not-allowed'],
      },
    },
    defaultVariants: {
      state: 'default',
    },
  }
);

const inputFieldVariants = cva(
  // Base classes for input field
  [
    'w-full',
    'border-none',
    'outline-none',
    'bg-transparent',
    'text-secondary-900',
    'placeholder-secondary-400',
    'font-inherit',
  ],
  {
    variants: {
      size: {
        sm: ['px-3', 'py-2', 'text-sm', 'leading-5'],
        md: ['px-3', 'py-2.5', 'text-sm', 'leading-5'],
        lg: ['px-4', 'py-3', 'text-base', 'leading-6'],
      },
      disabled: {
        true: ['text-secondary-500', 'cursor-not-allowed', 'placeholder-secondary-300'],
      },
      readonly: {
        true: ['cursor-default'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export type InputContainerVariantProps = VariantProps<typeof inputContainerVariants>;
export type InputFieldVariantProps = VariantProps<typeof inputFieldVariants>;

@Component({
  tag: 'ds-input',
  shadow: false,
})
export class Input {
  private inputElement?: HTMLInputElement;

  /**
   * The input type
   */
  @Prop() type: InputType = 'text';

  /**
   * The input size
   */
  @Prop() size: InputSize = 'md';

  /**
   * The input value
   */
  @Prop({ mutable: true }) value: string = '';

  /**
   * The input placeholder
   */
  @Prop() placeholder: string = '';

  /**
   * The input label
   */
  @Prop() label: string = '';

  /**
   * Whether the input is disabled
   */
  @Prop() disabled: boolean = false;

  /**
   * Whether the input is required
   */
  @Prop() required: boolean = false;

  /**
   * Whether the input is readonly
   */
  @Prop() readonly: boolean = false;

  /**
   * Error message to display
   */
  @Prop() error: string = '';

  /**
   * Helper text to display
   */
  @Prop() helperText: string = '';

  /**
   * Whether the input should take full width
   */
  @Prop() fullWidth: boolean = false;

  /**
   * Input name attribute
   */
  @Prop() name: string = '';

  /**
   * Input autocomplete attribute
   */
  @Prop() autocomplete: string = '';

  /**
   * Maximum length of input
   */
  @Prop() maxlength: number;

  /**
   * Minimum length of input
   */
  @Prop() minlength: number;

  @State() focused: boolean = false;

  /**
   * Emitted when the input value changes
   */
  @Event() dsInput: EventEmitter<string>;

  /**
   * Emitted when the input is focused
   */
  @Event() dsFocus: EventEmitter<void>;

  /**
   * Emitted when the input loses focus
   */
  @Event() dsBlur: EventEmitter<void>;

  @Watch('value')
  watchValue(newValue: string) {
    if (this.inputElement && this.inputElement.value !== newValue) {
      this.inputElement.value = newValue;
    }
  }

  private handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.dsInput.emit(this.value);
  };

  private handleFocus = () => {
    this.focused = true;
    this.dsFocus.emit();
  };

  private handleBlur = () => {
    this.focused = false;
    this.dsBlur.emit();
  };

  private getContainerClasses() {
    let state: 'default' | 'focused' | 'error' | 'errorFocused' = 'default';
    
    if (this.error && this.focused) {
      state = 'errorFocused';
    } else if (this.error) {
      state = 'error';
    } else if (this.focused) {
      state = 'focused';
    }

    return inputContainerVariants({
      state,
      disabled: this.disabled,
    });
  }

  private getInputClasses() {
    return inputFieldVariants({
      size: this.size,
      disabled: this.disabled,
      readonly: this.readonly,
    });
  }

  render() {
    const hasError = !!this.error;
    const hasLabel = !!this.label;
    const hasHelperText = !!this.helperText;

    return (
      <Host class={this.fullWidth ? 'block w-full' : 'inline-block'}>
        <div class={`flex flex-col gap-1.5 ${this.fullWidth ? 'w-full' : ''}`}>
          {hasLabel && (
            <label class="flex items-center gap-1 text-sm font-medium text-secondary-700 leading-5" htmlFor="input">
              {this.label}
              {this.required && <span class="text-error-500">*</span>}
            </label>
          )}
          
          <div class={this.getContainerClasses()}>
            <input
              ref={(el) => this.inputElement = el}
              id="input"
              class={this.getInputClasses()}
              type={this.type}
              value={this.value}
              placeholder={this.placeholder}
              disabled={this.disabled}
              required={this.required}
              readonly={this.readonly}
              name={this.name}
              autocomplete={this.autocomplete}
              maxlength={this.maxlength}
              minlength={this.minlength}
              onInput={this.handleInput}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
          </div>

          {(hasError || hasHelperText) && (
            <div class="text-xs leading-4">
              {hasError ? (
                <span class="text-error-600">{this.error}</span>
              ) : (
                <span class="text-secondary-500">{this.helperText}</span>
              )}
            </div>
          )}
        </div>
      </Host>
    );
  }
}
