import React, { useEffect, useState } from 'react';

import { Avatar } from "@material-ui/core";

import './SidebarChat.css';

import db from "./firebase";

function SidebarChat({ addNewChat }) {

    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Enter chat name:");

        if (roomName) {
            db.collection('rooms').add({
                name: roomName,
            });
        }
    };

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}}.svg`} />
            <div className="sidebarChat_info">
                <h2>Room name</h2>
                <p>Last Message...</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat}
            className="sidebarChat">
                <h2>Add new chat</h2>
            </div>
    )
}

export default SidebarChat;
