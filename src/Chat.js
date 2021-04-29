import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, MicOutlined, MoreVert } from '@material-ui/icons'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import React from 'react'
import './Chat.css'

function Chat() {
    const [message, setMessage] = React.useState("");

    const sendMessage = function(event) {
        event.preventDefault();
        // do db stuff here
        setMessage("")
    }

    const changeMessage = function(event) {
        setMessage(event.target.value);
    }

    return (
        <div className="Chat">
            <div className="Chat-header">
                <Avatar />

                <div className="Chat-header-info">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
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
                <p className={`Chat-message ${true && "Chat-message-receiver"}`}> 
                    <span className="Chat-message-name">Yaw</span>
                    Hey guys 
                    <span className="Chat-message-timestamp">3.52pm</span>
                </p>
            </div>

            <div className="Chat-footer">
                <InsertEmoticon />
                <form>
                    <input value={message} onChange={changeMessage} placeholder="Type a message" type="text" />
                    <button onClick={sendMessage}>Send a message</button>
                </form>
                <MicOutlined /> 
            </div>

            
        </div>
    )
}

export default Chat
