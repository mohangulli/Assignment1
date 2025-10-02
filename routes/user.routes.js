import express from "express";
import { deleteUserByUsername } from "../controllers/user.controller.js"; 
import protectedRoute from "../middlewares/protectedRoute.js"; 
import isAdmin from "../middlewares/isAdmin.js"; 

const router = express.Router();

// Admin can delete user by username
router.delete("/delete/username/:username", protectedRoute, isAdmin, deleteUserByUsername);


//
export default router;
