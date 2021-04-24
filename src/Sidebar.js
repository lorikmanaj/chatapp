import React, { Component } from 'react';

import { Avatar, IconButton } from "@material-ui/core";

import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import {SearchOutlined} from "@material-ui/icons";

import SidebarChat from "./SidebarChat";

import './Sidebar.css';
import PropTypes from 'prop-types';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar />
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                
                    <IconButton>
                        < ChatIcon />
                    </IconButton>
                    
                    <IconButton>
                        < MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder="Search or start a chat" />
                    
                </div>
            </div>

            <div className="sidebar_chats">
                <SidebarChat addNewChat />
                <SidebarChat />
            </div>
        </div>
    );
}

// class Sidebar extends Component {
//     constructor(props) {
//         super(props);

//     }

//     componentWillMount() {

//     }

//     componentDidMount() {

//     }

//     componentWillReceiveProps(nextProps) {

//     }

//     shouldComponentUpdate(nextProps, nextState) {

//     }

//     componentWillUpdate(nextProps, nextState) {

//     }

//     componentDidUpdate(prevProps, prevState) {

//     }

//     componentWillUnmount() {

//     }

//     render() {
//         return (
//             <div>

//             </div>
//         );
//     }
// }

// Sidebar.propTypes = {

// };

export default Sidebar;