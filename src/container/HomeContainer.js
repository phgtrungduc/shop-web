import { getAllCategory } from '../actions/action';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage.js'

const mapDispatchToProps = (dispatch) => ({
    getAllCategory: () => dispatch(getAllCategory()),
})

const mapStateToProps = (state) => ({
    listCategory: state.reducers.listCategory
})

export default connect(mapStateToProps,mapDispatchToProps)(Homepage);