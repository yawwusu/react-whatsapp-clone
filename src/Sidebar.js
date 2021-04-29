import React from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from '@material-ui/core'
import ChatIcon from '@material-ui/icons/Chat'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import  SearchOutlined  from '@material-ui/icons/SearchOutlined'

function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="Sidebar-header">
                <Avatar />
                <div className="Sidebar-header-right">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="Sidebar-search">
                <div className="Sidebar-search-container">
                    <SearchOutlined />
                    <input placeholder="Search or start a new chat" type="text" />
                </div>
            </div>
            
            <div className="Sidebar-chats">

            </div>

        </div>
    )
}

export default Sidebar
