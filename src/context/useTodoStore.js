import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTodoStore = create(
  persist(
    (set, get) => ({
      todos: [
        {
          id: 0,
          title: "Finish Project Proposal",
          description:
            "Complete the draft for the quarterly project proposal and send it for review.",
          priority: "high",
          completed: false,
        },
        {
          id: 1,
          title: "Grocery Shopping",
          description:
            "Buy groceries for the week, including fruits, vegetables, and snacks.",
          priority: "medium",
          completed: false,
        },
        {
          id: 2,
          title: "Schedule Dentist Appointment",
          description: "Call the dental clinic to schedule a routine check-up.",
          priority: "low",
          completed: true,
        },
        {
          id: 3,
          title: "Plan Weekend Trip",
          description:
            "Research and outline a short weekend getaway itinerary.",
          priority: "medium",
          completed: false,
        },
        {
          id: 4,
          title: "Organize Workspace",
          description:
            "Declutter and organize the home office desk and shelves.",
          priority: "low",
          completed: true,
        },
      ],
      addTodo: (newTodo) => {
        set((state) => ({ todos: [...state.todos, newTodo] }));
      },
      getTodos: () => {
        return get().todos;
      },
      //   updateTodo: () => {},
      deleteTodo: (id) => {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        }));
      },
    }),
    {
      name: "todoList",
    }
  )
);

export default useTodoStore;
