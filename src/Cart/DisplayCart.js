import React, {useContext, useState} from "react";
import {CartContext} from "./Cart";
import "./Cart.css"
import subtract from'./remove.png'
import plus from './plus.png'
import deleteI from './delete.png'
function DisplayCart(){

        const { cartItems, removeFromCart,plusQuantity,subtractQuantity } = useContext(CartContext);
        const [quantity,setQuantity] = useState(1)
        // Function to handle Remove from Cart button click
        const handleRemoveFromCart = (item) => {
            removeFromCart(item);

        };


        function handlePlusQuantity(item){
            plusQuantity(item)
        }
        function handleSubtractQuantity(item){
            subtractQuantity(item)
        }




function buy(){
            const items = JSON.parse(localStorage.getItem("cart"));

            console.log("cart: ",items)
        }

        return (
            <div className="containerCart">
                <div className="cart">

                    <div className="divLeft">
                        <h2>Giỏ hàng</h2>
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={index}>
                                <span className="image">
                                    <img style={{objectFit: "cover"}} src="https://cdn.tgdd.vn/Files/2017/03/22/963765/cach-lam-ga-ran-thom-ngon-8_760x450.jpg" />
                                    </span>
                                    <div className="namePrice">
                                        <span className="name">{item.name}</span>
                                        <div className="plusDelete">
                                            <div className="quantity">
                                                <img onClick={()=>{handleSubtractQuantity(item)}} style={{width:"25px",height:"25px",marginRight:"15px"}}  src={subtract} alt="subtract" />
                                                <span >{item.quantity}</span>
                                                <img onClick={()=>{handlePlusQuantity(item)}} style={{width:"25px",height:"25px",marginLeft:"15px"}} width="25px" height="25px" src={plus} alt="plus"/>

                                            </div>

                                            <span style={{float:"right"}}>{item.price * item.quantity}</span>
                                            <img onClick={() => handleRemoveFromCart(item)} style={{width:"25px",height:"25px",marginLeft:"10px"}} width="25px" height="25px" src={deleteI} alt="plus"/>
                                        </div>

                                    </div>

                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="divRight">
                        <div className="label"><span> Thông tin khách hàng</span></div>
                        <div className="hotenSDT">
                            <input type="text" placeholder="Họ và tên"/>
                            <input type="text" placeholder="Số điện thoại"/>
                        </div>
                        <div className="radioButton">
                            <span><input id="restaurant" type="radio" value="restaurant" name="method" /> <label htmlFor="restaurant">Giao tận nơi</label> </span>
                            <span><input id="house" type="radio" value="house" name="method" /><label htmlFor="house">Nhận tại cửa hàng</label></span>
                        </div>
                        <div className="note">
                            <textarea className="note" placeholder="Ghi chú"></textarea>
                        </div>
                        <div className="confirm">
                            <button onClick={()=>{buy()}}>Mua hàng</button>

                        </div>
                    </div>


                </div>

            </div>
        );


}

export default DisplayCart;