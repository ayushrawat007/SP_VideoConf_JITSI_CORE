import React from 'react';

const VideoButton = (props) =>{
    if (props.showVideo === true) {
        return (
          <div onClick={props.click}>
            <i class="material-icons">videocam_off</i>
          </div>
        )
    }
    return( 
        <div onClick={props.click}>
          <i class="material-icons">videocam</i>
        </div>
    )
}


export default VideoButton;
