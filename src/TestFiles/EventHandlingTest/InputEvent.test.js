import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ContactUs from '../../allComponents/ContactUs'; 

test('onchange user name on input testing', () => {
  render(<ContactUs/>);

  const input = screen.getByLabelText('Your name');
  fireEvent.change(input, { target: { value: 'a' } });
  expect(input.value).toBe('a');
});
