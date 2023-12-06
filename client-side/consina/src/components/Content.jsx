import React from "react";
import Card from "./Card";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchKyt } from "../actions/creator";

export default function Content(){
    const {isLoading, resultKyt, errorMsg} = useSelector( //ini diambil dari KytReducer
    (state) => state.helmKyt //ini dari index.jsx
  )
    // console.log(resultKyt, `INI BANG>>>`);
    const dispatch = useDispatch()
    useEffect(
        () => {
            dispatch(fetchKyt())
        },
        []
    )
    if (isLoading){
        return  <h1>Loading</h1>
      }
    return(
        <>
        <div class=" ml-64 flex h-[100vh] justify-center gap-3">
            {resultKyt.map((el)=>{
                return (
                <div><Card key={el.id} helm={el} /></div>
                )
            })}
        </div>
            <Sidebar />
            <Footer />
        </>
    )
}