import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../Todo';
import { BrowserRouter } from 'react-router-dom';

const MockTodo = () => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
);

describe('Todo', () => {
  it('Todo is getting into list', async () => {
    render(<MockTodo />);
    // Input Area
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const inputButton = screen.getByTestId('input-button');
    fireEvent.change(inputElement, { target: { value: 'JUJU' } });
    fireEvent.click(inputButton);
    // List Area
    const todoItem = screen.getByText(/JUJU/i);
    expect(todoItem).toBeInTheDocument();
  });

  it('Todos is getting into list', async () => {
    render(<MockTodo />);
    // Input Area
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const inputButton = screen.getByTestId('input-button');
    fireEvent.change(inputElement, { target: { value: 'JUJU' } });
    fireEvent.click(inputButton);
    fireEvent.change(inputElement, { target: { value: 'JUJU' } });
    fireEvent.click(inputButton);
    fireEvent.change(inputElement, { target: { value: 'JUJU' } });
    fireEvent.click(inputButton);
    // List Area
    const todoItems = screen.getAllByTestId('todo-item-test');
    expect(todoItems.length).toBe(3);
  });

  it('Should change the style on item click', async () => {
    render(<MockTodo />);
    // Input Area
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const inputButton = screen.getByTestId('input-button');
    fireEvent.change(inputElement, { target: { value: 'JUJU' } });
    fireEvent.click(inputButton);
    // List Area
    const todoItem = screen.getByText(/JUJU/i);
    fireEvent.click(todoItem);
    expect(todoItem).toHaveClass('todo-item-active');
  });
});
