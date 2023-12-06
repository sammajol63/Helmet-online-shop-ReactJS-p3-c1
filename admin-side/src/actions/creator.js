
import { KYT_PENDING, KYT_SUCCESS, KYT_REJECT, delete_PENDING, delete_SUCCESS, delete_REJECT} from "./type";
import {product_PENDING,product_REJECT, product_SUCCESS} from "./type"
import Swal from "sweetalert2";

export const KytPending = () =>({
    type: KYT_PENDING
})

export const KytSuccess = (toJson) =>({
    type: KYT_SUCCESS,
    payload: toJson
})

export const KytReject = (errorMessage) =>({
    type: KYT_REJECT,
    payload: errorMessage
})
//===========================================
export const deletePending = () =>({
    type: delete_PENDING
})

export const deleteSuccess = (toJson) =>({
    type: delete_SUCCESS,
    payload: toJson
})

export const deleteReject = (errorMessage) =>({
    type: delete_REJECT,
    payload: errorMessage
})
//===============================================
export const productPending = () =>({
    type: product_PENDING
})

export const productSuccess = (toJson) =>({
    type: product_SUCCESS,
    payload: toJson
})

export const productReject = (errorMessage) =>({
    type: product_REJECT,
    payload: errorMessage
})




export const fetchKyt = () => {
    return async (dispatch, getsate)=> {
        try {
            dispatch(productPending())
            const response = await fetch('http://localhost:3000/readProduct',
            {
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.getItem("access_token"),
                  },
            })
            if(!response.ok){
                throw new Error(response.text())
            }
            const toJson = await response.json()
            dispatch(KytSuccess(toJson))
            console.log(toJson, `<<<<<<<<<`);
        } catch (error) {
            dispatch(KytReject(error))
        }
    }
}

export const fetchCategory = () => {
    return async (dispatch, getsate)=> {
        try {
            dispatch(KytPending())

            const response = await fetch('http://localhost:3000/readCategory',
            {headers: {
                "Content-Type": "application/json",
                access_token: localStorage.getItem("access_token"),
              },}
            )
            if(!response.ok){
                throw new Error(response.text())
            }
            const toJson = await response.json()
            dispatch(KytSuccess(toJson))
            console.log(toJson, `<<<<<<<<<`);
        } catch (error) {
            dispatch(KytReject(error))
        }
    }
}

export const loginFuction = (data) => {
    return async (dispatch)=> {
        try {
            const response = await fetch('http://localhost:3000/login', {
                method : 'POST',
                headers : {
                    "Content-Type": "application/json"
                },
                body : JSON.stringify(data),
            })
            const responseJosn = await response.json()
            if(!response.ok) {
                throw responseJosn
            }
            const {access_token} = responseJosn
            localStorage.setItem("access_token",access_token)
            Swal.fire({
                title: "Success",
                type: "success",
                text: "Succes Login",
              });
        } catch (error) {
            console.log(error);
            throw error
        }
    }
}

export const register = (data) => {
    return async (dispatch)=> {
        try {
            const response = await fetch('http://localhost:3000/register',{
                method : 'POST',
                    headers : {
                        "Content-Type": "application/json",
                        access_token: localStorage.getItem("access_token")
                    },
                    body : JSON.stringify(data),
            })
            const responseJosn = await response.json()
            Swal.fire({
                title: "Success",
                type: "success",
                text: "Your data has been saved.",
              });
        } catch (error) {
            console.log(error, `INI ERRO`);
            Swal.fire({
                title: "Error!",
                text: error.response.data.message,
                icon: "error",
                confirmButtonText: "Cool",
              });
            
        }
    }
    
  };

  export const addCategory = (data) => {
    return async (dispatch)=> {
        try {
            const response = await fetch('http://localhost:3000/addCategory',{
                method : 'POST',
                    headers : {
                        "Content-Type": "application/json",
                        access_token: localStorage.getItem("access_token")
                    },
                    body : JSON.stringify(data),    
            })
            const responseJosn = await response.json()
            Swal.fire({
                title: "Success",
                type: "success",
                text: "Your data has been saved.",
              });
        } catch (error) {
            console.log(error);
            throw error
        }
    }
    
  };


  export const deleteCategory = (id) => {
    return async (dispatch, getState) => {
        try {
            dispatch(deletePending())
            const response = await fetch(`http://localhost:3000/destroyCategory/${id}`, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                  access_token: localStorage.getItem("access_token"),
                }
              })
              const responseJosn = await response.json()
              dispatch(fetchCategory())
              Swal.fire({
                title: "Success",
                type: "success",
                text: "Delete Success.",
              });
        } catch (error) {
            dispatch(deleteReject(error))
        }
    };
  };

  export const deleteProduct = (id) => {
    return async (dispatch, getState) => {
        try {
            dispatch(deletePending())
            const response = await fetch(`http://localhost:3000/destroyProduct/${id}`, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                  access_token: localStorage.getItem("access_token"),
                }
              })
              const responseJosn = await response.json()
              dispatch(fetchKyt())
              Swal.fire({
                title: "Success",
                type: "success",
                text: "Delete Success.",
              });
        } catch (error) {
            dispatch(deleteReject(error))
        }
    };
  };

  export const addProduct = (data) => {
    return async (dispatch)=> {
        try {
            const response = await fetch('http://localhost:3000/addProduct',{
                method : 'POST',
                    headers : {
                        "Content-Type": "application/json",
                        access_token: localStorage.getItem("access_token")
                    },
                    body : JSON.stringify(data),
            })
            const responseJson = await response.json()
            // dispatch(newaddProduct(responseJson))
            dispatch(fetchKyt())
        } catch (error) {
            console.log(error);
            throw error
        }
    }
  };


