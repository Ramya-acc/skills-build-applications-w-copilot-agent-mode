import { Router } from 'express';

const router = Router();

// GET /api/activities/
router.get('/', async (_req, res) => {
  res.json([]);
});

// POST /api/activities/
router.post('/', async (req, res) => {
  const payload = req.body || {};
  res.status(201).json({ id: 'activity_1', ...payload });
});

export default router;
