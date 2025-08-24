// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos correctly', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
    expect(screen.getByTestId('todo-item-1')).not.toHaveStyle('text-decoration: line-through');
    expect(screen.getByTestId('todo-item-2')).toHaveStyle('text-decoration: line-through');
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  test('toggles todo completion', () => {
    render(<TodoList />);
    const todoItem = screen.getByTestId('todo-item-1');

    // Toggle to completed
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    // Toggle back to not completed
    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getByTestId('delete-button-1');

    fireEvent.click(deleteButton);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });

  test('displays no todos message when list is empty', () => {
    render(<TodoList />);
    const deleteButtons = screen.getAllByText('Delete');

    // Delete all todos
    deleteButtons.forEach((button) => fireEvent.click(button));
    expect(screen.getByText('No todos yet.')).toBeInTheDocument();
  });
});