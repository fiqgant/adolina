import express from 'express';
import { getAllBoiler1Data } from '../controllers/Boiler1Controller.js';

const router = express.Router();

// Define the route for getting all data from boiler1
router.get('/boiler1', getAllBoiler1Data);

export default router;