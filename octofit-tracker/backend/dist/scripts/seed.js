import mongoose from 'mongoose';
import User from '../models/User.js';
import Team from '../models/Team.js';
import Activity from '../models/Activity.js';
import Workout from '../models/Workout.js';
import Leaderboard from '../models/Leaderboard.js';
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        await mongoose.connect(connectionString);
        console.log('Connected to octofit_db');
        // Clear existing collections (safe for local dev)
        await Promise.all([
            User.deleteMany({}),
            Team.deleteMany({}),
            Activity.deleteMany({}),
            Workout.deleteMany({}),
            Leaderboard.deleteMany({}),
        ]);
        // Create teams
        const teamA = await Team.create({ name: 'Red Rockets' });
        const teamB = await Team.create({ name: 'Blue Whales' });
        // Create users
        const alice = await User.create({ name: 'Alice Johnson', email: 'alice@example.com', role: 'member', team: teamA._id });
        const bob = await User.create({ name: 'Bob Smith', email: 'bob@example.com', role: 'member', team: teamA._id });
        const carol = await User.create({ name: 'Carol Lee', email: 'carol@example.com', role: 'coach', team: teamB._id });
        // Add members to teams
        teamA.members = [alice._id, bob._id];
        teamB.members = [carol._id];
        await teamA.save();
        await teamB.save();
        // Create activities
        const a1 = await Activity.create({ user: alice._id, type: 'running', durationMinutes: 30, calories: 320, date: new Date() });
        const a2 = await Activity.create({ user: bob._id, type: 'cycling', durationMinutes: 45, calories: 450, date: new Date() });
        const a3 = await Activity.create({ user: carol._id, type: 'yoga', durationMinutes: 60, calories: 200, date: new Date() });
        // Create workouts
        const w1 = await Workout.create({ title: 'Morning Run', user: alice._id, durationMinutes: 30, date: new Date() });
        const w2 = await Workout.create({ title: 'Evening Ride', user: bob._id, durationMinutes: 45, date: new Date() });
        // Create leaderboard entries
        await Leaderboard.create({ user: alice._id, points: 1200, rank: 1 });
        await Leaderboard.create({ user: bob._id, points: 900, rank: 2 });
        await Leaderboard.create({ team: teamB._id, points: 1500, rank: 1 });
        console.log('Inserted sample teams:', [teamA.name, teamB.name]);
        console.log('Inserted sample users:', [alice.email, bob.email, carol.email]);
        console.log('Inserted activities:', [a1.type, a2.type, a3.type]);
        console.log('Inserted workouts:', [w1.title, w2.title]);
        console.log('Database seeding complete');
        await mongoose.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
