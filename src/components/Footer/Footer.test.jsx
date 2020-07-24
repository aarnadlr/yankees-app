import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('Component is in the document', () => {
  const { container } = render(<Footer />);
  expect(container.firstChild).toBeInTheDocument();
});

test('Component is visible', () => {
  const { container } = render(<Footer />);
  expect(container.firstChild).toBeVisible();
});

test('Component has class "App"', () => {
  const { container } = render(<Footer />);
  expect(container.firstChild).toHaveClass('Footer');
});
