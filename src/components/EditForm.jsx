import { useEffect, useState } from "react";
import useTodoStore from "../context/useTodoStore";

const EditForm = ({ todo }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [completed, setCompleted] = useState(false);
  const { updateTodo } = useTodoStore();
  const { id } = todo;

  useEffect(() => {
    if (todo) {
      setTitle(todo.title || "");
      setPriority(todo.priority || "");
      setCompleted(todo.completed || false);
    }
  }, [todo]);

  const handleUpdateTodo = (e) => {
    e.preventDefault();

    if (title.trim() === "" || priority === "") return;
    const updatedTodo = {
      id,
      title,
      priority,
      completed,
    };
    updateTodo(id, updatedTodo);
  };
  return (
    <div
      className="modal fade"
      id="editFormModal"
      tabIndex="-1"
      aria-labelledby="editFormModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="editFormModalLabel">
              {todo?.title}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form
              id="editFormModal"
              onSubmit={handleUpdateTodo}
              className="my-4 d-flex flex-column gap-2  border border-dark-subtle p-4 rounded rounded-3 mx-auto"
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
                <label htmlFor="completed">Completed</label>
                <input
                  type="checkbox"
                  name="completed"
                  id="completed"
                  className="ml-3"
                  checked={completed}
                  onChange={(e) => setCompleted(e.target.checked)}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              ❌ Cancel
            </button>
            <button
              type="submit"
              data-bs-dismiss="modal"
              className="btn btn-primary"
            >
              ✔️ Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditForm;
