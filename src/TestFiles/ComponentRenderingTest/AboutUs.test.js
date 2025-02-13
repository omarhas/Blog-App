import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App'; 
import AboutUs from '../../allComponents/AboutUs'; 
import '@testing-library/jest-dom/extend-expect';


test('renders AboutUs component', () => {
  render(<AboutUs />);
  
  // Check if the heading "About Us Page" is rendered
  const aboutHeading = screen.getByText('About Us Page');
  expect(aboutHeading).toBeInTheDocument();

  // Check if specific content within the AboutUs component is rendered
  const teamMembers = screen.getAllByText(/Some text that describes me lorem ipsum ipsum lorem\./i);
  expect(teamMembers.length).toBe(3);

 
});
