import { Component, Prop, h } from '@stencil/core';

export type TypographyVariant = 
  | 'h1' 
  | 'h2' 
  | 'h3' 
  | 'h4' 
  | 'h5' 
  | 'h6' 
  | 'body' 
  | 'body-sm' 
  | 'caption' 
  | 'overline';

export type TypographyColor = 
  | 'primary' 
  | 'secondary' 
  | 'muted' 
  | 'accent';

@Component({
  tag: 'ds-typography',
  shadow: false,
  styleUrl: 'typography.css',
})
export class Typography {
  @Prop() variant: TypographyVariant = 'body';
  @Prop() color: TypographyColor = 'primary';
  @Prop() align: 'left' | 'center' | 'right' = 'left';
  @Prop() weight: 'normal' | 'medium' | 'semibold' | 'bold' = 'normal';

  private getTypographyClasses(): string {
    const classes = ['ds-typography'];
    
    classes.push(`ds-typography--${this.variant}`);
    classes.push(`ds-typography--${this.color}`);
    classes.push(`ds-typography--${this.align}`);
    classes.push(`ds-typography--${this.weight}`);
    
    return classes.join(' ');
  }

  private getSemanticTag(): string {
    switch (this.variant) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        return this.variant;
      case 'body':
      case 'body-sm':
        return 'p';
      case 'caption':
      case 'overline':
        return 'span';
      default:
        return 'p';
    }
  }

  render() {
    const classes = this.getTypographyClasses();
    const Tag = this.getSemanticTag() as any;

    return (
      <Tag class={classes}>
        <slot />
      </Tag>
    );
  }
}
