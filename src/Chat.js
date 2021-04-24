import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from "@material-ui/core";

import {AttachFile, MoreVert, SearchOutlined} from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import "./Chat.css";

// import { useParams } from 'react-router-dom';
import db from './firebase';
import firebase from 'firebase';
// import {useStateValue} from "./StateProvider";

function Chat() {

    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    // const {roomId} = useParams();
    // const [roomName, setRoomName] = useState("");
    // const [messages, setMessages] = useState([]);
    // const [{user}, dispatch] = useStateValue();

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        // db.collection('rooms').doc(roomId).collection('messages').add({
        //     message: input,
        //     // name: user.displayName,
        //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        // })

        setInput("");
    }

    return (
        <div className="chat">
            
            <div className="chat_header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}}.svg`} />

                <div className="chat_headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    
                    <IconButton>
                        < MoreVert />
                    </IconButton>
                </div>
            </div> 

            <div className="chat_body">
                <p className={`chat_message ${true && "chat_receiver"}`}>
                    He
                    
                    <span className="chat_name">test
                    </span>
                    <span className="chat_timestamp">4:00 pm</span>
                </p>
            </div>

            <div className='chat_footer'>
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type a message"/>
                    <button type="submit" onClick={sendMessage}> Send a Message</button>
                </form>
                <MicIcon/>
            </div>

        </div>
    )
}

export default Chat;
