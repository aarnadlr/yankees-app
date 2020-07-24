import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('Component is in the document', () => {
  const { container } = render(<Header />);
  expect(container.firstChild).toBeInTheDocument();
});

test('Component is visible', () => {
  const { container } = render(<Header />);
  expect(container.firstChild).toBeVisible();
});

test('Component has class "App"', () => {
  const { container } = render(<Header />);
  expect(container.firstChild).toHaveClass('Header');
});
