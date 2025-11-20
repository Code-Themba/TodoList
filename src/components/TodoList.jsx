import Todo from "./Todo";
import useTodoStore from "../context/useTodoStore";

const TodoList = () => {
  const todos = useTodoStore((state) => state.getTodos());

  return (
    <>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </>
  );
};

export default TodoList;
