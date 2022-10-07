import {
  Routes,
  Route
} from "react-router-dom";
import React from "react";
import { NotFound } from "./pages/notFound/NotFound";
import { Signup } from "./pages/auth/Signup";
import { Login } from "./pages/auth/Login";
import { Profile } from "./pages/profile/Profile";

function App() {

  const userLogin = (token) => {
    console.log(token);
  }

  return (
    <Routes>
      <Route path='/' element={<div>Hello, World!</div>} />
      <Route path='*' element={<NotFound />} />
      <Route path='/login' element={<Login userLogin={userLogin} />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
}

export default App;
