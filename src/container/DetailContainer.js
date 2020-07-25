import { getDetail,addToCart } from '../actions/action';
import { connect } from 'react-redux';
import Details from '../components/Details';

const mapDispatchToProps = (dispatch) => ({
    getDetail: (id) => dispatch(getDetail(id)),
    addToCart: (object) => dispatch(addToCart(object)),
})


const mapStateToProps = (state) => ({
    detail: state.detailReducer.detail,
    listCart:state.addToCartReducer.listCart
})

export default connect(mapStateToProps,mapDispatchToProps)(Details);

