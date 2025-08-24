// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders TodoList component with initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
    expect(screen.getByTestId('todo-item-1')).not.toHaveStyle('text-decoration: line-through');
    expect(screen.getByTestId('todo-item-2')).toHaveStyle('text-decoration: line-through');
    expect(screen.getByTestId('todo-item-3')).not.toHaveStyle('text-decoration: line-through');
  });

  test('adds a new todo when valid input is submitted', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  test('does not add a todo when input is empty', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(addButton);

    expect(screen.queryByText('')).not.toBeInTheDocument();
    expect(screen.getAllByTestId(/todo-item-/)).toHaveLength(3); // Still 3 initial todos
  });

  test('toggles todo completion status', () => {
    render(<TodoList />);
    const todoItem = screen.getByTestId('todo-item-1');

    // Toggle to completed
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    // Toggle back to not completed
    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);
    const deleteButton = screen.getByTestId('delete-button-1');

    fireEvent.click(deleteButton);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    expect(screen.getAllByTestId(/todo-item-/)).toHaveLength(2); // 2 todos remain
  });

  test('displays no todos message when all todos are deleted', () => {
    render(<TodoList />);
    const deleteButtons = screen.getAllByText('Delete');

    deleteButtons.forEach((button) => fireEvent.click(button));
    expect(screen.getByText('No todos yet.')).toBeInTheDocument();
    expect(screen.queryAllByTestId(/todo-item-/)).toHaveLength(0);
  });

  test('renders AddTodoForm with input and button', () => {
    render(<TodoList />);
    expect(screen.getByTestId('todo-input')).toBeInTheDocument();
    expect(screen.getByTestId('add-button')).toHaveTextContent('Add Todo');
    expect(screen.getByTestId('todo-input')).toHaveAttribute('placeholder', 'Add a new todo');
  });
});
