import ChatBox from "./ChatBox";
import "./ChatApp.css"
import {useEffect, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "./firebaseConfig";
import {collection, getDocs, orderBy, query, where} from "@firebase/firestore";
import ChatBoxTest from "./ChatBoxTest";



function ChatApp(){

    const [user] = useAuthState(auth)
    const [toUser,setToUser] = useState();
    const [listUserId,setListUserId] = useState([])
    const [listUser,setListUser] = useState([])
    const [choose, setChoose] = useState(null)


    const array = ["banana","mango","berry","watermelon"]



    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                const getMessages = async () => {
                    const querySnapshot = await getDocs(query(collection(db, 'messages'),
                        where('toUser', '==', user.uid)
                        // where("toUser","==",user.uid)
                    ));

                    const messageData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                    console.log("docs: ",querySnapshot.docs)
                    const uniqueUser = querySnapshot.docs.reduce((user,curr)=>{
                        if (!user.includes(curr.data().uid)) {
                            user.push(curr.data().uid);
                        }
                        return user;
                    },[]);

                    console.log("data: ",querySnapshot.docs)
                    console.log("uniqueUser: ",uniqueUser)
                    setListUserId(uniqueUser)
                };
                getMessages();
            }
        });

        return unsubscribe;
    }, []);

    useEffect(()=>{
      setChoose("asasas")

    },[])


    function onSelectChange(e){

        setChoose(e.target.value)
        console.log(e.target.value)

    }




    return(
        <div className="ChatAppParent">
            <div className="selectContainer">
                <div className="selectContainer1">
                    <div className="select" tabIndex="1">
                        {array.map((v,i)=>{
                            return(
                                <div key={i}>
                                    <input
                                        className="selectopt"
                                        name="test"
                                        type="radio"
                                        id={v}
                                        value={v}
                                        checked={choose === v}
                                        onChange={onSelectChange}
                                    />
                                    <label  htmlFor={v} className="option">
                                        {v}
                                    </label>

                                </div>
                            )
                        })}
                    </div>

                </div>

            </div>


            {/*{choose != null? <ChatBoxTest id={choose}/>:"chua chon"}*/}

            <ChatBox toUser="DqCqzmElLuhHQSWypCvoHfjxynh1"/>

        </div>
    )
}


export  default ChatApp;