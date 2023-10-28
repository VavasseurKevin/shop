import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import AdminRoute from "./AdminRoute";
import PublicRoute from "./PublicRoute";
import ClientRoute from "./ClientRoute";


const AppRouter = () => {
    <BrowserRouter>
            <Routes>
                <Route path="/" element={ClientRoute} />
                <Route path="/dasboard" element={AdminRoute} />
                <Route path="/newitem" element={AdminRoute} />
                <Route path="/edititem/:id" element={PublicRoute} />
                <Route path="/profile" element={PublicRoute} />
            </Routes>
    </BrowserRouter>
};

export default AppRouter;