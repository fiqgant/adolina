import express from 'express';
import { getAllBoiler2Data } from '../controllers/Boiler2Controller.js';

const router = express.Router();

// Define the route for getting all data from boiler2
router.get('/boiler2', getAllBoiler2Data);

export default router;