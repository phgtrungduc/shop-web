import React, { Component } from 'react';
import swal from 'sweetalert';  
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    onAdd = (index) => {
        let temp =this.props.listCart[index].number;
        temp++;
        this.props.changeNumber(index,temp)
    }
    onMinus = (index) => {
        let temp =this.props.listCart[index].number;
        if(temp>1)temp--;
        this.props.changeNumber(index,temp)

    }
    onDel = (index) => {
        
        swal({
            title: "Bạn chắc chắn chứ?",
            text: "",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                this.props.deleteCart(index)
              swal("Mặt hàng của bạn sẽ bị xóa!", {
                icon: "success",
              });
            } else {
              swal("Mặt hàng chưa bị xóa!");
            }
          });
    }
    onChange=(index,e)=>{
        if (e.target.value==="") this.props.changeNumber(index,0);
        else {
            this.props.changeNumber(index,parseInt(e.target.value));
        }
    }
    calcSum=()=>{
        let temp =this.props.listCart;
        let S=0;
        for (let i=0;i<temp.length;i++){
            S+=temp[i].price*temp[i].number;
        }
        return S;
    }
    saveStatus=()=>{
        localStorage.setItem("myCart",JSON.stringify(this.props.listCart)) 
    }
    render() {
        return (
            <div className="container">
                <h1>Giỏ hàng của tôi</h1>
                <h2>Các sản phẩm đã mua</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Giá 1 sản phẩm</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.listCart.map((value, index) => (
                            <tr>
                                <th scope="row" >{index + 1}</th>
                                <td >{value.name}</td>
                                <td style={{ width: '200px' }}>
                                    <div className="group" style={{ display: 'flex', padding: "2px", border: "none" }}>
                                        <div className="tru" >
                                            <button onClick={() => this.onMinus(index)}> <img src="images/minus.png" alt="" /></button>
                                        </div>
                                        <div className="input" >
                                            <input type="text" value={value.number} style={{ width: '50px', textAlign: 'center' }} onChange={(e)=>this.onChange(index,e)}/>
                                        </div>
                                        <div className="cong">
                                            <button onClick={() => this.onAdd(index)}> <img src="images/add.png" alt="" /></button>
                                        </div>
                                    </div>
                                </td>
                                <td style={{ width: '200px' }}>{value.price}</td>
                                <td>
                                    <div>
                                        <img src="images/trash.png" style={{ cursor: 'pointer' }} onClick={() => this.onDel(index)} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Tổng</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col">
                            {this.calcSum()}
                            </th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                </table>
                <button className="btn btn-warning" onClick={this.saveStatus}>Lưu trạng thái giỏ hàng</button>
            </div>
        );
    }
}

export default Cart;