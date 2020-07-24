import React from 'react';
import { render } from '@testing-library/react';
import FanArt from './FanArt';

test('Component is in the document', () => {
  const { container } = render(<FanArt />);
  expect(container.firstChild).toBeInTheDocument();
});

test('Component is visible', () => {
  const { container } = render(<FanArt />);
  expect(container.firstChild).toBeVisible();
});

test('Component has class "App"', () => {
  const { container } = render(<FanArt />);
  expect(container.firstChild).toHaveClass('FanArt');
});
