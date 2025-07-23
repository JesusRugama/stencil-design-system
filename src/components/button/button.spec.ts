import { newSpecPage } from '@stencil/core/testing';
import { Button } from './button';

describe('ds-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<ds-button>Click me</ds-button>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-button>
        <mock:shadow-root>
          <button class="button button--primary button--md" disabled="" type="button">
            <span class="button__content">
              <slot></slot>
            </span>
          </button>
        </mock:shadow-root>
        Click me
      </ds-button>
    `);
  });

  it('renders with variant', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<ds-button variant="secondary">Click me</ds-button>`,
    });
    expect(page.root.shadowRoot.querySelector('button')).toHaveClass('button--secondary');
  });

  it('renders with size', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<ds-button size="lg">Click me</ds-button>`,
    });
    expect(page.root.shadowRoot.querySelector('button')).toHaveClass('button--lg');
  });

  it('renders disabled state', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<ds-button disabled>Click me</ds-button>`,
    });
    expect(page.root.shadowRoot.querySelector('button')).toHaveAttribute('disabled');
  });

  it('renders loading state', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<ds-button loading>Click me</ds-button>`,
    });
    const button = page.root.shadowRoot.querySelector('button');
    expect(button).toHaveClass('button--loading');
    expect(button).toHaveAttribute('disabled');
    expect(page.root.shadowRoot.querySelector('.button__spinner')).toBeTruthy();
  });

  it('renders full width', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<ds-button full-width>Click me</ds-button>`,
    });
    expect(page.root.shadowRoot.querySelector('button')).toHaveClass('button--full-width');
  });
});
