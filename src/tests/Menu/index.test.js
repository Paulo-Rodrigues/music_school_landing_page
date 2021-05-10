import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from '../../components/Menu';

describe('<Menu />', () => {
  test('render main title', () => {
    render(<Menu />);
    const text = screen.getByText(/Cursos/i);
    expect(text).toBeInTheDocument();
  });

  test('render  subtitle', () => {
    render(<Menu />);
    const text = screen.getByText(/Preços/i);
    expect(text).toBeInTheDocument();
  });
});
