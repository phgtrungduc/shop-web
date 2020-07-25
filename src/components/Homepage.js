import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

class Homepage extends Component {
    componentDidMount() {
        this.props.getAllCategory();
    }
    render() {
        return (
                <div className="content">
                    <div className="container">
                        {/*--speical-products--*/}
                        <div className="special-products">
                            <div className="s-products-head">
                                <div className="s-products-head-left">
                                    <h3>ALL <span>PRODUCTS</span></h3>
                                </div>
                            </div>
                            {/*--special-products-grids--*/}
                            <div className="special-products-grids">
                                {
                                    this.props.listCategory.map((value, index) => (
                                        <div className="col-md-3 special-products-grid text-center">
                                            <img src={"images/b" + value.id + ".jpg"} title="name" />
                                            <img src={"images/p" + value.id + ".jpg"} title="product-name" />
                                            <h4>{value.name}</h4>
                                            <Link to={"/detail/"+value.id}><span>Giá: {value.price} &nbsp;</span><small>Chi tiết</small></Link>

                                        </div>
                                    ))
                                }
                            </div>
                            {/*-//special-products-grids--*/}
                        </div>
                        {/*-//speical-products--*/}
                    </div>
                </div>
        );
    }
}

export default Homepage;
