import { GET_ALL_CATEGORY, GET_DETAIL, ADD_TO_CART, CHANGE_NUMBER, DELETE_CART } from "../constant/constant.js"
import axios from "axios"

let  getallCategory = (data) => {
    return {
        type: GET_ALL_CATEGORY,
        payload: data
    }
}


export const getAllCategory = () => {
    return (dispatch) => {
        axios.get('https://5f1781cc7c06c900160dc0de.mockapi.io/hanghoa')
            .then((response) => {
                dispatch(getallCategory(response.data))
            })
            .catch((error) => {
                return {
                    type: GET_ALL_CATEGORY,
                    payload: []
                }
            })
    }
}

let  getdetail = (data) => {
    return {
        type: GET_DETAIL,
        payload: data
    }
}


export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('https://5f1781cc7c06c900160dc0de.mockapi.io/hanghoa/'+id)
            .then((response) => {
                dispatch(getdetail(response.data))
            })
            .catch((error) => {
                console.log(error.message)
                return {
                    type: GET_DETAIL,
                    payload: {}
                }
            })
    }
}

export const addToCart=(object)=>{
    return {
        type: ADD_TO_CART,
        payload:object
    }
}

export const changeNumber = (index,value)=>{
    return {
        type:CHANGE_NUMBER,
        index:index,
        value:value
    }
}

export const deleteCart = (index)=>{
    return {
        type:DELETE_CART,
        payload:index
    }
}


// export const addData = (data)=>{
//     return (dispatch) => {
//         axios.post('https://5f1781cc7c06c900160dc0de.mockapi.io/mathang',{
//             name:data,
//             status:"false"
//         })
//             .then((response) => {
//                 dispatch(addToList(response.data))
//             })
//             .catch((error) => {
//                 dispatch(addToList({}))
//             })
//     }
// }

// export const deleteData = (index)=>{
//     return (dispatch) => {
//         axios.delete('https://5f1781cc7c06c900160dc0de.mockapi.io/mathang/'+(index))
//             .then((response) => {
//                 dispatch(deleteList(index))
//                 console.log("thành công")
//             })
//             .catch((error)=>{
//                 console.log("thất bại");
//             })
//     }
// }

