import { User, Verification } from '../models/postgres/index.js';

export const getPendingVerifications = async (req, res) => {
  const pending = await Verification.findAll({ where: { status: 'pending' }, include: User });
  res.json(pending);
};

export const verifyPartner = async (req, res) => {
  const { id } = req.params;
  const { status, comment } = req.body;

  const verification = await Verification.findOne({ where: { partnerId: id } });
  if (!verification) return res.status(404).json({ error: 'Verification not found' });

  verification.status = status;
  verification.comment = comment;
  await verification.save();

  res.json(verification);
};

export const getStats = async (req, res) => {
  const clients = await User.count({ where: { role: 'client' } });
  const partners = await User.count({ where: { role: 'partner' } });
  const pending = await Verification.count({ where: { status: 'pending' } });

  res.json({ clients, partners, pendingVerifications: pending });
};
