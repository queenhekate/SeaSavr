import express from 'express';
import PollutionReport from '../models/PollutionReport.js';
// import Pollution from '../models/pollutionModel.js';

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

// router.post('/', async (req, res) => {
//     try {
//       const { location, pollutionType, severity, photoUrl } = req.body;
//       const newReport = new Pollution({ location, pollutionType, severity, photoUrl });
//       await newReport.save();
//       res.status(201).json(newReport);
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//     }
//   });
  
//   // GET: Fetch all pollution reports
//   router.get('/', async (req, res) => {
//     try {
//       const reports = await Pollution.find();
//       res.status(200).json(reports);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   });

export default router;
