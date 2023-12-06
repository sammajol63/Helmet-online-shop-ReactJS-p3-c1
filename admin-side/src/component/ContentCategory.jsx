import React from "react";
import TableCategory from "./TableCategory";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategory } from "../actions/creator"
import { NavLink } from "react-router-dom";

const DashboardCategory = () => {
    const {isLoading, resultCategory, errorMsg} = useSelector( //ini diambil dari KytReducer
    (state) => state.CategoryKyt //ini dari index.jsx
  )
  console.log(resultCategory,'daro')
  const dispatch = useDispatch()
  useEffect(
    () => {
      dispatch(fetchCategory())
    },
    []
  )

  return(
    <div className="-mt-7 justify-center ">

    <table className=" mx-auto w-full border-collapse border border-slate-400 ...">
    <div class="h-screen p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 ">
      <div class="p-4 sm:ml-64">
    <div className="">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        <NavLink to="/addCategory">Add Category</NavLink>
      </button>
    </div>
    <br></br>
<thead className="w-[450px]"> 
  <tr>
    <th class="border border-slate-300 ...">No</th>
    <th class="border border-slate-300 ...">Name</th>
    <th class="border border-slate-300 ...">Created</th>
    <th class="border border-slate-300 ...">Action</th>

  </tr>
</thead>
<tbody>
    {resultCategory.map((el, i)=>{
      return <TableCategory key={el.id} category={el} />
    })}
    </tbody>
    </div>
  </div>
     </table>
  
     </div>
  )
}

export default DashboardCategory