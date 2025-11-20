import React from "react";
import { v4 as uuidv4 } from "uuid";
import useTodoStore from "../context/useTodoStore";

const TodoForm = () => {
  const [title, setTitle] = React.useState("");
  const [priority, setPriority] = React.useState("");
  const { addTodo } = useTodoStore();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (title.trim() === "" || priority === "") return;
    const newTodo = {
      uuid: uuidv4(),
      title,
      priority,
      completed: false,
    };
    console.log(newTodo);
    addTodo(newTodo);
    setTitle("");
    setPriority("");
  };
  return (
    <form
      onSubmit={handleAddTodo}
      className="my-4 d-flex flex-column gap-2 col-md-8 col-12 border border-dark-subtle p-4 rounded rounded-3 mx-auto"
    >
      <div className="mb-6 col-md-12">
        <input
          className="form-control border border-dark-subtle"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new todo"
        />
      </div>
      <div className="col-md-12 d-inline-flex gap-3 my-3 px-2">
        <span className="d-flex align-items-center gap-1">
          <label htmlFor="low">Low</label>
          <input
            type="radio"
            name="priority"
            id="low"
            onChange={(e) => setPriority(e.target.checked)}
          />
        </span>
        <span className="d-flex align-items-center gap-1">
          <label htmlFor="medium">Medium</label>
          <input
            type="radio"
            name="priority"
            id="medium"
            onChange={(e) => setPriority(e.target.checked)}
          />
        </span>
        <span className="d-flex align-items-center gap-1">
          <label htmlFor="high">High</label>
          <input
            type="radio"
            name="priority"
            id="high"
            onChange={(e) => setPriority(e.target.checked)}
          />
        </span>
      </div>
      <div className="col-md-12">
        <button type="submit" className="btn btn-primary">
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
