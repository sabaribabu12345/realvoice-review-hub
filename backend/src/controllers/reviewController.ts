import dotenv from 'dotenv';
dotenv.config();
import { Request, Response } from 'express';
import Review from '../models/Review';
import User from '../models/User';
import { AuthRequest } from '../middleware/auth';

const { JWT_SECRET, MONGODB_URI } = process.env;

// Mock Whisper transcription
const mockTranscribe = async (mediaUrl: string): Promise<string> => {
  return `Transcription for ${mediaUrl}`;
};

export const uploadReview = async (req: AuthRequest, res: Response) => {
  try {
    const { title, tags } = req.body;
    const userId = req.userId; // set by auth middleware
    const file = req.file;
    if (!title || !tags || !file) {
      return res.status(400).json({ message: 'Title, tags, and media file are required' });
    }
    const mediaUrl = `/uploads/${file.filename}`;
    const transcription = await mockTranscribe(mediaUrl);
    const review = await Review.create({
      title,
      mediaUrl,
      tags: Array.isArray(tags) ? tags : tags.split(','),
      transcription,
      userId,
      tips: [],
    });
    await User.findByIdAndUpdate(userId, { $push: { reviews: review._id } });
    return res.status(201).json({ message: 'Review uploaded', review });
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err });
  }
};

export const getReviews = async (req: Request, res: Response) => {
  try {
    const reviews = await Review.find().populate('userId', 'name').populate('tips');
    return res.json({ reviews });
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err });
  }
};

export const searchReviews = async (req: AuthRequest, res: Response) => {
  try {
    const { q } = req.query;
    if (!q) return res.status(400).json({ message: 'Query required' });
    const regex = new RegExp(q as string, 'i');
    const reviews = await Review.find({
      $or: [
        { tags: regex },
        { title: regex },
        { transcription: regex },
      ],
    }).populate('userId', 'name').populate('tips');
    return res.json({ reviews });
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err });
  }
}; 