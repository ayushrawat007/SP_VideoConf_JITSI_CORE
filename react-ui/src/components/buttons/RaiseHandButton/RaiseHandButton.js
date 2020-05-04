import React from 'react';

const RaiseHand = (props) =>{
    if (props.raiseHand === true) {
        return (
          <div onClick={props.click}>
            <i class='far fa-hand-rock' style={{'font-size':'20px'}}></i>
          </div>
        )
    }
    return( 
        <div onClick={props.click}>
          <i class='far fa-hand-paper' style={{'font-size':'20px'}}></i>
        </div>
    )
}

    
export default RaiseHand;
