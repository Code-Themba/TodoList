import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTodoStore = create(
  persist(
    (set, get) => ({
      todos: [
        {
          completed: false,
          priority: "medium",
          title: "Hello",
          uuid: "91ab388d-0c8f-41b4-b896-9a3a8b4dd804",
        },
        {
          id: 0,
          title: "Finish Project Proposal",
          priority: "high",
          completed: false,
        },
        {
          id: 1,
          title: "Grocery Shopping",
          priority: "medium",
          completed: false,
        },
        {
          id: 2,
          title: "Schedule Dentist Appointment",
          priority: "low",
          completed: true,
        },
        {
          id: 3,
          title: "Plan Weekend Trip",
          priority: "medium",
          completed: false,
        },
        {
          id: 4,
          title: "Organize Workspace",
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
      getTodo: (id) => {
        return get().todos.find((todo) => todo.id === id);
      },

      updateTodo: (id, propertiesToUpdate) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, ...propertiesToUpdate } : todo
          ),
        }));
      },
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
