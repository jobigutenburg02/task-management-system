import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/tasks';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchTasks = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch tasks');
  }
};

export const createTask = async (taskData) => {
  try {
    const response = await api.post('/', taskData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to add task');
  }
};

export const updateTask = async (id, taskData) => {
  try {
    const response = await api.put(`/${id}`, taskData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to update task');
  }
};

export const deleteTask = async (id) => {
  try {
    await api.delete(`/${id}`);
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to delete task');
  }
};