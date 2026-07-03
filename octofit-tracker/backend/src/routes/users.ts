import { Router } from 'express';
import User from '../models/User.js';

const router = Router();

// GET /api/users/
router.get('/', async (_req, res) => {
  const users = await User.find().populate('team', 'name');
  res.json(users);
});

// POST /api/users/
router.post('/', async (req, res) => {
  const payload = req.body || {};
  const created = await User.create(payload);
  res.status(201).json(created);
});

export default router;
