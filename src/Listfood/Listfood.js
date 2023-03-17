/* eslint-disable array-callback-return */
import './Listfood.css'

const Listfood = () => {

    const count = [1, 2, 3, 2, 5, 5];

    return (
        <div className="Listfood">

            {count.map(() => {
                return (
                    <a className="card" href='#'>
                        <div className="image">
                            <div>
                                <img
                                    src='https://media.istockphoto.com/id/1207976129/vi/anh/cận-cảnh-gà-rán-trên-đĩa-trắng-cách-ly-trên-bàn-nhìn-yummy-và-màu-vàng-vàng.jpg?s=612x612&w=0&k=20&c=HqgqDDPQJgee2FZRLCUuKu8Rp36VQT_QinNFE97UPcA='></img>
                            </div>

                        </div>
                        <div className="name">
                            <span>Crsipy Rava </span>
                        </div>
                        <div className="infor">
                            <div className='container'>
                                <div className='box'>
                                    <span style={{marginTop: "5px", color: "grey", fontSize: "10px"}}>Price</span>
                                    <span>50.00</span>
                                </div>
                                <div class="line"></div>
                                <div className='box'>
                                    <span style={{marginTop: "5px", color: "grey", fontSize: "10px"}}>Rate</span>
                                    <span>4.9 <span className='icon'></span></span>
                                </div>
                                <div class="line"></div>
                                <div className='box'>
                                    <span style={{marginTop: "5px", color: "grey", fontSize: "10px"}}>Ordered</span>
                                    <span>500</span>
                                </div>

                            </div>

                        </div>
                    </a>)
            })}
        </div>
    )
}

export default Listfood;