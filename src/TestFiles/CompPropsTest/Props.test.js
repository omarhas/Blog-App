import React from 'react';
import { render } from '@testing-library/react';
import Greeting from '../../allComponents/Greeting';

test('renders greeting with the provided name prop', () => {
  const { getByText } = render(<Greeting name="John" />);

  const greetingText = getByText('Hello, John!');

  expect(greetingText).toBeInTheDocument();
});
