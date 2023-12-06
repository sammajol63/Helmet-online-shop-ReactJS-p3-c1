import { useState } from 'react'
import reactLogo from './assets/react.svg'
import LoginPage from './component/LoginPage'
// import './App.css'
import Sidebar from './component/Sidebar'
import DashboardProduct from "./component/Content";
import { RouterProvider } from "react-router-dom";
import {Provider} from 'react-redux' 
import TableDashboard from './component/TableDashboard';
import router from "./routers";
import store from './store'

const App = () => {
  return(
    <Provider store={store}>
          <RouterProvider router={router} />
    </Provider>
  )

}

export default App
