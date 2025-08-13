import { Component, h } from '@stencil/core';

@Component({
  tag: 'ds-spinner',
  shadow: false,
})
export class Spinner {
  render() {
    return (
      <span class='flex items-center justify-center'>
        <svg
          class='w-4 h-4 animate-spin'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            cx='12'
            cy='12'
            r='10'
            stroke='currentColor'
            stroke-width='4'
            stroke-linecap='round'
            stroke-dasharray='31.416'
            stroke-dashoffset='31.416'
          >
            <animate
              attributeName='stroke-dasharray'
              dur='2s'
              values='0 31.416;15.708 15.708;0 31.416;0 31.416'
              repeatCount='indefinite'
            />
            <animate
              attributeName='stroke-dashoffset'
              dur='2s'
              values='0;-15.708;-31.416;-31.416'
              repeatCount='indefinite'
            />
          </circle>
        </svg>
      </span>
    );
  }
}
