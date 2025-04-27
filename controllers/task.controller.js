// import * as taskService from '../services/task.service.js';
import * as taskService from '../service/task.service.js';


// Add Task
export const addTask = async (req, res) => {
  try {
    const { userId, title, description, status } = req.body;
    const task = await taskService.addTask(userId, title, description, status);
    console.log(task);
    return res.status(201).json({ message: 'Task added successfully', task });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error adding task' });
  }
};

// Delete Task
export const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const userId = req.body.userId; // Assume userId is passed in the body or get from auth
    const task = await taskService.deleteTask(taskId, userId);
    return res.status(200).json({ message: 'Task deleted successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error deleting task' });
  }
};

// Update Task
export const updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const { userId, title, description, status } = req.body;
    const task = await taskService.updateTask(taskId, userId, title, description, status);
    return res.status(200).json({ message: 'Task updated successfully', task });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error updating task' });
  }
};
