import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { NotFound } from "./pages/notFound/NotFound";
import { Signup } from "./pages/auth/Signup";
import { Login } from "./pages/auth/Login";

const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound />
  },
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
