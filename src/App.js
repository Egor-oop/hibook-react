import {
  Routes,
  Route
} from "react-router-dom";
import React from "react";
import { NotFound } from "./pages/notFound/NotFound";
import { Register } from "./pages/auth/Register";
import { Login } from "./pages/auth/Login";
import { Profile } from "./pages/profile/Profile";

function App() {

  return (
    <Routes>
      <Route path='/' element={<div>Hello, World!</div>} />
      <Route path='*' element={<NotFound />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
