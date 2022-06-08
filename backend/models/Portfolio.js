const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema(
  {
    title: { type: String, default: 'All Projects', required: true },

    frontend: {
      title: {
        type: String,
        default: 'Frontend Designs',
        required: true,
      },
      projects: [
        {
          image: { type: String, required: true, unique: true },
          title: { type: String, required: true, unique: true },
          description: { type: String, required: true, unique: true },
          link: { type: String, required: true, unique: true },
        },
      ],
    },
    backend: {
      title: { type: String, default: 'Backend Apis', required: true },
      projects: [
        {
          image: { type: String, required: true, unique: true },
          title: { type: String, required: true, unique: true },
          description: { type: String, required: true, unique: true },
          link: { type: String, required: true, unique: true },
        },
      ],
    },
    fullStack: {
      title: { type: String, default: 'MERN Stack Apps', required: true },
      projects: [
        {
          image: { type: String, required: true, unique: true },
          title: { type: String, required: true, unique: true },
          description: { type: String, required: true, unique: true },
          link: { type: String, required: true, unique: true },
        },
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Portfolio', PortfolioSchema);
