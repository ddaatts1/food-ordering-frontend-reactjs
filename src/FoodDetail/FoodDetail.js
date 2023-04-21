import Rating from "react-rating";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./FoodDetail.css"
import Footer from "../HomePage/Footer";
const FoodDetail = () => {
    const [rating, setRating] = useState(4);

    return (

        <div className="foodDetailContainer">
            <div className="foodDetail">
                <div className="foodImage">

                    <img src="https://cdn.tgdd.vn/Files/2017/03/22/963765/cach-lam-ga-ran-thom-ngon-8_760x450.jpg"/>
                </div>
                <div className="foodInfo">
                    <div className="foodName">Day la ten mon an </div>
                    <div className="foodRating">
                        <Rating
                            readonly="readonly"
                            style={{ maxWidth: 180 }}
                            initialRating={4.4}
                            emptySymbol={<FaStar color="#ddd" />}
                            fullSymbol={<FaStar color="#ffc107" />}
                        />
                    </div>
                    <div className="foodNote">
                      <div>Thanh toán thẻ tín dụng Sacombank: Giảm 15% tối đa 30K cho đơn từ 80K
                          vào tất cả các ngày trong tuần</div>

                    </div>
                    <div className="foodTime">Mở bán : 9.00 am - 12 pm</div>
                    <div className="foodPrice">45.000 vnd</div>
                    <div className="addToCart">
                        <button>Thêm vào giỏ hàng</button>
                        <button >Mua</button>
                    </div>
                </div>
            </div>
            <div className="relateItem">
                <div className="relateItemCard">
                    <div className="relateItemImage">
                        <img src="https://cdn.tgdd.vn/Files/2017/03/22/963765/cach-lam-ga-ran-thom-ngon-8_760x450.jpg"/>
                    </div>
                    <div className="relateItemInfo">

                        <div> Banh my dai gon</div>
                        <div>45 000 vnd</div>
                    </div>
                    <div className="relateItemButton">
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </div>
                <div className="relateItemCard">
                    <div className="relateItemImage">
                        <img src="https://cdn.tgdd.vn/Files/2017/03/22/963765/cach-lam-ga-ran-thom-ngon-8_760x450.jpg"/>
                    </div>
                    <div className="relateItemInfo">

                        <div> Banh my dai gon</div>
                        <div>45 000 vnd</div>
                    </div>
                    <div className="relateItemButton">
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </div>
                <div className="relateItemCard">
                    <div className="relateItemImage">
                        <img src="https://cdn.tgdd.vn/Files/2017/03/22/963765/cach-lam-ga-ran-thom-ngon-8_760x450.jpg"/>
                    </div>
                    <div className="relateItemInfo">

                        <div> Banh my dai gon</div>
                        <div>45 000 vnd</div>
                    </div>
                    <div className="relateItemButton">
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </div>
                <div className="relateItemCard">
                    <div className="relateItemImage">
                        <img src="https://cdn.tgdd.vn/Files/2017/03/22/963765/cach-lam-ga-ran-thom-ngon-8_760x450.jpg"/>
                    </div>
                    <div className="relateItemInfo">

                        <div> Banh my dai gon</div>
                        <div>45 000 vnd</div>
                    </div>
                    <div className="relateItemButton">
                        <button>Thêm vào giỏ hàng</button>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>

    );
};

export default FoodDetail;