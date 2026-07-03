import mongoose, { Schema } from 'mongoose';
const LeaderboardSchema = new Schema({
    team: { type: Schema.Types.ObjectId, ref: 'Team' },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    points: { type: Number, required: true, default: 0 },
    rank: { type: Number },
});
export default mongoose.model('Leaderboard', LeaderboardSchema);
