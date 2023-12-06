import React from "react";
import TableDashboard from "./TableDashboard";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchKyt } from "../actions/creator"
import {fetchCategory} from "../actions/creator"
import { NavLink } from "react-router-dom";


const DashboardProduct = () => {
  const {isLoading, resultKyt, errorMsg} = useSelector( //ini diambil dari KytReducer
    (state) => state.helmKyt //ini dari index.jsx
  )
  
  const dispatch = useDispatch()
  useEffect(
    () => {
      dispatch(fetchKyt())
    },
    []
  )
    return(
      <div>
      <table className="mx-auto w-full border-collapse border border-slate-400 ...">
        <div class="p-4 sm:ml-64">
      <div class="h-screen p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
      <div className="">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <NavLink to="/add">Add Product</NavLink>
        </button>
      </div>
      <br></br>
  <thead>
    <tr>
      <th class="border border-slate-300 ...">No</th>
      <th class="border border-slate-300 ...">Name</th>
      <th class="border border-slate-300 ...">Category</th>
      <th class="border border-slate-300 ...">Price</th>
      <th class="border border-slate-300 ...">Created By</th>
      <th class="border border-slate-300 ...">img</th>
      <th class="border border-slate-300 ...">Action</th>
    </tr>
  </thead>
  <tbody>
      {resultKyt.map(el=>{
        return <TableDashboard key={el.id} helm={el} />
      })}
      </tbody>
      </div>
    </div>
       </table>
       <Outlet />
       </div>
    )
};

export default DashboardProduct;
