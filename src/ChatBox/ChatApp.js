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
                    const uniqueUser = querySnapshot.docs.reduce((users,curr)=>{
                        // if (!user.includes({
                        //     uid:curr.data().uid,
                        //     displayName:curr.data().displayName})) {
                        //     user.push(
                        //         {
                        //             uid:curr.data().uid,
                        // displayName:curr.data().displayName})
                        // }
                        // return user;
                        const user = {
                            uid: curr.data().uid,
                            displayName: curr.data().displayName,
                        };
                        if (!users.some((u) => u.uid === user.uid && u.displayName === user.displayName)) {
                            users.push(user);
                        }
                        return users;
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

        setToUser(e.target.value)
        setChoose(e.target.value)
        console.log(e.target.value)

    }
    useEffect(()=>{
        console.log("to user: ",toUser)
    },[toUser])




    return(
        <div className="ChatAppParent">
            <div className="selectContainer">
                <div className="selectContainer1">
                    <div className="select" tabIndex="1">
                        {listUser && listUserId.map((v,i)=>{
                            return(
                                <div key={i}>
                                    <input
                                        className="selectopt"
                                        name="test"
                                        type="radio"
                                        id={v.uid}
                                        value={v.uid}
                                        checked={choose === v.uid}
                                        onChange={onSelectChange}
                                    />
                                    <label  htmlFor={v.uid} className="option">
                                        {v.displayName}
                                    </label>

                                </div>
                            )
                        })}
                    </div>

                </div>

            </div>


            {/*{choose != null? <ChatBoxTest id={choose}/>:"chua chon"}*/}

             <ChatBox toUser={toUser}/>

        </div>
    )
}


export  default ChatApp;