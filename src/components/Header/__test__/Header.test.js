import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('should render same text passed into title prop', async () => {
  render(<Header title='My Header' />);
  const headingElement = screen.getByText(/My Header/i);
  expect(headingElement).toBeInTheDocument();
});

// it('should render same text passed into title prop', async () => {
//   render(<Header title='My Header' />);
//   const headingElement = screen.getByTitle('Header');
//   expect(headingElement).toBeInTheDocument();
// });

// it('should render same text passed into title prop', async () => {
//   render(<Header title='My Header' />);
//   const headingElement = screen.getByTestId('header-1');
//   expect(headingElement).toBeInTheDocument();
// });

// // Find By
// it('should render same text passed into title prop', async () => {
//   render(<Header title='My Header' />);
//   const headingElement = await screen.findByText(/My Header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// // Query by
// it('should render same text passed into title prop', async () => {
//   render(<Header title='My Header' />);
//   const headingElement = screen.queryByText(/cats/i);
//   expect(headingElement).not.toBeInTheDocument();
// });

// it('should render same text passed into title prop', async () => {
//   render(<Header title='My Header' />);
//   const headingElements = screen.getAllByRole('heading');
//   expect(headingElements.length).toBe(2);
// });
