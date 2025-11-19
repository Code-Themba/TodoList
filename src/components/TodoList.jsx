import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList }) => {
  return (
    <>
      {todoList.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </>
  );
};

export default TodoList;
