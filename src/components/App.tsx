import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from ".";

import "./App.css";

const SignUpPage = lazy(() => import("../pages/SignUpPage/SignUpPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SignUpPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
