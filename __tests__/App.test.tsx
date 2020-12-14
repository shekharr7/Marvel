import { render, screen } from '@testing-library/react';
import SearchView from '../src/views/search-view';

test('renders learn react link', () => {
  render(<SearchView />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
