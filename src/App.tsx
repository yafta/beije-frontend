import "./style/App.css";
import "./style/Text.css";
import React, { lazy, Suspense } from "react";
import Layout from "view/components/Layout";
import SplashScreen from "view/components/SplashScreen";
import { Routes, Route } from "react-router-dom";

// Lazy load pages for better performance
const LoginPage = lazy(() => import("view/pages/Login"));
const PacketsPage = lazy(() => import("view/pages/Packets"));

function App() {
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
