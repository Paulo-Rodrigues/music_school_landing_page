import React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from '../../components/Banner';

describe('<Banner />', () => {
  test('render main title', () => {
    render(<Banner />);
    const title = screen.getByText(/Music School/i);
    expect(title).toBeInTheDocument();
  });

  test('render  subtitle', () => {
    render(<Banner />);
    const subtitle = screen.getByText(/Subtitle/i);
    expect(subtitle).toBeInTheDocument();
  });
});
