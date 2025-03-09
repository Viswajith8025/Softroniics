import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FitnessComponent from './Fitness';
import FavoritesComponent from './FavoritesComponent';
import reportWebVitals from './reportWebVitals';
import BMICalculator from './Bmicalc';
import DietPlan from './Dietplan';
import HomePage from './Homefitness';
import MotivationComponent from './Motivation';

// Create root element for React
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application with Redux Provider and Router
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/fitness" element={<FitnessComponent />} />
          <Route path="/favorite" element={<FavoritesComponent />} />
          <Route path="/bmi" element={<BMICalculator />} />
          <Route path="/diet" element={<DietPlan />} />
          <Route path="/motivation" element={<MotivationComponent />} />

        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
