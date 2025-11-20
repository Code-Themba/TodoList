import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import useTodoStore from "./context/useTodoStore";

const App = () => {
  let todos = useTodoStore((state) => state.getTodos());

  return (
    <div className="container w-full">
      <Navbar />
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
