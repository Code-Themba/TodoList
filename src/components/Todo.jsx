import useTodoStore from "../context/useTodoStore";
import EditForm from "./EditForm";

const Todo = ({ todo }) => {
  const { id, title, priority, completed } = todo;
  const { deleteTodo, updateTodo } = useTodoStore();
  const checkPriority = (priority) => {
    if (priority === "high" && !completed) {
      return "🚨";
    } else if (priority === "medium" && !completed) {
      return "🟡";
    } else if (priority === "low" && !completed) {
      return "🟢";
    } else {
      return "✅";
    }
  };

  const updateTodoCompleted = (id) => {
    return updateTodo(id, { completed: !completed });
  };
  return (
    <div
      className="d-flex justify-content-between align-items-center border border-dark-subtle p-4 rounded rounded-3 mx-auto col-md-10 col-10 mb-4 h-auto"
      onDoubleClick={() => updateTodoCompleted(id, !completed)}
    >
      <div className="flex-2 align-items-center justify-content-center d-flex gap-4">
        <p>{checkPriority(priority)}</p>
        {completed ? (
          <p className="fw-semibold fs-5 text-center text-decoration-line-through">
            {title}
          </p>
        ) : (
          <p className="fw-semibold fs-5 text-center">{title}</p>
        )}
      </div>
      <div className="flex-1 d-flex gap-2 ">
        <button
          type="button"
          className="btn btn-warning mh-100 text-white"
          disabled={completed}
          data-bs-toggle="modal"
          data-bs-target="#editFormModal"
        >
          Edit
        </button>
        <button
          className="btn btn-danger mh-100 text-white"
          onClick={() => deleteTodo(id)}
        >
          Delete
        </button>
      </div>
      <EditForm todo={todo} />
    </div>
  );
};

export default Todo;
