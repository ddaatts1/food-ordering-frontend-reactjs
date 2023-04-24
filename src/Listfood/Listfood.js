/* eslint-disable array-callback-return */
import './Listfood.css'
import React, {useContext, useEffect, useState} from "react";
import {Cart, CartContext, CartProvider} from "../Cart/Cart";
import axios from "axios";
import Popup from "reactjs-popup";
import {useNavigate} from "react-router";

const Listfood = () => {


    const [products,setProduct] = useState([])



    useEffect(() => {
        const payload = {
            restaurant_id: "64265a0baab30d0971ef63aa",
            category_id: "CHAO",
            address_long: 21.034109,
            address_lat: 105.780162,
            page: 0,
            size: 4
        };

        axios
            .post('http://localhost:8081/api/OrderUp/USER_GET_ITEMS',payload)
            .then(response => {
                // handle success
                console.log(response);
                setProduct(response.data.data)
            })
            .catch(error => {
                // handle error
                console.log(error);
            });
    }, []);



    return (
        <CartProvider>
        <div className="Listfood">


                    {products.map((product,index) => (
                        <ProductItem key={index} product={product} />
                    ))}

        </div>
        </CartProvider>

    )
}



export const ProductItem = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate()
    // Function to handle Add to Cart button click
    const handleAddToCart = () => {
        addToCart(product);
    };

    function handleMouseEnter() {
        setShowPopup(true)
    }

    function handleMouseLeave() {
        setShowPopup(false)
    }

    return (
        <Popup open={showPopup}  trigger={<div    onClick={handleMouseEnter}
                                  onMouseLeave={handleMouseLeave} className="card" href='' >
            <div className="image">
                <div>
                    <img
                        src='https://media.istockphoto.com/id/1207976129/vi/anh/cận-cảnh-gà-rán-trên-đĩa-trắng-cách-ly-trên-bàn-nhìn-yummy-và-màu-vàng-vàng.jpg?s=612x612&w=0&k=20&c=HqgqDDPQJgee2FZRLCUuKu8Rp36VQT_QinNFE97UPcA='></img>
                </div>

            </div>
            <div className="name">
                <span>{product.name} </span>
            </div>
            <div className="infor">
                <div className='container'>
                    <div className='box'>
                        <span style={{marginTop: "5px", color: "grey", fontSize: "10px"}}>Price</span>
                        <span>{product.price}</span>
                    </div>
                    <div className="line"></div>
                    <div className='box'>
                        <span style={{marginTop: "5px", color: "grey", fontSize: "10px"}}>Rate</span>
                        <span>{product.rate_average} <span className='icon'></span></span>
                    </div>
                    <div className="line"></div>
                    <div className='box'>
                        <span style={{marginTop: "5px", color: "grey", fontSize: "10px"}}>Ordered</span>
                        <span>{product.ordered}</span>
                    </div>

                </div>

            </div>
        </div>
        } position="center center"><div className="cardButton">
            <div><button  onClick={handleAddToCart}>Thêm vào giỏ hàng </button></div>
            <div><button onClick={()=>{navigate(`/detail?id=${product._id}`)}}>Chi tiết</button></div>


        </div></Popup>

    );
};

export default Listfood;