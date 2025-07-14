import { Router } from 'express';
import multer from 'multer';
import { uploadReview, getReviews, searchReviews } from '../controllers/reviewController';
import { authenticate } from '../middleware/auth';

const router = Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', authenticate, upload.single('media'), uploadReview);
router.get('/', getReviews);
router.get('/search', searchReviews);

export default router; 