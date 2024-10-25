import React, { useState, useEffect } from 'react';
import './App.css';
import {createTodo, getAllTodo, removeTodo} from './util';

const App = () => {
  const [todo, setTodo] = useState({
    description: '',
  });
  const [todoList, setTodoList] = useState();
  const [error, setError] = useState();

// Create a handleSubmit() function to add new to-do list
const handleSubmit = async (e) => {
    e.preventDefault();
    setError();
    const newTodo = new FormData(e.currentTarget);
    newTodo.set("description", todo.description);
    newTodo.set("created_at", `${new Date().toISOString()}`);
    const response = await createTodo(newTodo);
    if (response.error) {
        setError(response.error.name);
    }
    setTodo({description: ""});
    await fetchTodos();
};

// Create a fetchTodos() function to update the View from Model using getTodos() function from Controller
const fetchTodos = async () => {
    const response = await getAllTodo();
    if (response.error) {
        setError(response.error.name);
    }
    setTodoList(response.data);
};

// Create a handleDelete() function to remove to-do list with matching id
const handleDelete = async (id) => {
    const response = await removeTodo(id);
    if (response.error) {
        setError(response.error.name);
    }
    await fetchTodos();
}

  useEffect(() => {
    // Initialize todoList
  }, []);
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={todo.description}
          onChange={(event) =>
            setTodo({ ...todo, description: event.target.value })
          }
        ></input>
        <button type="submit">Add Todo</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ol>
        {todoList?.map((todoItem) => (
          <li
            key={todoItem.todo_id}
            onClick={() => {
              handleDelete(todoItem.todo_id);
            }}
          >
            {todoItem.description}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default App;
