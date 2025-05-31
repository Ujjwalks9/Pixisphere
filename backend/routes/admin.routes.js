import express from 'express';
import { authenticate} from '../middlewares/auth.middleware.js';
import { authorize } from '../middlewares/auth.middleware.js';
import {
  getPendingVerifications,
  verifyPartner,
  getStats
} from '../controllers/admin.controller.js';

const router = express.Router();

router.get('/verifications', authenticate, authorize('admin'), getPendingVerifications);
router.put('/verify/:id', authenticate, authorize('admin'), verifyPartner);
router.get('/stats', authenticate, authorize('admin'), getStats);

export default router;
