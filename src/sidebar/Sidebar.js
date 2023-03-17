/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faEnvelope, faBell, faUser, faCartShopping, faPizzaSlice, faCircleInfo, faUtensilSpoon, faUtensils } from "@fortawesome/free-solid-svg-icons";
import './Sidebar.css'
const Sidebar = () => {
    const [choose, setChoose] = useState("Home");

    const [displayCart,setDisplayCart] = useState(false);
    const toggleIcon = (x) => {
        setChoose(x);
    };

    return (
        <ul class="list_icon">
            <li >
                <a href="#"
                    style={{ borderLeft: choose === "Home" ? "2px solid white" : "" }}
                    onClick={() => toggleIcon("Home")}
                >
                    <FontAwesomeIcon icon={faHome} style={{ color: "white" }} />
                </a>
            </li>
            <li>
                <a href="#"
                    style={{ borderLeft: choose === "Pizza" ? "2px solid white" : "" }}
                    onClick={() => toggleIcon("Pizza")}>
                    <FontAwesomeIcon icon={faPizzaSlice} style={{ color: "white" }} />
                </a>
            </li>
            <li>
                <a href="#"
                    style={{ borderLeft: choose === "faUtensils" ? "2px solid white" : "" }}
                    onClick={() => toggleIcon("faUtensils")}>
                    <FontAwesomeIcon icon={faUtensils} style={{ color: "white" }} />
                </a>
            </li>
            <li>
                <a href="#"
                    style={{ borderLeft: choose === "Cart" ? "2px solid white" : "" }}
                    onClick={() => toggleIcon("Cart")}
                >
                    <FontAwesomeIcon icon={faCartShopping} style={{ color: "white" }} />
                </a>
            </li>
            <li>
                <a href="#"
                    style={{ borderLeft: choose === "Infor" ? "2px solid white" : "" }}
                    onClick={() => toggleIcon("Infor")}>
                    <FontAwesomeIcon icon={faCircleInfo} style={{ color: "white" }} />
                </a>
            </li>
        </ul>
    );
};

export default Sidebar;
