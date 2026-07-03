import { Router } from 'express';
import Workout from '../models/Workout.js';
const router = Router();
// GET /api/workouts/
router.get('/', async (_req, res) => {
    const workouts = await Workout.find().populate('user', 'name');
    res.json(workouts);
});
// POST /api/workouts/
router.post('/', async (req, res) => {
    const payload = req.body || {};
    const created = await Workout.create(payload);
    res.status(201).json(created);
});
export default router;
