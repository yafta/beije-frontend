import "./style/App.css";
import "./style/Text.css";
import React, { lazy, Suspense, useEffect } from "react";
import Layout from "view/components/Layout";
import useApiCall from "helper/useApiCall";
import SplashScreen from "view/components/SplashScreen";
import { Routes, Route } from "react-router-dom";
import { getPacketsAndProducts } from "api/services/app-services";
import { useDispatch } from "react-redux";
import { initProductsAndPackets } from "storage/slices/appSlice";

// Lazy load pages for better performance
const LoginPage = lazy(() => import("view/pages/Login"));
const PacketsPage = lazy(() => import("view/pages/Packets"));

function App() {
  const { apiCall } = useApiCall();
  const dispatch = useDispatch();

  useEffect(() => {
    const initializeApp = async () => {
      await apiCall({
        service: getPacketsAndProducts,
        onError: (error) => console.log(error.message),
        onSuccess: (response: any) => dispatch(initProductsAndPackets(response)),
      });
    };
    initializeApp();
  }, [apiCall, dispatch]);

  return (
    <Suspense fallback={<SplashScreen />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" index element={<LoginPage />} />
          <Route path="packets" element={<PacketsPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
