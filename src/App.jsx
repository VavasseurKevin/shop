import React from 'react';
import './index.css';
import AppRouter from './routers/AppRouter';
import "./styles/style.scss"
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Tajawal']
  }
});

const App = () => {
  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
