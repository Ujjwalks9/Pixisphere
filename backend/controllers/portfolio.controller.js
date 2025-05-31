import Portfolio from '../models/mongo/Portfolio.js';

export const addPortfolio = async (req, res) => {
  const { imageUrl, description, index } = req.body;
  const partnerId = req.user.id;

  let portfolio = await Portfolio.findOne({ partnerId });

  if (!portfolio) {
    portfolio = new Portfolio({ partnerId, items: [] });
  }

  portfolio.items.push({ imageUrl, description, index });
  await portfolio.save();

  res.status(201).json(portfolio);
};

export const updatePortfolio = async (req, res) => {
  const { itemId, imageUrl, description, index } = req.body;
  const portfolio = await Portfolio.findOne({ partnerId: req.user.id });

  const item = portfolio.items.id(itemId);
  if (item) {
    item.imageUrl = imageUrl || item.imageUrl;
    item.description = description || item.description;
    item.index = index ?? item.index;
    await portfolio.save();
    res.json(portfolio);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
};

export const deletePortfolioItem = async (req, res) => {
  const { itemId } = req.params;
  const portfolio = await Portfolio.findOne({ partnerId: req.user.id });

  portfolio.items = portfolio.items.filter(item => item._id.toString() !== itemId);
  await portfolio.save();
  res.json({ message: 'Deleted successfully', portfolio });
};
