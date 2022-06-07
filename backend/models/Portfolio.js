const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema(
  {
    image: { type: String, required: true, unique: true },
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true, unique: true },
    link: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Portfolio', PortfolioSchema);
