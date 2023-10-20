import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Navigator } from './Navigator';

describe('Navigator Component', () => {
  it('It should render a title', () => {
    const title = 'Add Product';
    const { getByText } = render(<Navigator title={title} />);

    expect(getByText(title)).toBeInTheDocument();
  });
});
