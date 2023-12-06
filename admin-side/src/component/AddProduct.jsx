import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, fetchCategory} from "../actions/creator";

const AddProduct = () => {
  const {isLoading, resultCategory, errorMsg} = useSelector( //ini diambil dari KytReducer
  (state) => state.CategoryKyt //ini dari index.jsx
)
const dispatch = useDispatch()
useEffect(
  () => {
    dispatch(fetchCategory())
  },
  []
)
     const input = {
        name: "",
        description: "",
        price: "",
        mainImg: "",
        categoryId: "",
      };

      const [values, setValues] = useState(input);
      const dispatcher = useDispatch();
      const movePage = useNavigate();

        const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
          ...values,
          [name]: value,
        });
        console.log(value);
      };

      const handleSubmit = async (event) => {
      event.preventDefault();
      try {
      dispatcher(addProduct(values));
      movePage("/");
      } catch (error) {
          console.log(error);
      }
      };

    return(
        <div>
            <section class="h-screen">
  <div class="px-6 h-full text-gray-800">
    <div
      class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
    >

      <div class="m-auto xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12">
        <form onSubmit={handleSubmit}>
          <div class="mb-6">
            <input
              type="text"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="name"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              value={values.name}
            />
          </div>

          <div class="mb-6">
            <input
              type="text"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="description"
              placeholder="Description"
              name="description"
              onChange={handleChange}
              value={values.description}
            />
          </div>
          <div class="mb-6">
            <input
              type="text"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="price"
              placeholder="Price"
              name="price"
              onChange={handleChange}
              value={values.price}
            />
          </div>
          <div class="mb-6">
            <input
              type="text"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="mainImg"
              placeholder="Main Img"
              name="mainImg"
              onChange={handleChange}
              value={values.mainImg}
            />
          </div>
          {/* <div class="mb-6">
            <input
              type="text"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="categoryId"
              placeholder="Category"
              name="categoryId"
              onChange={handleChange}
              value={values.categoryId}
            />
          </div> */}

          <select 
          class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="categoryId"
          name="categoryId"
          onChange={handleChange}
          value={values.categoryId}
          >
            <option selected> Chose a Category</option>
            {
              resultCategory.map(el=> {
                return <option key={el.id} value={el.id}>{el.name}</option>
              })
            }
          </select><br/>


          <div class="text-center lg:text-left">
            <button
              type="submit"
              class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}

export default AddProduct