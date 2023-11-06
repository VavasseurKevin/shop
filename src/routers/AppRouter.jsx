import React from 'react';
import { Route, Routes } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import * as view from '../views';
import { Navigation } from '../components/common';

const AppRouter = () => (
  <>
  <Navigation/>
  <Routes>
    <Route path={ROUTES.HOME} element={<view.Home />} />
    <Route path={ROUTES.SHOP} element={<view.Shop />} />
    <Route path={ROUTES.FEATURED_PRODUCTS} element={<view.FeaturedProducts/>} />
    <Route path={ROUTES.SEARCH} element={<view.Search />} />
    <Route path={ROUTES.RECOMMENDED_PRODUCTS} element={<view.RecommendedProducts />} />
    <Route path={ROUTES.VIEW_PRODUCT} element={<view.ViewProduct />} />
    <Route path={ROUTES.SIGNUP} element={<view.SignUp />} />
    <Route path={ROUTES.SIGNIN} element={<view.SignIn />} />
    <Route path={ROUTES.ADMIN_DASHBOARD} element={<view.Dashboard />} />
  </Routes>
  </>
);

export default AppRouter;
