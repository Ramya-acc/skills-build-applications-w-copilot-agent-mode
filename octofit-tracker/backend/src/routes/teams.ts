import { Router } from 'express';

const router = Router();

// GET /api/teams/
router.get('/', async (_req, res) => {
  res.json([]);
});

// POST /api/teams/
router.post('/', async (req, res) => {
  const payload = req.body || {};
  res.status(201).json({ id: 'team_1', ...payload });
});

export default router;
