import { combineReducers } from 'redux';
import { reducers} from './reducers'
import { detailReducer} from './detailReducer'
import { addToCartReducer} from './addToCartReducer'
const rootReducer = combineReducers({reducers,detailReducer,addToCartReducer})
export default rootReducer;