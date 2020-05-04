import React from 'react';

const DisconnectButton = (props) =>{
    if (props.isDisconnected === true) {
        return (
          <div onClick={props.click}>
            <i class="material-icons">call_end</i>
          </div>
        )
    }
    return( 
        <div onClick={props.click}>
          <i class="material-icons">call_end</i>
        </div>
    )
}


export default DisconnectButton;