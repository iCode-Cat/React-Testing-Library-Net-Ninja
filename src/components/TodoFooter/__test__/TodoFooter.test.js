import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

const MockTodoTFooter = ({ num }) => (
  <BrowserRouter>
    <TodoFooter numberOfIncompleteTasks={num} />
  </BrowserRouter>
);

describe('TodoFooter', () => {
  it('should render the correct amount of incomplete tasks', async () => {
    render(<MockTodoTFooter num={5} />);
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it('should render "task" when the number of tasks is one', async () => {
    render(<MockTodoTFooter num={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
  });
});

// it('should render "task" when the number of tasks is one', async () => {
//   render(<MockTodoTFooter num={1} />);
//   const paragraphElement = screen.getByText(/1 task left/i);
//   expect(paragraphElement).toBeTruthy();
// });

// it('should render "task" when the number of tasks is one', async () => {
//   render(<MockTodoTFooter num={1} />);
//   const paragraphElement = screen.getByText(/1 task left/i);
//   expect(paragraphElement).not.toBeVisible();
// });

// it('should render "task" when the number of tasks is one', async () => {
//   render(<MockTodoTFooter num={1} />);
//   const paragraphElement = screen.getByText(/1 task left/i);
//   expect(paragraphElement).toContainHTML('p');
// });

// it('should render "task" when the number of tasks is one', async () => {
//   render(<MockTodoTFooter num={1} />);
//   const paragraphElement = screen.getByText(/1 task left/i);
//   expect(paragraphElement.textContent).toBe('1 task left');
// });
