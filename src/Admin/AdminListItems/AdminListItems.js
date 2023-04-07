
import "./AdminListItems.css"
import UsePagination from "./UsePagination";
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function AdminListItems(){


    const [res,setRes] = useState()
    const [totalPage,setTotalPage] = useState(5);
    const [pageContent, setPageContent] = useState()
    const [page, setPage] = useState(0)
    const [empty, setEmpty] = useState(false)
    const handlePageChange = (page) => {

    };



    function fetchData(){

        const token = localStorage.getItem("token")
        axios
            .get(`http://localhost:8081/api/admin/OrderUp/GET_ITEMS?page=${page}`, {
                headers: {
                    authorization:
                    `Bearer ${token}`
                },
            })
            .then((response) => {
                console.log("data: ", response.data.data);
                setRes(response.data.data);
                const totalPages = response.data.data.totalPages ;
                if (totalPages <= 42) {
                    console.log("totalPages test: ",totalPages)
                    setTotalPage(totalPages);
                } else {
                    console.log("totalPages test: ",totalPages)


                    setTotalPage(42);
                }            })
            .catch((error) => {
                console.log(error);
            });
    }
    useEffect(()=>{
       fetchData()
    },[page])


    useEffect(()=>{

        console.log("data:",res)
        console.log("totalPages: ",totalPage)

    },[totalPage])

    // useEffect(() => {
    //     handlePageChange(0);
    // }, []);


    function onOffItem(id,status){

        const requestData = {
            _id:id,
            status: status
        }
        const token = localStorage.getItem("token")
        console.log("requestData: ",requestData)
        axios.post('http://localhost:8081/api/admin/OrderUp/ON_OFF_ITEM',requestData,{
                headers: {
                    authorization:
                        `Bearer ${token}`,
                },
            }
            ).then((response)=>{
                console.log("on off response: ",response)
                if(response.data.code == 1){
                    alert("thanh cong ")
fetchData()                }
                else {
                    alert("that bai!")
                }
        }).catch((error)=>{
            alert("that bai")
        })

    }



    function deleteItem(_id){

        const token = localStorage.getItem("token")
        console.log("item delete: ",_id)
        axios.post(`http://localhost:8081/api/admin/OrderUp/DELETE_ITEM?id=${_id}`,"",{
                headers: {
                    authorization:
                        `Bearer ${token}`,
                },
            }
        ).then((response)=>{
            console.log("delete response: ",response)
            if(response.data.code == 1){
                alert("delete thanh cong ")
                fetchData()                }
            else {
                alert("delete that bai!")
            }
        }).catch((error)=>{
            alert("delete that bai")
        })

    }


    return (
        <>
        <div className="adminListItemContainer">


            <table className="adminListItem">
                <th className="Item_header">
                    <td style={{"flexGrow":"1"}} >STT</td>
                    <td style={{"flexGrow":"2"}}>TÊN</td>
                    <td style={{"flexGrow":"1"}}>GIÁ</td>
                    <td style={{"flexGrow":"1"}}>TRẠNG THÁI</td>
                    <td style={{"flexGrow":"3"}}></td>
                </th>
                {res && res.content.map((item,i)=>{
                    return(
                        <tr key={i} className="Item">
                            <td style={{"flexGrow":"1"}}>{i+1}</td>
                            <td style={{"flexGrow":"2"}}>{item.name}</td>
                            <td style={{"flexGrow":"1"}}>{item.price}</td>
                            <td style={{"flexGrow":"1"}}>{item.status}</td>
                            <td style={{"flexGrow":"2"}}>
                                <button onClick={()=>{onOffItem(item._id,item.status==="ON"?"OFF":"ON")}}  style={item.status == "ON"?{"background":"#C7390C"}:{"background":"#245618"}}>{item.status == "ON"? "off":"on"}</button>
                                <button style={{"background":"#7F4F40"}} ><Link style={{"color":"white"}} to={`EditItem?_id=${item._id}`}>edit</Link></button>

                                <button onClick={()=>{deleteItem(item._id)}} style={{"background":"#000000"}}>delete</button>

                            </td>
                        </tr>
                    )
                })}

                <div className="pagination" >

                    {  [...Array(totalPage)].map((i, index) => {
                        return (
                            <button className={`pageButton ${page === index ? 'active' : ''}`} key={index} onClick={() => setPage(index)}>
                                {index + 1}
                            </button>
                        )
                    })}
                </div>

            </table>





            </div>


        </>
    )
}


export default AdminListItems;