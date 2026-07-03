import { Router } from 'express';
import Team from '../models/Team.js';
const router = Router();
// GET /api/teams/
router.get('/', async (_req, res) => {
    const teams = await Team.find().populate('members', 'name email');
    res.json(teams);
});
// POST /api/teams/
router.post('/', async (req, res) => {
    const payload = req.body || {};
    const created = await Team.create(payload);
    res.status(201).json(created);
});
export default router;
