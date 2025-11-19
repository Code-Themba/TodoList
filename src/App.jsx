import { useState } from "react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

const App = () => {
  const todos = [
    {
      title: "Finish Project Proposal",
      description:
        "Complete the draft for the quarterly project proposal and send it for review.",
      priority: "high",
      completed: false,
    },
    {
      title: "Grocery Shopping",
      description:
        "Buy groceries for the week, including fruits, vegetables, and snacks.",
      priority: "medium",
      completed: false,
    },
    {
      title: "Schedule Dentist Appointment",
      description: "Call the dental clinic to schedule a routine check-up.",
      priority: "low",
      completed: true,
    },
    {
      title: "Plan Weekend Trip",
      description: "Research and outline a short weekend getaway itinerary.",
      priority: "medium",
      completed: false,
    },
    {
      title: "Organize Workspace",
      description: "Declutter and organize the home office desk and shelves.",
      priority: "low",
      completed: true,
    },
  ];
  const [todoList, setTodoList] = useState(todos);

  return (
    <div className="container w-full">
      <Navbar />
      <TodoForm />
      <TodoList todoList={todoList} />
    </div>
  );
};

export default App;
