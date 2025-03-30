import { render } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import { Badge } from './Badge';

describe('Badge', () => {
  it('renders the Badge component', () => {
    const { container } = render(<Badge value='test' data-testid='testId' />);

    expect(container.querySelector('[data-testid="testId"]')).toBeTruthy();
    expect(container.textContent).toBe('test');
  });
});
