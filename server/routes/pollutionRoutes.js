import express from 'express';
import PollutionReport from '../models/PollutionReport.js';

const router = express.Router();

// POST new pollution report
router.post('/', async (req, res) => {
  try {
    const newReport = new PollutionReport(req.body);
    const savedReport = await newReport.save();
    res.status(201).json(savedReport);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET all pollution reports
router.get('/', async (req, res) => {
  try {
    const reports = await PollutionReport.find();
    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
