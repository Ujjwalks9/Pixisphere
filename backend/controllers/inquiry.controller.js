import Inquiry from '../models/mongo/Inquiry.js';
import { matchPartners } from '../services/leadMatch.service.js';

export const submitInquiry = async (req, res) => {
  const partners = await matchPartners(req.body);

  const inquiry = await Inquiry.create({
    ...req.body,
    clientId: req.user.id,
    assignedPartners: partners
  });

  res.status(201).json(inquiry);
};
