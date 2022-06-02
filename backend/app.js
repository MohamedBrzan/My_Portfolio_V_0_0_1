const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const UserRoutes = require('./routes/UserRoutes');
const AboutRoutes = require('./routes/AboutRoutes');
const PortfolioRoutes = require('./routes/PortfolioRoutes');
const ExperienceRoutes = require('./routes/ExperienceRoutes');
const ContactRoutes = require('./routes/ContactRoutes');
const HomeViewRoutes = require('./routes/HomeViewRoutes');
const ErrorHandler = require('./middleWares/ErrorHandler');
const ErrorResponse = require('./middleWares/ErrorResponse');

dotenv.config({ path: 'config/.env' });
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));

//Routes
app.use('/api/v1/', HomeViewRoutes);
app.use('/api/v1/user', UserRoutes);
app.use('/api/v1/about', AboutRoutes);
app.use('/api/v1/portfolio', PortfolioRoutes);
app.use('/api/v1/experience', ExperienceRoutes);
app.use('/api/v1/contact', ContactRoutes);

// MiddleWare Error Message
app.use((err, req, res, next) => {
  return ErrorResponse(err, req, res, next);
});

module.exports = app;
