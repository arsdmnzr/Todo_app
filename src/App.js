import React, { useState } from "react";
import "./styles.css";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  const addTodo = () => {
    if (inputText.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: inputText }]);
      setInputText("");
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const updateTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <h1>My Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new todo"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.text}
            <div className="button-container">
              <button
                onClick={() => deleteTodo(todo.id)}
                className="delete-button"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  const newText = prompt("Edit Todo:", todo.text);
                  if (newText !== null) {
                    updateTodo(todo.id, newText);
                  }
                }}
                className="edit-button"
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
