/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useState } from 'react';
import './Catolog.css'


const Catolog = () => {

    const [choose, setChoose] = useState("All");


    const toggleChoose = (x) => {
        setChoose(x);
    }
    const arr = ["All", "Pizza", "3", "4", "5", "6", "7"];

    const [selectedValue, setSelectedValue] = useState("topsale");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    }


    return (
        <div className="Catolog">
            <div className='top'>
                <span className='slogan'>Find your best food <span className='icon1'></span></span>
                <div className='right'>
                    <div
                        className="select-box"
                        style={{ backgroundColor: "rgb(248, 248, 248)", color: "rgb(187, 187, 187)" }}
                    >
                        <select className='selectBox' value={selectedValue} onChange={handleChange}>
                            <option value="topsale">Top sale</option>
                            <option value="option2">Recent</option>
                        </select>
                        <div className="arrow-icon">&#x25BC;</div>
                    </div>
                </div>

            </div>
            <ul className="Listcategory">

                {arr.map((x) => {
                    return (
                        <li className="Category" >
                            <a href='#' className='aCategory' onClick={() => toggleChoose(x)}>
                                <div className="image" style={{ backgroundColor: choose === x ? "rgb(255, 250, 199)" : " " }}>
                                    <div style={{ backgroundColor: choose === x ? "rgb(240, 235, 180)" : " " }}>
                                        <img src="https://cdn-icons-png.flaticon.com/512/561/561611.png"></img>
                                    </div>

                                </div>
                                <div className="Categoryname" style={{ backgroundColor: choose === x ? "rgb(255, 250, 199)" : " " }}>
                                    <span>All</span>
                                </div>
                            </a>
                        </li>
                    )
                })}




            </ul>

        </div>
    )
}

export default Catolog;