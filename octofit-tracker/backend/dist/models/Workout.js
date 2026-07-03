import mongoose, { Schema } from 'mongoose';
const WorkoutSchema = new Schema({
    title: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    team: { type: Schema.Types.ObjectId, ref: 'Team' },
    durationMinutes: { type: Number, required: true },
    date: { type: Date, default: () => new Date() },
});
export default mongoose.model('Workout', WorkoutSchema);
