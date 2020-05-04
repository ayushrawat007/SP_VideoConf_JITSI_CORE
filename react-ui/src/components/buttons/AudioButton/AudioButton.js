import React from 'react';

const MuteButton = (props) =>{
    if (props.isMuted === true) {
        return (
          <div onClick={props.click}>
            <i class='fas fa-microphone-alt' style={{'font-size':'20px'}}></i>
          </div>
        )
    }
    return( 
        <div onClick={props.click}>
          <i class='fas fa-microphone-alt-slash' style={{'font-size':'20px'}}></i>
        </div>
    )
}


export default MuteButton;


