import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AppRouter from './routers/AppRouter';
import './styles/style.scss';
import WebFont from 'webfontloader';

const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Tajawal'],
      },
    });
  }, []);



  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
