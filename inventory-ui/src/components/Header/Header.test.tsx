import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Header } from './Header';

describe('Header Component', () => {
  it('It should render a title', () => {
    const { getByText } = render(<Header />);

    const title = getByText('Inventory System');

    expect(title).toBeInTheDocument();
  });
});
