import { configureStore } from '@reduxjs/toolkit';
import AboutSlice from './apis/AboutSlice';
import ServiceSlice from './apis/ServiceSlice';
import HomeReducer from './reducers/HomeReducer';
import AboutReducer from './reducers/AboutReducer';
import PortfolioSlice from './apis/PortfolioSlice';
import ContactSlice from './apis/ContactSlice';
import ExperienceSlice from './apis/ExperienceSlice';
import FrontendTechsSlice from './apis/FrontendTechsSlice';

export default configureStore({
  reducer: {
    HomeReducer,
    AboutReducer,
    [AboutSlice.reducerPath]: AboutSlice.reducer,
    [ServiceSlice.reducerPath]: ServiceSlice.reducer,
    [FrontendTechsSlice.reducerPath]: FrontendTechsSlice.reducer,
    [PortfolioSlice.reducerPath]: PortfolioSlice.reducer,
    [ContactSlice.reducerPath]: ContactSlice.reducer,
    [ExperienceSlice.reducerPath]: ExperienceSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      AboutSlice.middleware,
      ServiceSlice.middleware,
      FrontendTechsSlice.middleware,
      PortfolioSlice.middleware,
      ContactSlice.middleware,
      ExperienceSlice.middleware
    ),
});
