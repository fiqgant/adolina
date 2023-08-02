import express from 'express';
import { getAllPmTurbin3Data } from '../controllers/PmTurbin3Controller.js';

const router = express.Router();

// Define the route for getting all data from pmturbin3
router.get('/pmturbin3', getAllPmTurbin3Data);

export default router;