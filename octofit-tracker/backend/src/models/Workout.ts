import mongoose, { Document, Schema } from 'mongoose';

export interface IWorkout extends Document {
  title: string;
  user?: mongoose.Types.ObjectId;
  team?: mongoose.Types.ObjectId;
  durationMinutes: number;
  date: Date;
}

const WorkoutSchema = new Schema<IWorkout>({
  title: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  team: { type: Schema.Types.ObjectId, ref: 'Team' },
  durationMinutes: { type: Number, required: true },
  date: { type: Date, default: () => new Date() },
});

export default mongoose.model<IWorkout>('Workout', WorkoutSchema);
