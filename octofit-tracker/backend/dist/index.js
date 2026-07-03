import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import usersRouter from './routes/users.js';
import teamsRouter from './routes/teams.js';
import activitiesRouter from './routes/activities.js';
import leaderboardRouter from './routes/leaderboard.js';
import workoutsRouter from './routes/workouts.js';
dotenv.config();
const app = express();
app.use(express.json());
// Codespaces-aware CORS and host handling
const FRONTEND_LOCAL = process.env.FRONTEND_URL || 'http://localhost:5173';
const CODESPACE = process.env.CODESPACE_NAME;
const PORT = Number(process.env.PORT) || 8000;
const allowedOrigins = [FRONTEND_LOCAL];
if (CODESPACE) {
    // Codespaces preview URL formats. Include both githubpreview.dev and app.github.dev
    allowedOrigins.push(`https://${CODESPACE}-${PORT}.githubpreview.dev`);
    allowedOrigins.push(`https://${CODESPACE}-${PORT}.app.github.dev`);
}
app.use(cors({
    origin: (origin, callback) => {
        // allow requests with no origin (mobile apps, curl)
        if (!origin)
            return callback(null, true);
        if (allowedOrigins.indexOf(origin) !== -1) {
            return callback(null, true);
        }
        return callback(new Error('CORS policy: Origin not allowed'));
    },
}));
// Mount API routes under /api
app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);
app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
});
const HOST = CODESPACE ? '0.0.0.0' : '127.0.0.1';
app.listen(PORT, HOST, () => {
    console.log(`OctoFit backend listening on ${HOST}:${PORT}`);
    if (CODESPACE) {
        console.log(`Codespaces preview URLs:`);
        console.log(`  https://${CODESPACE}-${PORT}.githubpreview.dev`);
        console.log(`  https://${CODESPACE}-${PORT}.app.github.dev`);
    }
});
export default app;
