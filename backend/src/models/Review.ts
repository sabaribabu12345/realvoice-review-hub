import mongoose, { Document, Schema } from 'mongoose';

export interface IReview extends Document {
  title: string;
  mediaUrl: string;
  tags: string[];
  transcription: string;
  userId: mongoose.Types.ObjectId;
  tips: mongoose.Types.ObjectId[];
  viewType: 'paid' | 'free';
  price: number;
  purchasedBy: mongoose.Types.ObjectId[];
}

const ReviewSchema = new Schema<IReview>({
  title: { type: String, required: true },
  mediaUrl: { type: String, required: true },
  tags: [{ type: String }],
  transcription: { type: String },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  tips: [{ type: Schema.Types.ObjectId, ref: 'Tip' }],
  viewType: { type: String, enum: ['paid', 'free'], default: 'free' },
  price: { type: Number, default: 0 },
  purchasedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

export default mongoose.model<IReview>('Review', ReviewSchema); 