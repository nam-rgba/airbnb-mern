import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import LoginPage from "./pages/login/login.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
