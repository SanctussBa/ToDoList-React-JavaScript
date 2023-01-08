import "./App.css";
import React from "react";
import TodoList from "./components/TodoList";
import logo from "./youcan.png";

function App() {
  return (
    <>
      <header>
        <img className="logo" src={logo} alt="You Can Logo" />
        <h1 className="header--text">You Can DO List! </h1>
      </header>
      <main>
        <TodoList />
      </main>
    </>
  );
}

export default App;
