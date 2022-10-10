import {
  Routes,
  Route
} from "react-router-dom";
import React from "react";
import { NotFound } from "./pages/notFound/NotFound";
import { Register } from "./pages/auth/Register";
import { Login } from "./pages/auth/Login";
import { MyProfile } from "./pages/myprofile/MyProfile";

function App() {

  return (
    <Routes>
      <Route path='/' element={<div>Hello, World!</div>} />
      <Route path='*' element={<NotFound />} />
      <Route path='/me' element={<MyProfile />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
