import React, {useEffect, useRef, useState} from "react";
import validator from "validator";
import "./AddBox.css"
import axios from "axios";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';




const AddBox = () => {
    const [image, setImage] = useState(null);
    const filepickerRef = useRef(null);

    const firebaseConfig = {
        apiKey: "AIzaSyBeKFJZLSF6n3eVckKjD3DoNTc-lVvMPCo",
        authDomain: "orderup-1678757977213.firebaseapp.com",
        projectId: "orderup-1678757977213",
        storageBucket: "orderup-1678757977213.appspot.com",
        messagingSenderId: "79812574000",
        appId: "1:79812574000:web:f8cc2cd153302428e6e6f5",
        measurementId: "G-TVS2KTGT6C"
    };

    firebase.initializeApp(firebaseConfig);

    const storage = firebase.storage();

    const uploadImage = (e) => {
        const file = e.target.files[0];
        const uploadTask = storage.ref(`images/${file.name}`).put(file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // progress function
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                console.log(`Upload progress: ${progress}%`);
            },
            (error) => {
                // error function
                console.error(error);
            },
            () => {
                // complete function
                storage
                    .ref("images")
                    .child(file.name)
                    .getDownloadURL()
                    .then((url) => {
                        setImage(url);
                        console.log(`image URL: ${url}`);
                    });
            }
        );
    };

    const [requestData,setRequestData] = useState({
        name:"",
        price:0,
        detail:"",
        images:[],
        restaurant_id:""
    });

    const  [name,setName ]= useState("");
    const [price,setPrice] = useState(0);
    const [detail,setDetail] = useState("");
    const[ restaurant_id,setRestaurant_id ]= useState("");
    const [images,setImages] = useState([]);



    const addItem = async () => {
        console.log(requestData)
        if (
            isValid(requestData)
        ) {
                axios.post('http://localhost:8081/api/OrderUp/ADD_ITEM', requestData)
                    .then((response) => {
                        console.log(response);
                    })
                    .catch((error) => {
                        console.error(error);
                    });

            alert("Thêm thành công");
        }

    };


    const isValid = (requestData) => {

        if (validator.isEmpty(requestData.name)) {
            alert("Please input your itemName");
            return false;
        }
        if (requestData.price == 0) {
            alert("Please input your price");
            return false;
        }
        if (requestData.detail == 0) {
            alert("Please input your detail");
            return false;
        }
        if(requestData.images.at(0) == null ){
            alert("Please input your image");
            return false;
        }


        // if (requestData.images.) {
        //     alert("Please input your image");
        //     return false;
        // }
        if (validator.isEmpty(requestData.restaurant_id)) {
            alert("Please input your id");
            return false;
        }

        return true;
    };


    useEffect(()=>{

        requestData.detail = detail;
        requestData.name = name;
        requestData.price = price;
        requestData.images = [...images,image];
    },[name,price,detail,image,restaurant_id])


    useEffect(()=>{


        requestData.restaurant_id = "63f32452db59e56a489911ef"
    },[])






    return (
        <div className="addBox">
            <div className="addbox">
                <div className="addBoxTitle">
                    <div className="addBox_Title">Thêm mới  </div>
                </div>
                <div className="addBox__subtitle"></div>
                <div className="addBox__form">
                    {image && (
                        <div
                            className="addBox_image"
                            onClick={() => filepickerRef.current.click()}
                        >
                            <img src={image} alt="avatar"/>
                        </div>
                    )}
                    {!image && (
                        <div
                            onClick={() => filepickerRef.current.click()}
                            className="addBox__upload-container"
                        >
                            Choose File
                        </div>
                    )}
                    <input
                        className="addBox__upload-image"
                        hidden
                        onChange={uploadImage}
                        ref={filepickerRef}
                        type="file"
                    />
                    <input type="text" placeholder="Tên món ăn "  onChange={(e)=>{setName(e.target.value)}}/>
                    <input type="number" placeholder="Giá tiền "  onChange={(e)=>{setPrice(e.target.value)}}/>
                    <input type="text" placeholder="danh mục"  />
                    <textarea
                        className="addBox__about"
                        placeholder="Mô tả ..."
                         onChange={(e)=>{setDetail(e.target.value)}}
                    ></textarea>
                    <button className="addBox__btn" onClick={addItem}>
                        Thêm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddBox;