import {ADD_TO_CART, CHANGE_NUMBER, DELETE_CART } from "../constant/constant.js"
let abc = localStorage.getItem("myCart");
const initState = {
    listCart:(localStorage.getItem("myCart"))?JSON.parse(localStorage.getItem("myCart")):[]
}

export const addToCartReducer = (state=initState,action)=>{
    switch (action.type) {
        case ADD_TO_CART:{
            let found = state.listCart.find((element)=>element.id==action.payload.id);
            if (!found) {
                let temp = {...action.payload,number:1};
                
                return {
                    ...state,listCart:[...state.listCart,temp]
                }
            }
            else {
                return state;
            }    
            
        }
        case CHANGE_NUMBER:{
            let temp =[... state.listCart];
            temp[action.index].number =action.value;
            return {
                ...state,listCart:[...temp]
            }
        }
        case DELETE_CART:{
            let temp = [...state.listCart];
            temp.splice(action.payload,1);
            return {
                ...state,listCart:[...temp]
            }
        }
        default:{
            return state
        }
    }
} 