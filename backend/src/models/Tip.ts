import mongoose, { Document, Schema } from 'mongoose';

export interface ITip extends Document {
  amount: number;
  reviewId: mongoose.Types.ObjectId;
  fromUserId: mongoose.Types.ObjectId;
  toUserId: mongoose.Types.ObjectId;
  timestamp: Date;
}

const TipSchema = new Schema<ITip>({
  amount: { type: Number, required: true },
  reviewId: { type: Schema.Types.ObjectId, ref: 'Review', required: true },
  fromUserId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  toUserId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model<ITip>('Tip', TipSchema); 