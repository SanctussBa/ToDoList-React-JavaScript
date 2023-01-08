import { useState, useEffect } from "react";
import TodoCard from "./TodoCard";

const getLocalStorage = () => {
  if (localStorage.getItem("list")) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

const TodoList = () => {
  const [todoList, setTodoList] = useState(getLocalStorage());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const removeItem = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const changeComplete = (id) => {
    setTodoList(
      todoList.map((item) => {
        return item.id === id && item.completed === false
          ? { ...item, completed: true }
          : item.id === id && item.completed === true
          ? { ...item, completed: false }
          : { ...item };
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todoList));
  }, [todoList]);

  let timestamp = new Date().getTime().toString();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: timestamp,
      title: title,
      description: description,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <section>
        <form onSubmit={handleSubmit} className="form">
          <label className="form--label" htmlFor="input-title">
            Title
          </label>
          <input
            id="txtTodoItemToAdd"
            name="input-title"
            type="text"
            placeholder="title here..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label
            className="form--label form--label__description"
            htmlFor="input-description"
          >
            Description
          </label>
          <textarea
            name="input-description"
            placeholder="description here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="form--button-container">
            <input id="btnAddTodo" type="submit" value="Add" />
          </div>
        </form>
      </section>
      <div className="todo-list--container" id="todoList">
        {todoList.map((item) => (
          <TodoCard
            todo={item}
            removeItem={removeItem}
            changeComplete={changeComplete}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
