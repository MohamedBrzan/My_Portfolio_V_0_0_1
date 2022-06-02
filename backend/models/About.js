const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true, unique: true },
    img: { type: String, required: true },
    skills: {
      frontend: {
        name: {
          type: String,
          unique: true,
          default: 'Frontend skills',
          required: true,
        },
        techs: [
          {
            name: { type: String, unique: true, required: true },
            value: { type: Number, default: 0, required: true },
          },
        ],
      },
      backend: {
        name: {
          type: String,
          unique: true,
          default: 'backend techs',
          required: true,
        },
        techs: [
          {
            name: { type: String, unique: true, required: true },
            value: { type: Number, default: 0, required: true },
          },
        ],
      },
    },
    services: [
      {
        name: { type: String, unique: true, required: true },
        description: { type: String, unique: true, required: true },
      },
    ],
    devtools: [
      {
        name: { type: String, unique: true, required: true },
        img: { type: String, unique: true, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('About', AboutSchema);
