import AdminSideBar from "../../sidebar/AdminSideBar";
import AdminNavbar from "../AddItem/AdminNavbar";
import ListItems from "./ListItems";


function ViewListItems(){

    return(
        <div>
            <AdminSideBar/>
            <AdminNavbar/>
            <ListItems/>
        </div>


    )
}


export default ViewListItems;