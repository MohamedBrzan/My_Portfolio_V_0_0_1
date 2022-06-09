import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import './index.css';
import store from './store/store';
import { IsLogged } from './auth/log/IsLogged';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IsLogged>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </IsLogged>
);
