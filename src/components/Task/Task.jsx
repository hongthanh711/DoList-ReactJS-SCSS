import React from "react";
import PropTypes from "prop-types";

export default function Task({ ticket, handleDeleteTask, task, tollgeDone }) {
  Task.propTypes = {
    ticket: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      stask: PropTypes.arrayOf({
        id: PropTypes.number,
        name: PropTypes.string,
        done: PropTypes.bool,
      }),
    }).isRequired,
    handleDeleteTask: PropTypes.func.isRequired,
    task: PropTypes.arrayOf({
      id: PropTypes.number,
      name: PropTypes.string,
      done: PropTypes.bool,
    }).isRequired,
    tollgeDone: PropTypes.func.isRequired,
  };
  return (
    <div className="task" key={task.id}>
      <div className="task-item">
        <input
          role="button"
          onChange={(e) => {
            tollgeDone(e, ticket.id, task.id);
          }}
          type="checkbox"
          checked={task.done}
        />
        <div className={`task-title ${task.done && "task-title-done"}`}>
          {task.name}
        </div>
      </div>
      <button
        type="button"
        onClick={() => {
          handleDeleteTask(ticket.id, task.id);
        }}
        className="delete-task"
      >
        🗑️
      </button>
    </div>
  );
}
