import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';


describe('App', () => {
  test('renders App component', () => {
    render(<App />);
    screen.debug();
  });
});