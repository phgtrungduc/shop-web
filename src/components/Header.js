import React, { Component } from 'react';
import {Link} from "react-router-dom"
import { connect } from 'react-redux';
class Header extends Component {
    render() {
        return (
            <div className="topnav">
                <Link to="/">Home</Link>
                <Link to="/cart">
                Cart 
                <img src="images/cart.png"></img>
                <span>({this.props.listCart.length})</span>
                </Link>
            </div>

        );
    }
}
const mapStateToProps = (state) => ({
    listCart:state.addToCartReducer.listCart
})
export default connect(mapStateToProps,null)(Header);