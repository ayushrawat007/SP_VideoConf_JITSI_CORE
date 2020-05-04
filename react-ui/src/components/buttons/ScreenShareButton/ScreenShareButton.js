import React from 'react';

const ScreenShareButton = (props) =>{
    if (props.screenShared === true) {
        return (
          <div onClick={props.click}>
            <i class="material-icons" style={{"font-size":"24px"}}>computer</i>
          </div>
        )
    }
    return( 
        <div onClick={props.click}>
          <i class="material-icons" style={{"font-size":"24px"}}>computer</i>
        </div>
    )
}


export default ScreenShareButton;