import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import './App.css'
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { RouterProvider } from "react-router-dom";
import {Provider} from 'react-redux' 
import router from "./routers";
import store from './store'
const App = () => {
  return(
    <Provider store={store}>
          <RouterProvider router={router} />
    </Provider>

  )

}

export default App;
