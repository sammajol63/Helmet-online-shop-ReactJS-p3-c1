import { Children } from "react"
import {createBrowserRouter, redirect} from "react-router-dom"
import Sidebar from "../component/Sidebar"
import MainLayout from "../layouts/MainLayout"
import Content from "../component/Content"
import Product from "../component/TableDashboard"
import Category from "../component/TableCategory"
import LoginPage from "../component/LoginPage"
import AddProduct from "../component/AddProduct"
import DashboardCategory from "../component/ContentCategory"
import Register from "../component/Register"
import AddCategory from "../component/AddCategory"

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children:[
            {
                path: "/",
                element: <Content />,
                loader: async () => {
                    if(!localStorage.access_token){
                        return redirect('/LoginPage')
                    }else{
                        return null
                    }
                }
            },
            {
                path: "category",
                element: <DashboardCategory />
            },
            {
                path: "/add",
                element: <AddProduct />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/addCategory",
                element: <AddCategory />
            }

        ]
       
    },
    {
        path: "/LoginPage",
        element: <LoginPage />,
        loader: async () => {
            if(localStorage.access_token){
                return redirect('/')
            }else{
                return null
            }
        }
    }
])

export default router