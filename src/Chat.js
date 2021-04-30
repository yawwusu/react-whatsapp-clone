import React from 'react'
import { useParams } from 'react-router'
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, MicOutlined, MoreVert } from '@material-ui/icons'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import './Chat.css'
import db from './firebase'
import firebase from 'firebase'
import { useStateValue } from './StateProvider'

function Chat() {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = React.useState("");
    const [messages, setMessages] = React.useState([])
    const { roomId } = useParams();
    const [roomName, setRoomName] = React.useState("") 

    React.useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ))

            db.collection('rooms').doc(roomId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot(snapshot => (setMessages(snapshot.docs.map(doc => doc.data()))))
        }
    }, [roomId])

    const sendMessage = function(event) {
        event.preventDefault();
        db.collection('rooms').doc(roomId).collection('messages').add({
            name: user.displayName,
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("")
    }

    const changeInput = function(event) {
        setInput(event.target.value);
    }

    return (
        <div className="Chat">
            <div className="Chat-header">
                <Avatar />

                <div className="Chat-header-info">
                    <h3>{roomName}</h3>
                    <p>last seen {new Date(messages[messages.length-1]?.timestamp?.toDate()).toUTCString()}</p>
                </div>

                <div className="Chat-header-right">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="Chat-body">
                {messages.map(message => (
                    <p className={`Chat-message ${message.name === user.displayName && "Chat-message-receiver"}`}> 
                        <span className="Chat-message-name">{message.name}</span>
                        {message.message}
                        <span className="Chat-message-timestamp">{new Date(message.timestamp?.toDate()).toUTCString()}</span>
                    </p>
                ))}
            </div>

            <div className="Chat-footer">
                <InsertEmoticon />
                <form>
                    <input value={input} onChange={changeInput} placeholder="Type a message" type="text" />
                    <button onClick={sendMessage}>Send a message</button>
                </form>
                <MicOutlined /> 
            </div>

            
        </div>
    )
}

export default Chat
