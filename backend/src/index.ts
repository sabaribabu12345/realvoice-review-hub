import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import process from 'process';
import authRoutes from './routes/auth';
import reviewRoutes from './routes/review';
import tipRoutes from './routes/tip';
import { validateEnv } from './utils/validateEnv';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

validateEnv();

app.use('/api/auth', authRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/tips', tipRoutes);

// TODO: Add routes here

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => {
    console.log('MongoDB connected');
    // Start server
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err: unknown) => {
    console.error('MongoDB connection error:', err);
  }); 