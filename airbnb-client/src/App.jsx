import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserContextProvider } from './contexts/UserContext.jsx';

import axios from 'axios';
import Home from './pages/home/home.jsx';
const LoginPage = lazy(() => import('./pages/account/login/login.jsx'));
const LayoutAccount = lazy(() => import('./pages/account/layout.jsx'));
const LayoutUser = lazy(() => import('./pages/user/layout.jsx'));
const ProfilePage = lazy(() => import('./pages/user/profile/profile.jsx'));
const Host = lazy(() => import('./pages/host/Host.jsx'));
const Hosting = lazy(() => import('./pages/hosting/hosting.jsx'));
const Main = lazy(() => import('./pages/hosting/main/main.jsx'));
const Inbox = lazy(() => import('./pages/hosting/inbox/inbox.jsx'));
const Insights = lazy(() => import('./pages/hosting/insights/insights.jsx'));
const Listing = lazy(() => import('./pages/hosting/listing/listing.jsx'));
const Room = lazy(() => import('./pages/rooms/rooms.jsx'));
const BecomeAHost = lazy(() =>
  import('./pages/host/become-a-host/become-a-host.jsx')
);
const RegisterPage = lazy(() =>
  import('./pages/account/register/register.jsx')
);

axios.defaults.baseURL = import.meta.env.VITE_ORIGIN;
// axios.defaults.baseURL = 'http://127.0.0.1:4000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <UserContextProvider>
        <Suspense fallback={<div>Page is loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="account" element={<LayoutAccount />}>
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>
            <Route path="user" element={<LayoutUser />}>
              <Route path="profile" element={<ProfilePage />} />
            </Route>
            <Route path="host" element={<Host />}>
              <Route path="become-a-host" element={<BecomeAHost />}></Route>
            </Route>

            <Route path="hosting" element={<Hosting />}>
              <Route path="main" element={<Main />} />
              <Route path="inbox" element={<Inbox />} />
              <Route path="insights" element={<Insights />} />
              <Route path="listing" element={<Listing />} />
            </Route>
            <Route path="rooms/:id" element={<Room />} />
          </Routes>
        </Suspense>
      </UserContextProvider>
    </>
  );
}

export default App;
