import React from "react";
import useTodoStore from "../context/useTodoStore";

const TodoForm = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [priority, setPriority] = React.useState("");
  const [completed, setCompleted] = React.useState(false);
  const { addTodo } = useTodoStore();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (title.trim() === "" || priority === "") return;
    const newTodo = {
      title,
      description,
      priority,
      completed,
    };
    console.log(newTodo);
    addTodo(newTodo);
    setTitle("");
    setDescription("");
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
      <div className="mb-4 col-md-12">
        <textarea
          className="form-control border border-dark-subtle"
          placeholder="Todo details(optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={10}
          width="100%"
        ></textarea>
      </div>
      <div className="col-md-12">
        <select
          className="form-select border border-dark-subtle"
          aria-label="Default select example"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option defaultValue="Set Priority">Set Priority</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
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
