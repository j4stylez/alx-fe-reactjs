// src/components/AddTodoForm.jsx
import { useState } from 'react';

function AddTodoForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
        style={{ padding: '0.5rem', width: '70%', marginRight: '0.5rem' }}
        data-testid="todo-input"
      />
      <button
        type="submit"
        style={{ padding: '0.5rem 1rem', background: '#007bff', color: 'white' }}
        data-testid="add-button"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodoForm;