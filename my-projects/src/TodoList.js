import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo, removeToDo } from './redux/TodosSlice';

function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todosa);

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      dispatch(addToDo({ id: Date.now(), text: inputValue }));
      setInputValue('');
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeToDo(id));
  };

  return (
    <div className="todo-container">
      <h2 className="todo-heading">Todo List</h2>
      <div className="todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="todo-input"
          placeholder="Enter a new todo..."
        />
        <button onClick={handleAddTodo} className="todo-btn">
          Add Todo
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
          <div>{todo.text}</div>  
            <button onClick={() => handleRemoveTodo(todo.id)} className="remove-button">
              <span role="img" aria-label="Delete">❌</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
