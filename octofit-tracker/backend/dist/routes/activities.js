import { Router } from 'express';
import Activity from '../models/Activity.js';
const router = Router();
// GET /api/activities/
router.get('/', async (_req, res) => {
    const activities = await Activity.find().populate('user', 'name email');
    res.json(activities);
});
// POST /api/activities/
router.post('/', async (req, res) => {
    const payload = req.body || {};
    const created = await Activity.create(payload);
    res.status(201).json(created);
});
export default router;
