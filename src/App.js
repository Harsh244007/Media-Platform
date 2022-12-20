import { Skeleton } from "@mui/material";
import React, { Suspense, useEffect } from "react";
import { Header } from "./components";
const Loader = () => {
  return (
    <Skeleton variant="rectangular" width={210} height={60} animation="wave" />
  );
};
const App = () => {
  useEffect(() => {
    console.log = {};
    console.warn = {};
  });
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
      </Suspense>
      <Loader />
    </>
  );
};

export default App;
