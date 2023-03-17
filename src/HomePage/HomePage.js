import Catolog from "../Catolog/Catolog";
import Listfood from "../Listfood/Listfood";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";


const HomePage = () => {

    return (


        <div className="App">
            <Sidebar/>
            <Navbar/>
            <Catolog/>
            <Listfood/>
        </div>
    );
}

export default HomePage;