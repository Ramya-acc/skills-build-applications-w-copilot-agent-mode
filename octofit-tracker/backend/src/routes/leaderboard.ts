import { Router } from 'express';

const router = Router();

// GET /api/leaderboard/
router.get('/', async (_req, res) => {
  res.json({ leaderboard: [] });
});

export default router;
