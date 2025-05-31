import mongoose from 'mongoose';

const PortfolioSchema = new mongoose.Schema({
  partnerId: String,
  items: [{
    imageUrl: String,
    description: String,
    index: Number
  }]
}, { timestamps: true });

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);
export default Portfolio;
