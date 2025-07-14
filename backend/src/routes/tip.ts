import { Router } from 'express';
import { createTip, getTipsForReview } from '../controllers/tipController';
import { authenticate } from '../middleware/auth';

const router = Router();

router.post('/', authenticate, createTip);
router.get('/:reviewId', getTipsForReview);

export default router; 