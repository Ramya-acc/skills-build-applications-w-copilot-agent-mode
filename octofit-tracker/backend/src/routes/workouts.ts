import { Router } from 'express';

const router = Router();

// GET /api/workouts/
router.get('/', async (_req, res) => {
  res.json([]);
});

// POST /api/workouts/
router.post('/', async (req, res) => {
  const payload = req.body || {};
  res.status(201).json({ id: 'workout_1', ...payload });
});

export default router;
