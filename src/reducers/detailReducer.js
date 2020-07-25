import {GET_DETAIL } from "../constant/constant.js"
const initState = {
    detail:{}
}
export const detailReducer = (state=initState,action)=>{
    switch (action.type) {
        case GET_DETAIL:{
            return {
                ...state,detail:action.payload
            }
        }
        default:{
            return state
        }
    }
} 