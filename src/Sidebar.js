import React from 'react'
import './Sidebar.css'
import Avatar from '@material-ui/core/Avatar'
import ChatIcon from '@material-ui/icons/Chat'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import MoreVertIcon from '@material-ui/icons/MoreVert'

function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="Sidebar-header">
                <Avatar />
                <DonutLargeIcon />
                <ChatIcon />
                <MoreVertIcon />
            </div>

            <div className="Sidebar-search">

            </div>
            
            <div className="Sidebar-chats">

            </div>

        </div>
    )
}

export default Sidebar
