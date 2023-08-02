import express from 'express';
import { getAllKlarifikasiData } from '../controllers/KlarifikasiController.js';

const router = express.Router();

// Define the route for getting all data from klarifikasi
router.get('/klarifikasi', getAllKlarifikasiData);

export default router;