
import {auth, db} from "./firebaseConfig"
import {useEffect, useRef, useState} from "react";
import {addDoc, collection, getDocs, query, where,orderBy} from "@firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {useAuthState} from "react-firebase-hooks/auth";
import "./ChatBox.css"
import * as PropTypes from "prop-types";



function SignOut() {
    return auth.currentUser && (
        <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
}

export  default  function ChatBox(props){

    const [user] = useAuthState(auth)

    return (
            <div className="ChatApp">


                <header>
                    <h1>OrderUp!</h1>
                    <SignOut/>
                </header>

                <section>

                    {user ? <ChatRoom toUser={props.toUser} /> : <SignIn />

                    }{
                        console.log("toUser: ",props.toUser)
                }
                    <div>{user? user.displayName:"chua dang nhap"}</div>
                </section>

            </div>

    );
}

function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (<>
        <div className={`message ${messageClass}`}>
            <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
            <p>{text}</p>
        </div>
    </>)
}

ChatMessage.propTypes = {message: PropTypes.any};

function ChatRoom(props){

    const [user] = useAuthState(auth)

    const dummy = useRef();
    const [formValue, setFormValue] = useState('');
    const messagesRef = collection(db,"messages")
    const [messages,setMessages] = useState([]);
    const querySnapshot =  getDocs(query(messagesRef,
            where('uid', 'in', [user.uid,props.toUser]),
            where("toUser","in",[user.uid,props.toUser]),
            orderBy("createdAt","asc")
        )
    );

    useEffect(() => {
        const getMessages = async () => {

            const messageData = (await querySnapshot).docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            console.log(messageData)
            setMessages(messageData);
        };

        getMessages();
    },[querySnapshot]);

    useEffect(()=>{
        console.log(messages)

        console.log("uid: ",auth.currentUser.uid)
        console.log("name: ",auth.currentUser.displayName)
    },[])

        const sendMessage = async (e) => {
            e.preventDefault();

            const { uid, photoURL,displayName } = auth.currentUser;

            await addDoc(collection(db, "messages"), {
                text: formValue,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                uid,
                displayName,
                toUser: props.toUser,
                photoURL
            });


            setFormValue('');
            dummy.current.scrollIntoView({ behavior: 'smooth' });
        }


    return(<>
            <main>

                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

                <span ref={dummy}></span>

            </main>

            <form onSubmit={sendMessage}>

                <input className="chatBoxInput" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="chat" />

                <button type="submit" disabled={!formValue}>🕊️</button>

            </form>
        </>
    )
}



function SignIn() {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <>
            <button className="sign-in" onClick={signInWithGoogle}>Đăng nhập bằng Google</button>
            <p>Đăng nhập để trò chuyện cùng nhà hàng!</p>
        </>
    )

}
