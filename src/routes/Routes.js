import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import PageNotFound from "../pages/PageNotFound";
import { routes } from "./index";

const childRoutes = (routes) =>
  routes.map(({ children, path, component: Component }, index) =>
    children ? (
      
      // Route item with children
      [<Route key={index} path={path} exact element={<Component />} />, ...(
        children.map(({ path, component: Component }, index) => (
          <Route key={index} path={path} exact element={<Component />} />
        ))
      )]
    ) : (
      // Route item without children
      <Route key={index} path={path} exact element={<Component />} />
    )
  );

const DefaultContainer = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const Router = () => {
  console.log(childRoutes(routes))
  return (
    <>
    <Routes>
      <Route element={<DefaultContainer />}>{childRoutes(routes)}</Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </>
  );
};

export default Router;
