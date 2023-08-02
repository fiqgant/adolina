import express from "express";
import {
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUsers,
    updateUserProfile
} from "../controllers/UserController.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/users', verifyUser, adminOnly, getUsers);
router.get('/users/:id', verifyUser, getUserById);
router.post('/users', verifyUser, adminOnly, createUser);
router.patch('/users/:id', verifyUser, updateUser);
router.patch("/users/profile", verifyUser, updateUserProfile); 
router.delete('/users/:id',verifyUser, adminOnly, deleteUser);

export default router;