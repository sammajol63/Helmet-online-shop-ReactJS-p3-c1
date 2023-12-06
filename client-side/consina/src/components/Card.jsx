import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ helm }) => {
  return (
    <div class="min-w-56 text-ellipsis overflow-hidden ...">
      <div class="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img className="rounded-t-lg w-36" src={helm.mainImg} alt="" />
        </a>
        <div class="p-6 justify-center">
          <h5 class="text-gray-900 text-xl font-medium mb-2 justify-center">
            {helm.name}
          </h5>
          <NavLink to={`/${helm.slug}`}>
          <button type="button"class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
             Detail 
          </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Card;
