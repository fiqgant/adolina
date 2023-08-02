import express from 'express';
import { getAllPmTurbin2Data } from '../controllers/PmTurbin2Controller.js';

const router = express.Router();

// Define the route for getting all data from pmturbin2
router.get('/pmturbin2', getAllPmTurbin2Data);

export default router;