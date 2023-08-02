import express from 'express';
import { getAllMupsteamData } from '../controllers/MupsteamController.js';

const router = express.Router();

// Define the route for getting all data from mupsteam
router.get('/mupsteam', getAllMupsteamData);

export default router;