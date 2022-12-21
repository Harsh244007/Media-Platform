import { Skeleton } from "@mui/material";
import React, { Suspense, useEffect } from "react";
import { Header } from "./components";
const Loader = () => {
  return (
    <Skeleton variant="rounded" sx={{ bgcolor: 'grey.250' }} height={260} animation="wave" />
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
      <Loader />
    </>
  );
};

export default App;
