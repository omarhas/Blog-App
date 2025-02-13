import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactUs from '../../allComponents/ContactUs';
import '@testing-library/jest-dom/extend-expect';

test('renders ContactUs component', () => {
  render(<ContactUs />);
  
  // Check if the main title and description are rendered
  const titleElement = screen.getByText('Contact us');
  expect(titleElement).toBeInTheDocument();

  const descriptionElement = screen.getByText('Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.');
  expect(descriptionElement).toBeInTheDocument();

  // Check if input fields and labels are associated correctly
  const nameInput = screen.getByLabelText('Your name');
  expect(nameInput).toBeInTheDocument();

  const emailInput = screen.getByLabelText('Your email');
  expect(emailInput).toBeInTheDocument();

  const subjectInput = screen.getByLabelText('Subject');
  expect(subjectInput).toBeInTheDocument();

  const messageTextarea = screen.getByLabelText('Your message');
  expect(messageTextarea).toBeInTheDocument();

  // Check if the form submission button is present
  const sendButton = screen.getByText('Send');
  expect(sendButton).toBeInTheDocument();

  // Check if contact information is displayed
  const addressElement = screen.getByText('San Francisco, CA 94126, USA');
  expect(addressElement).toBeInTheDocument();

  const phoneElement = screen.getByText('+ 01 234 567 89');
  expect(phoneElement).toBeInTheDocument();

  const emailContactElement = screen.getByText('contact@mdbootstrap.com');
  expect(emailContactElement).toBeInTheDocument();
});
