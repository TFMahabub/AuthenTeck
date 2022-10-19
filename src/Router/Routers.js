import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import MainOutlet from "../components/MainOutlet";
import Profile from "../components/Profile";
import Register from "../components/Register";
import Wallet from "../components/Wallet";
import PrivateRouter from "./PrivateRouter";

export const routers = createBrowserRouter([
  {
    path: '/',
    element: <MainOutlet></MainOutlet>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/profile',
        element: <PrivateRouter><Profile></Profile></PrivateRouter>
      },
      {
        path: '/wallet',
        element: <PrivateRouter><Wallet></Wallet></PrivateRouter>
      },
    ]
  }
])