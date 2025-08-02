import {
  Component,
  Prop,
  h,
  Host,
  Event,
  EventEmitter,
  State,
  Watch,
} from '@stencil/core';

export type InputType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'url'
  | 'search';
export type InputSize = 'sm' | 'md' | 'lg';

@Component({
  tag: 'ds-input',
  shadow: false,
  styleUrl: 'input.css',
})
export class Input {
  private inputElement?: HTMLInputElement;

  @Prop() type: InputType = 'text';
  @Prop() size: InputSize = 'md';
  @Prop({ mutable: true }) value: string = '';
  @Prop() placeholder: string = '';
  @Prop() label: string = '';
  @Prop() disabled: boolean = false;
  @Prop() required: boolean = false;
  @Prop() readonly: boolean = false;
  @Prop() error: string = '';
  @Prop() helperText: string = '';
  @Prop() fullWidth: boolean = false;
  @Prop() name: string = '';
  @Prop() autocomplete: string = '';
  @Prop() maxlength: number;
  @Prop() minlength: number;

  @State() focused: boolean = false;

  @Event() dsInput: EventEmitter<string>;
  @Event() dsFocus: EventEmitter<void>;
  @Event() dsBlur: EventEmitter<void>;

  @Watch('value')
  watchValue(newValue: string) {
    if (this.inputElement) {
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

  private getContainerClasses(): string {
    const classes = ['ds-input-container'];
    
    classes.push(`ds-input-container--${this.size}`);
    
    if (this.fullWidth) classes.push('ds-input-container--full-width');
    if (this.disabled) classes.push('ds-input-container--disabled');
    if (this.error) classes.push('ds-input-container--error');
    if (this.focused) classes.push('ds-input-container--focused');
    
    return classes.join(' ');
  }

  private getInputClasses(): string {
    const classes = ['ds-input-field'];
    
    classes.push(`ds-input-field--${this.size}`);
    
    if (this.disabled) classes.push('ds-input-field--disabled');
    
    return classes.join(' ');
  }

  render() {
    const containerClasses = this.getContainerClasses();
    const inputClasses = this.getInputClasses();

    return (
      <div class="ds-input-wrapper">
        {this.label && (
          <label class="ds-input-label" htmlFor={this.name}>
            {this.label}
            {this.required && <span class="ds-input-required">*</span>}
          </label>
        )}
        
        <div class={containerClasses}>
          <input
            ref={(el) => (this.inputElement = el)}
            id={this.name}
            name={this.name}
            type={this.type}
            class={inputClasses}
            value={this.value}
            placeholder={this.placeholder}
            disabled={this.disabled}
            readonly={this.readonly}
            required={this.required}
            autocomplete={this.autocomplete}
            maxlength={this.maxlength}
            minlength={this.minlength}
            onInput={this.handleInput}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
        </div>
        
        {(this.error || this.helperText) && (
          <div class="ds-input-message">
            {this.error ? (
              <span class="ds-input-error">{this.error}</span>
            ) : (
              <span class="ds-input-helper">{this.helperText}</span>
            )}
          </div>
        )}
      </div>
    );
  }
}
