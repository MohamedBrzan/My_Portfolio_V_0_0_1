const mongoose = require('mongoose');

const HomeViewSchema = new mongoose.Schema(
  {
    title: {
      firstPart: { type: String, required: true, unique: true },
      coloredPart: { type: String, required: true, unique: true },
      lastPart: { type: Array, required: true, unique: true },
    },
    description: { type: String, required: true, unique: true },
    frontendImages: [
      {
        title: { type: String, required: true },
        image: { type: String, required: true },
      },
    ],
    backendImages: [
      {
        title: { type: String, required: true },
        image: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('HomeView', HomeViewSchema);
