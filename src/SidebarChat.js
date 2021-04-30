import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'
import db from './firebase'
import { Link } from 'react-router-dom';

function SidebarChat({id, addNewChat, name}) {
    const [seed, setSeed] = React.useState('')
    const [messages, setMessages] = React.useState('')

    React.useEffect(() => {
        db.collection('rooms').doc(id).collection('messages').orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => (
            setMessages(snapshot.docs.map(doc => doc.data()))
        ))
    }, [id])

    React.useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    const createChat = () => {
        const roomName = prompt("Please enter a name for the chat");

        if (roomName) {
            db.collection('rooms').add({
                name: roomName,

            })
        }

    }

    return  !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="Sidebar-chat">
                <div className="Sidebar-chat-avatar">
                    <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                </div>
                <div className="Sidebar-chat-info">
                    <h4>{name}</h4>
                    <p> {messages[0]?.message} </p>
                </div>
            </div>
        </Link>
    ) : (
        <div className="Sidebar-chat" onClick={createChat}>
            <h2>Add New Chat</h2>
        </div>
    )
}

export default SidebarChat
