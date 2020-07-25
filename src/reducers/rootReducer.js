//rootReducer dùng để tập hợp tất cả các reducer bằng hàm combineReducers, khi cretate trong store chỉ cần 
//create rootReducer

import { combineReducers } from 'redux';
import { reducers} from './reducers'
import { detailReducer} from './detailReducer'
import { addToCartReducer} from './addToCartReducer'
const rootReducer = combineReducers({reducers,detailReducer,addToCartReducer})
export default rootReducer;