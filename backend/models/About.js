const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema(
  {
    title: {
      firstPart: { type: String, required: true, unique: true },
      coloredPart: { type: String, required: true, unique: true },
      lastPart: { type: Array, required: true, unique: true },
    },
    description: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    button: {
      text: {
        type: String,
        required: true,
        unique: true,
        default: 'Download CV',
      },
      variant: {
        type: String,
        required: true,
        unique: true,
        default: 'secondary',
      },
    },

    services: [
      {
        icon: { type: String, unique: true, required: true },
        service: { type: String, unique: true, required: true },
        serviceDesc: { type: String, unique: true, required: true },
      },
    ],

    skills: {
      frontend: {
        title: {
          type: String,
          unique: true,
          default: 'Frontend skills',
          required: true,
        },
        frameworks: [
          {
            frontendFramework: { type: String, unique: true, required: true },
            frontendFrameworkProgress: {
              type: Number,
              default: 0,
              required: true,
            },
            frontendFrameworkVariant: {
              type: String,
              default: 'primary',
              required: true,
            },
          },
        ],
        techs: [
          {
            frontendTech: { type: String, unique: true, required: true },
            frontendTechProgress: { type: Number, default: 0, required: true },
            frontendTechVariant: {
              type: String,
              default: 'primary',
              required: true,
            },
          },
        ],
      },
      backend: {
        title: {
          type: String,
          unique: true,
          default: 'backend techs',
          required: true,
        },
        frameworks: [
          {
            backendFramework: { type: String, unique: true, required: true },
            backendFrameworkProgress: {
              type: Number,
              default: 0,
              required: true,
            },
            backendFrameworkVariant: {
              type: String,
              default: 'primary',
              required: true,
            },
          },
        ],
        techs: [
          {
            backendTech: { type: String, unique: true, required: true },
            backendTechProgress: { type: Number, default: 0, required: true },
            backendTechVariant: {
              type: String,
              default: 'primary',
              required: true,
            },
          },
        ],
      },
    },

    devtools: [
      {
        tool: { type: String, unique: true, required: true },
        image: { type: String, unique: true, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('About', AboutSchema);
