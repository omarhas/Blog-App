import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';
import '@testing-library/jest-dom/extend-expect';


test('increments the count when button is clicked', () => {
  const { getByText } = render(<Counter />);

  const countText = getByText('Count: 0');
  const button = getByText('Increment');

  fireEvent.click(button); 

  expect(countText.textContent).toBe('Count: 1');
});
