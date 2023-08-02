import express from "express";
import {
    getDevice,
    getDeviceById,
    createDevice,
    updateDevice,
    deleteDevice
} from "../controllers/DeviceController.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/device',verifyUser, getDevice);
router.get('/device/:id',verifyUser, getDeviceById);
router.post('/device',verifyUser, createDevice);
router.patch('/device/:id',verifyUser, updateDevice);
router.delete('/device/:id',verifyUser, deleteDevice);

export default router;