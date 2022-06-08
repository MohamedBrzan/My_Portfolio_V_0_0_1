const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema(
  {
    programming: {
      programmingTitle: {
        type: String,
        default: 'Programming Experience',
        required: true,
      },

      experience: [
        {
          image: { type: String, required: true },
          title: { type: String, required: true },
          experience: { type: String, required: true },
        },
      ],
    },
    other: {
      otherTitle: { type: String, default: 'Other Experience', required: true },

      experience: [
        {
          image: { type: String, required: true },
          title: { type: String, required: true },
          experience: { type: String, required: true },
        },
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Experience', ExperienceSchema);
