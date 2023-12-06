import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {addCategory} from "../actions/creator"

const AddCategory = () => {
    const input = {
        name: ""
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

      const handleCategory = async (event) => {
        event.preventDefault();
        try {
          dispatcher(addCategory(values));
          movePage("/category");
        } catch (error) {
          console.log(error);
        }
      };

      return (
        <div>
        <section class="h-screen">
          <div class="px-6 h-full text-gray-800">
            <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
              <div class="m-auto xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12">
                <form onSubmit={handleCategory}>
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
                  <div class="text-center lg:text-left">
                    <button
                      type="submit"
                      class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Add Category
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

export default AddCategory