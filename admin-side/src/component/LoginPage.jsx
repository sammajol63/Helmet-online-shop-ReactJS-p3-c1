import React from "react";
import { useState } from "react";
import { loginFuction } from "../actions/creator";
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"

const LoginPage = () => {
  const input = {
    email: "",
    password:""
  }
  const [data, setData] = useState(input)
  const navigate = useNavigate()
  const dispact = useDispatch()
  const barierrLogin = (event) => {
    const {name, value} = event.target
     setData({
      ...data,
      [name]: value
     })
     console.log(value);
  }

  async function LoginHandler(event){
    console.log('login');
    try {
      console.log('masukk');
      event.preventDefault()
      await dispact(loginFuction(data))
      navigate('/')
    } catch (error) {
      throw error
    }
  }

    return(
        <div>
            <section class="h-screen">
  <div class="px-6 h-full text-gray-800">
    <div
      class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
    >

      <div class="m-auto xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12">
        <form onSubmit={LoginHandler}>
          <div
            class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
          >
            <p class="text-center font-semibold mx-4 mb-0">Login Admin</p>
          </div>

          <div class="mb-6">
            <input
             name="email" onChange={barierrLogin}
             value={data.email}
              type="text"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="email"
              placeholder="Email address"
            />
          </div>

          <div class="mb-6">
            <input
             name="password" onChange={barierrLogin}
             value={data.password}
              type="password"
              class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="password"
              placeholder="Password"
            />
          </div>
          <div class="text-center lg:text-left">
            <button
              type="sumbit"
              class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Login
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

export default LoginPage