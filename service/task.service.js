import Task from '../models/task.model.js';
import User from '../models/user.model.js';

// Add Task
export const addTask = async (userId, title, description, status) => {
  // Check if the user exists
  const user = await User.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }
  //
  const newTask = new Task({
    title,
    description,
    status,
    userId, // Reference to the user
  });

  await newTask.save();
  return newTask;
};

// Delete Task
export const deleteTask = async (taskId, userId) => {
  const task = await Task.findOneAndDelete({ _id: taskId, userId: userId });
  if (!task) {
    throw new Error('Task not found or you do not have permission to delete this task');
  }
  return task;
};

// Update Task
export const updateTask = async (taskId, userId, title, description, status) => {
  const task = await Task.findOne({ _id: taskId, userId: userId });
  if (!task) {
    throw new Error('Task not found or you do not have permission to update this task');
  }

  task.title = title || task.title;
  task.description = description || task.description;
  task.status = status || task.status;
  task.updatedAt = Date.now();

  await task.save();
  return task;
};
