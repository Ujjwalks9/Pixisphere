import express from 'express';
import { authenticate} from '../middlewares/auth.middleware.js';
import { authorize } from '../middlewares/auth.middleware.js';
import { submitInquiry } from '../controllers/inquiry.controller.js';

const router = express.Router();

router.post('/', authenticate, authorize('client'), submitInquiry);

export default router;
