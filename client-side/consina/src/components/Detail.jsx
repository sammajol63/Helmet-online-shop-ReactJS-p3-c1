import React from "react";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchDetailDataHelm } from "../actions/creator";

const Detail = () => {
  const { slug } = useParams();
  // resultKyt
  // console.log(slug, "<====");
  const { isLoading, resultDetail, errorMsg } = useSelector(
    (state) => state.detailKyt
  );
  // console.log(resultDetail.name, `INI NI DATANYA BRO`);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetailDataHelm(slug));
  }, []);
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <div className="flex">
        <div class="container mx-auto h-screen">
          <div className="mr-1 ">
            <img
              className="rounded-t-lg w-96 ml-40"
              src={resultDetail.mainImg}
              alt=""
            />
            <br></br>
            <div className="justify-center">
              <h1> Rp. {resultDetail.price}</h1>
            </div>
          </div>
        </div>
        <div class="container mx-auto h-screen bg-black">
          <div class="text-white flex px-auto text-center justify-center rounded items-center box-border h-9 w-72 mt-5 ml-5 bg-red-500">
            DESCRIPTION & SPECIFICATION<br></br>
          </div>
          <div className="text-white mt-5 ml-8 ">
            <div className="font-semibold">
              <h3>Description </h3>
              <br></br>
            </div>
            <div className="text-xs">
              <p>
                {" "}
                <h6>{resultDetail.description}</h6>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Detail;
