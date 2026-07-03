import { Router } from 'express';
import Leaderboard from '../models/Leaderboard.js';
const router = Router();
// GET /api/leaderboard/
router.get('/', async (_req, res) => {
    const entries = await Leaderboard.find()
        .populate('user', 'name')
        .populate('team', 'name')
        .sort({ points: -1 });
    res.json(entries);
});
export default router;
