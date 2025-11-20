import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="container w-full">
      <Navbar />
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
