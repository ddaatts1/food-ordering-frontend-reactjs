import './DashBoard.css'
import {useEffect, useState} from "react";
import axios from "axios";

function DashBoard(){


    const  [stats,setStats] = useState({})


    useEffect(()=>{

        const token = localStorage.getItem("token")
        axios.get(process.env.REACT_APP_URL_ADMIN_GET_STATS,{
            headers: {
                authorization:
                    `Bearer ${token}`
            },
        })
            .then((response)=>{
                console.log(response)
                setStats(response.data.data.stats)
            })
    },[])

    useEffect(()=>{
        console.log("stats: ",stats)
    },[stats])
    return(
    <div className="dashboard">
        <div className="order">
            <div className="div1">
                <span className="icon_order">
                </span>
                <span className="title">
                    <span className="text">
                        TOTAL ORDERS
                    </span>
                    <span className="number">
                        {stats.order}
                    </span>
                </span>
            </div>

            <div className="div2">
                <span className="text_div2">
                    ORDERS
                </span>
            </div>

        </div>

        <div className="order">
            <div className="div1">
                <span className="icon_product">
                </span>
                <span className="title">
                    <span className="text" style={{color:"green"}}>
                        TOTAL PRODUCTS
                    </span>
                    <span className="number" >
                        {stats.product}
                    </span>
                </span>
            </div>

            <div className="div2">
                <span className="text_div2" style={{color:"green"}}>
                    PRODUCTS
                </span>
            </div>

        </div>

        <div className="order">
            <div className="div1">
                <span className="icon_viewer">
                </span>
                <span className="title">
                    <span className="text" style={{color: "#17096D"}}>
                        TOTAL VIEWERS
                    </span>
                    <span className="number">
                        23232
                    </span>
                </span>
            </div>

            <div className="div2">
                <span className="text_div2" style={{color: "#17096D"}} >
                    VIEWERS
                </span>
            </div>

        </div>


    </div>

    )
}

export default DashBoard;