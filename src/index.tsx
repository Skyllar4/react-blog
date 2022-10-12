import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { CardDetail } from './Card/CardDetail';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='post' element={<CardDetail />}>
        <Route path=":postId" element={<CardDetail />} />
        </Route>
        <Route
                  path='*'
                  element={
                      <p>Страница не найдена</p>
                  }
                />
        </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
