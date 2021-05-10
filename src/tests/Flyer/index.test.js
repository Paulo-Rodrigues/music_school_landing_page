import React from 'react';
import { render, screen } from '@testing-library/react';
import Flyer from '../../components/Flyer';

describe('<Flyer />', () => {
  test('render flyer title', () => {
    render(<Flyer />);
    const text = screen.getByText(/^Title/i);
    expect(text).toBeInTheDocument();
  });

  test('render flyer subtitle', () => {
    render(<Flyer />);
    const text = screen.getByText(/Subtitle/i);
    expect(text).toBeInTheDocument();
  });
});