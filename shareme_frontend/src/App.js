import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Home from "./container/Home";
import Login from "./components/Login";

const App = () => {
  const navigate=useNavigate();

  useEffect(()=>{
    const user=localStorage.getItem("user") !== "undefined"
    ? JSON.parse(localStorage.getItem("user"))
    : localStorage.clear();

    if(!user)navigate('./login');
  },[])
  return (
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  </GoogleOAuthProvider>
  )
}

export default App