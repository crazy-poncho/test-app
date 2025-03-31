import { screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

import { render } from '../tests';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders the Badge component', () => {
    render(<Badge value='test' data-testid='testId' />);

    const badge = screen.queryByTestId('testId');
    expect(badge).toBeInTheDocument();
    expect(badge.textContent).toBe('test');
  });
});
