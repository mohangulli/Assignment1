import mongoose from 'mongoose';

// Task Schema
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    //
  },
  status: {
    type: String,
    enum: ['1', '2', '3','4','5'],
    default: '1',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
