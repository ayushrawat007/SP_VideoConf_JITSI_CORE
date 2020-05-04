import React from 'react';

const ChatButton = (props) =>{
    if (props.chatOn === true) {
        return (
          <div onClick={props.click}>
            <i class='fas fa-comment-slash' style={{'font-size':'20px'}}></i>
          </div>
        )
    }
    return( 
        <div onClick={props.click}>
          <i class='fas fa-comment' style={{'font-size':'20px'}}></i>
        </div>
    )
}


export default ChatButton;