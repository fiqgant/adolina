import express from 'express';
import { getAllPressThresherData } from '../controllers/PressThresherController.js';

const router = express.Router();

// Define the route for getting all data from pressthresher
router.get('/pressthresher', getAllPressThresherData);

export default router;