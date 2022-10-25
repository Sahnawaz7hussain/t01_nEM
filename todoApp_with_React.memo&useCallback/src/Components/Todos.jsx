import React, { useCallback, useState } from "react";
import TodoItem from "./TodoItem";

const initState = [
  {
    id: 1,
    title: "Learn React",
    status: false,
  },
  {
    id: 2,
    title: "Learn Redux",
    status: false,
  },
  {
    id: 3,
    title: "Learn Chakra",
    status: false,
  },
];

const Todos = () => {
  const [todos, setTodos] = useState(initState);
  const [title, setTitle] = useState("");
  const handleAddTodo = () => {
    if (title) {
      let payload = {
        title,
        status: false,
        id: Date.now(),
      };
      setTodos([...todos, payload]);
      setTitle("");
    }
  };
  /*
  const handleToggle = useCallback(
    (id) => {
      let newTodos = todos.map((item) => {
        return item.id === id ? { ...item, status: !item.status } : item;
      });
      setTodos(newTodos);
    },
    [todos]
  );
  
  const handleDelete = useCallback(
    (id) => {
      let newTodos = todos.filter((el) => {
        return el.id !== id;
      });
      setTodos(newTodos);
    },
    [todos]
  );
  */

  const handleToggle = useCallback((id) => {
    setTodos((pre) =>
      pre.map((item) => {
        return item.id === id ? { ...item, status: !item.status } : item;
      })
    );
  }, []);

  const handleDelete = useCallback((id) => {
    setTodos((pre) =>
      pre.filter((item) => {
        return item.id !== id;
      })
    );
  }, []);
  return (
    <div>
      <h2>Todos</h2>
      <div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      {todos.map((el) => (
        <TodoItem
          key={el.id}
          title={el.title}
          status={el.status}
          id={el.id}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default Todos;
