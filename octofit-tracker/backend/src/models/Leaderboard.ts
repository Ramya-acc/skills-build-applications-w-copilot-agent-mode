import mongoose, { Document, Schema } from 'mongoose';

export interface ILeaderboard extends Document {
  team?: mongoose.Types.ObjectId;
  user?: mongoose.Types.ObjectId;
  points: number;
  rank?: number;
}

const LeaderboardSchema = new Schema<ILeaderboard>({
  team: { type: Schema.Types.ObjectId, ref: 'Team' },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  points: { type: Number, required: true, default: 0 },
  rank: { type: Number },
});

export default mongoose.model<ILeaderboard>('Leaderboard', LeaderboardSchema);
