import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import AuthScreen from "./Screens/AuthScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PrivateRoutes = () => {
  const user = useSelector(selectUser);

  if (user === undefined) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to="/" replace />;
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // logged out
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<AuthScreen />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/home/profile" element={<ProfileScreen />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
