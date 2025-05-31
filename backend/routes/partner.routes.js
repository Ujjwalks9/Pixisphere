import express from 'express';
import { authenticate} from '../middlewares/auth.middleware.js';
import { authorize } from '../middlewares/auth.middleware.js';
import {
  addPortfolio,
  updatePortfolio,
  deletePortfolioItem
} from '../controllers/portfolio.controller.js';

const router = express.Router();

router.post('/portfolio', authenticate, authorize('partner'), addPortfolio);
router.put('/portfolio', authenticate, authorize('partner'), updatePortfolio);
router.delete('/portfolio/:itemId', authenticate, authorize('partner'), deletePortfolioItem);

export default router;
