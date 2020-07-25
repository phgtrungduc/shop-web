import React, { Component } from 'react';
import swal from 'sweetalert';
class Details extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        this.props.getDetail(id)
    }
    addToCart=(object)=>{
        this.props.addToCart(object)
        debugger
        swal("Đã thêm vào giỏ hàng!","", "success");
    }
    render() {
        return (
            <div>
                <div className="card" style={{ width: '500px', margin: 'auto' }}>
                    <img className="card-img-top" src={"../images/p" + this.props.match.params.id + ".jpg"} alt="Card image cap" style={{ width: "100%" }} />
                    <div className="card-body">
                        <h1 className="card-title text-success">Tên: {this.props.detail.name}</h1>
                        <ul>
                            <li><p className="card-text text-info">Giá: {this.props.detail.price}</p></li>
                            <li>
                                <p className="card-text">Loại mặt hàng: {this.props.detail.type}</p>
                            </li>
                        </ul>
                        <div className="btn btn-danger" style={{ width: '100%' }} onClick={()=>this.addToCart(this.props.detail)}>Add To Cart</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Details;

