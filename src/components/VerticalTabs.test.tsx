import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { useNavigate } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

import { routes } from '../routes';
import { AppTestWrapper } from '../tests/AppTestWrapper';
import { overrides } from '../tests/fixtures';
import { VerticalTabs } from './VerticalTabs';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');

  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe('VerticalTabs', () => {
  it('renders the VerticalTabs component', () => {
    render(<VerticalTabs tabs={overrides.tabs} />, {
      wrapper: ({ children }) => <AppTestWrapper children={children} initialRouterEntries={[routes.margarita]} />,
    });

    expect(screen.queryByTestId('verticalTabs')).toBeTruthy();
    expect(screen.getByTestId('tabContent').textContent).toBe('test content 1');
  });

  it('tab switching works', async () => {
    const mockNavigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);

    render(<VerticalTabs tabs={overrides.tabs} />, {
      wrapper: ({ children }) => <AppTestWrapper children={children} initialRouterEntries={[routes.margarita]} />,
    });

    const tabButton2 = screen.queryByTestId('verticalTab2');
    expect(tabButton2).toBeInTheDocument();
    await userEvent.click(tabButton2);

    expect(screen.getByTestId('tabContent').textContent).toBe('test content 2');
    expect(mockNavigate).toHaveBeenCalledWith('/a1');

    const tabButton3 = screen.queryByTestId('verticalTab3');
    expect(tabButton3).toBeInTheDocument();
    await userEvent.click(tabButton3);

    expect(screen.getByTestId('tabContent').textContent).toBe('test content 3');
    expect(mockNavigate).toHaveBeenCalledWith('/mojito');
  });
});
