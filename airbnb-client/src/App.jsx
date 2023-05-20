import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import LoginPage from "./pages/account/login/login.jsx";
import RegisterPage from "./pages/account/register/register.jsx";
import axios from "axios";
import LayoutAccount from "./pages/account/layout.jsx";

axios.defaults.baseURL = "http://localhost:4000";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="account" element={<LayoutAccount />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
