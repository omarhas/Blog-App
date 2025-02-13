import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ContactUs from '../../allComponents/ContactUs'; 

test('onchange user name on btn testing', () => {
  render(<ContactUs/>);

  const btn = screen.getByRole('button');
  fireEvent.click(btn);
  expect(screen.getByText("Soon you recieve response")).toBeInTheDocument();
});
