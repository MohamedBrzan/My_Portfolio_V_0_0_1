const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    experience: [
      {
        image: { type: String, required: true },
        experience: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Experience', ExperienceSchema);
