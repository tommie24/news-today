import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, screen } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders loading News', () => {
  render(<App />);
  const linkElement = screen.getByText(/loading News/i);
  expect(linkElement).toBeInTheDocument();
});
