import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routers/AppRouter';

const App = () => {
  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
