import { Skeleton } from "@mui/material";
import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Banner, Header, Login, Signup } from "./components";
import Copyright from "./components/Common/copyright";
const Loader = () => {
  return <Skeleton variant="rounded" sx={{ bgcolor: "grey.250", m: 1, my: 0.5 }} height={260} animation="pulse" />;
};
const App = () => {
  useEffect(() => {
    console.log = {};
    console.warn = {};
  });
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Header />
      </Suspense>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Suspense fallback={<Loader />}>
                <Banner />
                <Copyright/>
              </Suspense>
            </>
          }
        ></Route>
        <Route
          exact
          path="/login"
          element={
            <Suspense fallback={<Loader />}>
              <Login />
            </Suspense>
          }
        ></Route>
        <Route
          exact
          path="/signup"
          element={
            <Suspense fallback={<Loader />}>
              <Signup />
            </Suspense>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
