import { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import Error from './components/Error/Error';
import { fetchTasks, createTask, updateTask, deleteTask } from './services/api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      setIsLoading(true);
      const data = await fetchTasks();
      setTasks(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTaskSubmit = async (taskData) => {
    try {
      let updatedTask;
      if (editingTask) {
        updatedTask = await updateTask(editingTask.id, taskData);
        setTasks(tasks.map(task => task.id === editingTask.id ? updatedTask : task));
      } else {
        updatedTask = await createTask(taskData);
        setTasks([...tasks, updatedTask]);
      }
      setEditingTask(null);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleTaskDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete the task?');
    if (!confirmDelete) return;

    try {
      await deleteTask(id);
      setTasks(tasks.filter(task => task.id !== id));
      if (editingTask && editingTask.id === id) {
        setEditingTask(null);
      }
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="app">
      
      <TaskForm 
        onSubmit={handleTaskSubmit} 
        editingTask={editingTask} 
        onCancel={() => setEditingTask(null)}
      />
      
      {error && <Error message={error} />}

      <TaskList 
        tasks={tasks} 
        isLoading={isLoading} 
        onEdit={setEditingTask} 
        onDelete={handleTaskDelete} 
      />
    </div>
  );
}

export default App;