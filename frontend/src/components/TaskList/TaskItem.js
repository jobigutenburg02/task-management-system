import React from 'react';
import './TaskItem.css';

function TaskItem({ task, onEdit, onDelete }) {
  return (
    <li className="task-item">
      <div className="task-content">
        <h3>{task.name}</h3>
        <p>{task.description}</p>
      </div>
      <div className="task-actions">
        <button 
          className="edit-btn"
          onClick={() => onEdit(task)}
        >
          Edit
        </button>
        <button 
          className="delete-btn"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;