import React from 'react';
import { render } from '@testing-library/react';
import { BasicLoader } from './loader.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicLoader />);
  const rendered = getByText('hello from Loader');
  expect(rendered).toBeTruthy();
});
