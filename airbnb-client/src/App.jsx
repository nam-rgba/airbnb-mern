import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import LoginPage from "./pages/account/login/login.jsx";
import RegisterPage from "./pages/account/register/register.jsx";
import axios from "axios";
import LayoutAccount from "./pages/account/layout.jsx";
import LayoutUser from "./pages/user/layout.jsx";
import { UserContextProvider } from "./contexts/UserContext.jsx";
import ProfilePage from "./pages/user/profile/profile.jsx";
import Host from "./pages/host/Host.jsx";

axios.defaults.baseURL = "http://127.0.0.1:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="account" element={<LayoutAccount />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
          <Route path="user" element={<LayoutUser />}>
            <Route path="profile" element={<ProfilePage />} />
          </Route>
          <Route path="host" element={<Host />}></Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
