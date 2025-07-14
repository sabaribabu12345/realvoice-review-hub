import dotenv from 'dotenv';
dotenv.config();
import { Request, Response } from 'express';
import Tip from '../models/Tip';
import Review from '../models/Review';
import User from '../models/User';
import { AuthRequest } from '../middleware/auth';

const { JWT_SECRET, MONGODB_URI } = process.env;

export const createTip = async (req: AuthRequest, res: Response) => {
  try {
    const { amount, reviewId, toUserId } = req.body;
    const fromUserId = req.userId; // set by auth middleware
    if (!amount || !reviewId || !toUserId) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    // Mock tip creation (no payment)
    const tip = await Tip.create({
      amount,
      reviewId,
      fromUserId,
      toUserId,
      timestamp: new Date(),
    });
    await Review.findByIdAndUpdate(reviewId, { $push: { tips: tip._id } });
    await User.findByIdAndUpdate(toUserId, { $inc: { earnings: amount } });
    return res.status(201).json({ message: 'Tip successful', tip });
  } catch (err) {
    return res.status(500).json({ message: 'Tip failed', error: err });
  }
};

export const getTipsForReview = async (req: Request, res: Response) => {
  try {
    const { reviewId } = req.params;
    const tips = await Tip.find({ reviewId }).populate('fromUserId', 'name').populate('toUserId', 'name');
    return res.json({ tips });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to fetch tips', error: err });
  }
}; 