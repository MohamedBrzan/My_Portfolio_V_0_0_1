import { configureStore } from '@reduxjs/toolkit';
import AboutSlice from './apis/AboutSlice';
import ServiceSlice from './apis/ServiceSlice';
import HomeReducer from './reducers/HomeReducer';
import AboutReducer from './reducers/AboutReducer';
import PortfolioSlice from './apis/PortfolioSlice';
import ContactSlice from './apis/ContactSlice';
import ExperienceSlice from './apis/ExperienceSlice';
import FrontendTechSlice from './apis/FrontendTechSlice';
import HomeViewSlice from './apis/HomeViewSlice';

export default configureStore({
  reducer: {
    HomeReducer,
    AboutReducer,
    [HomeViewSlice.reducerPath]: HomeViewSlice.reducer,
    [AboutSlice.reducerPath]: AboutSlice.reducer,
    [ServiceSlice.reducerPath]: ServiceSlice.reducer,
    [FrontendTechSlice.reducerPath]: FrontendTechSlice.reducer,
    [PortfolioSlice.reducerPath]: PortfolioSlice.reducer,
    [ContactSlice.reducerPath]: ContactSlice.reducer,
    [ExperienceSlice.reducerPath]: ExperienceSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      HomeViewSlice.middleware,
      AboutSlice.middleware,
      ServiceSlice.middleware,
      FrontendTechSlice.middleware,
      PortfolioSlice.middleware,
      ContactSlice.middleware,
      ExperienceSlice.middleware
    ),
});
