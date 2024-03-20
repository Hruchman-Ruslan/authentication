import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from ".";

import "./App.css";

const SignUpPage = lazy(() => import("../pages/SignUpPage/SignUpPage"));
const SignInPage = lazy(() => import("../pages/SignInPage/SignInPage"));
const ForgotPasswordPage = lazy(
  () => import("../pages/ForgotPasswordPage/ForgotPasswordPage")
);
const CreatePasswordPage = lazy(
  () => import("../pages/CreatePasswordPage/CreatePasswordPage")
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/password" element={<ForgotPasswordPage />} />
        <Route path="/create-password" element={<CreatePasswordPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
