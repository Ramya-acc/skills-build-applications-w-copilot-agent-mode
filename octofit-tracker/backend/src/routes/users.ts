import { Router } from 'express';

const router = Router();

// GET /api/users/
router.get('/', async (_req, res) => {
  // Placeholder: return empty list
  res.json([]);
});

// POST /api/users/
router.post('/', async (req, res) => {
  // Placeholder: echo back payload with an id
  const payload = req.body || {};
  res.status(201).json({ id: 'user_1', ...payload });
});

export default router;
