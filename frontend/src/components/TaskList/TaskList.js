import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

function TaskList({ tasks, isLoading, onEdit, onDelete }) {
  if (isLoading) {
    return (
      <div className="task-list">
        <h2>Task List</h2>
        <p>Loading tasks...</p>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="task-list">
        <h2>Task List</h2>
        <p>No tasks found.</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onEdit={onEdit} 
            onDelete={onDelete} 
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;