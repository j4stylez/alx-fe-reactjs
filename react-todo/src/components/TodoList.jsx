// src/components/TodoList.jsx
import { useState } from 'react';
import AddTodoForm from './AddTodoForm';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build Todo App', completed: true },
    { id: 3, text: 'Write Tests', completed: false },
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Todo List</h1>
      <AddTodoForm onAdd={addTodo} />
      {todos.length === 0 ? (
        <p>No todos yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.5rem',
                borderBottom: '1px solid #ddd',
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              <span
                onClick={() => toggleTodo(todo.id)}
                style={{ cursor: 'pointer', flexGrow: 1 }}
                data-testid={`todo-item-${todo.id}`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{ background: '#dc3545', color: 'white' }}
                data-testid={`delete-button-${todo.id}`}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;