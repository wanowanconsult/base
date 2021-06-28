import * as React from 'react';
import { render } from '@testing-library/react';
import { BasicRow } from './row.composition';

it('should render with the correct start and end position', () => {
  const { getByText } = render(<BasicRow />);
  const rendered = getByText('hello from Row');
  expect(rendered).toBeTruthy();
});
