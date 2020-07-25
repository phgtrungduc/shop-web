import { GET_ALL_CATEGORY, GET_DETAIL } from "../constant/constant.js"
const initState = {
    listCategory:[]
}
export const reducers = (state=initState,action)=>{
    switch (action.type) {
        case GET_ALL_CATEGORY:{
            return {
                ...state,listCategory:[...action.payload]
            }
        }
        default:{
            return state
        }
    }
} 
