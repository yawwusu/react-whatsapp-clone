import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'

function SidebarChat({addNewChat}) {
    const [seed, setSeed] = React.useState(123);

    React.useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    const createChat = () => {
        const roomName = prompt("Please enter a name for the chat");

        if (roomName) {
            //do some db stuff here
        }

    }

    return  !addNewChat ? (
        <div className="Sidebar-chat">
            <div className="Sidebar-chat-avatar">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            </div>
            <div className="Sidebar-chat-info">
                <h4>Room name</h4>
                <p> Last message...</p>
            </div>
        </div>
    ) : (
        <div className="Sidebar-chat" onClick={createChat}>
            <h2>Add New Chat</h2>
        </div>
    )
}

export default SidebarChat