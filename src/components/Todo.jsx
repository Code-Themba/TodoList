import React from "react";

const Todo = ({ todo }) => {
  const { title, priority, completed } = todo;
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
  return (
    <div className="d-flex justify-content-between align-items-center border border-dark-subtle p-4 rounded rounded-3 mx-auto col-md-10 col-10 mb-4 h-auto">
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
          className="btn btn-warning mh-100 text-white"
          disabled={completed}
        >
          Edit
        </button>
        <button className="btn btn-danger mh-100 text-white">Delete</button>
      </div>
    </div>
  );
};

export default Todo;
