import React from "react";
import dateFormat from 'dateformat';
import {deleteCategory} from '../actions/creator'
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const TableCategory = ({category}) => {
  const dispatcher = useDispatch()

  function handleDelete(id){
    dispatcher(deleteCategory(id))
    movePage("/category");
  }

  const dateCreate = dateFormat(category.createdAt, "dddd, mmmm dS, yyyy")
    return(
        <tr>
      <td class="border border-slate-300 ...">{category.id}</td>
      <td class="border border-slate-300 ...">{category.name}</td>
      <td class="border border-slate-300 ...">{dateCreate}</td>
      <td className="border border-slate-300 ... px-4 py-2">
        <div className="flex justify-end gap-4">
          <a x-data="{ tooltip: 'Delete' }" href="#" onClick={() => handleDelete(category.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
              x-tooltip="tooltip"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </a>

        </div>
      </td>
    </tr>
   
    
// <p className="text-red-600 h-[100vh] text-center">kategory lol</p> 
    )
}

export default TableCategory;