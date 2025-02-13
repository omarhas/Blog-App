import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';
import '@testing-library/jest-dom/extend-expect';


test('renders Home component for default path', () => {
  render(<App />);
  const homeElement = screen.getByTestId('home-component');
  expect(homeElement).toBeInTheDocument();
});




