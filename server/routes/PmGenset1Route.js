import express from 'express';
import { getAllPmGenset1Data } from '../controllers/PmGenset1Controller.js';

const router = express.Router();

// Define the route for getting all data from pmgenset1
router.get('/pmgenset1', getAllPmGenset1Data);

export default router;