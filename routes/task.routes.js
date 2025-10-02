import express from 'express';
import * as taskController from '../controllers/task.controller.js';

const router = express.Router();

// Add a Task
router.post('/tasks', taskController.addTask);

// Delete a Task
router.delete('/tasks/:id', taskController.deleteTask);
// Update a Task
router.put('/tasks/:id', taskController.updateTask);

export default router;
