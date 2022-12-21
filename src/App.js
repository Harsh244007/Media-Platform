import { Skeleton } from "@mui/material";
import React, { Suspense, useEffect } from "react";
import { Banner, Header } from "./components";
const Loader = () => {
  return (
    <Skeleton variant="rounded" sx={{ bgcolor: 'grey.250',m:1,my:0.5 }} height={260} animation="wave" />
  );
};
const App = () => {
  useEffect(() => {
    console.log = {};
    console.warn = {};
  });
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Header />
      </Suspense>
      <Suspense fallback={<Loader/>}>
        <Banner />
      </Suspense>
      <Loader />
    </>
  );
};

export default App;
