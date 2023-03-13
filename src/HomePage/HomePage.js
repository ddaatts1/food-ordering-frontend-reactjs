import Catolog from "../Catolog/Catolog";
import Listfood from "../Listfood/Listfood";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FoodDetail from "../FoodDetail/FoodDetail";



const HomePage = () => {

    return (


        <div className="App">
            <Sidebar />
            <Navbar />
            <Catolog />
            <Listfood />
        </div>
    );
}

export default HomePage;