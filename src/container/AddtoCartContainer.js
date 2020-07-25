import { connect } from 'react-redux';
import Cart from '../components/Cart';
import {changeNumber,deleteCart} from "../actions/action.js"
const mapDispatchToProps=(dispatch) =>({
    changeNumber : (index,value)=>dispatch(changeNumber(index,value)),
    deleteCart:(index)=>dispatch(deleteCart(index))
})

const mapStateToProps = (state) => ({
    listCart:state.addToCartReducer.listCart
})

export default connect(mapStateToProps,mapDispatchToProps)(Cart);