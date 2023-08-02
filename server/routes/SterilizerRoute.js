import express from 'express';
import { getAllSterilizerData } from '../controllers/SterilizerController.js';

const router = express.Router();

// Define the route for getting all data from sterilizer
router.get('/sterilizer', getAllSterilizerData);

export default router;