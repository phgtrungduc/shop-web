//Các file container sử dụng để connect, tức là kết nối react với redux,
// truyền vào 2 tham số mapDispatchToProps và mapStateToProps, các hàm và state này được truy cập như props của component được kết nôi


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