import React from "react";

const TodoCard = ({ todo, removeItem, changeComplete }) => {
  return (
    <div
      className={todo.completed ? "todo--completed" : "todo--toggle-completed"}
    >
      <div className="todo--text" onClick={() => changeComplete(todo.id)}>
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
      </div>
      <div>
        <button
          className={
            todo.completed ? "todo__button--remove" : "todo__button--none"
          }
          onClick={() => removeItem(todo.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
