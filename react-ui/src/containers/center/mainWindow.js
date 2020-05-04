import React,{Component} from 'react'

import VideoWindow from '../../components/videoWindow/videoWindow'

import './mainWindow.css'


import AudioButton from '../../components/buttons/AudioButton/AudioButton'
import VideoButton from '../../components/buttons/VideoButton/VideoButton'
import RaisHandButton from '../../components/buttons/RaiseHandButton/RaiseHandButton'
import DisconnectButton from '../../components/buttons/DisconnectButton/DisconnectButton';
import ChatButton from '../../components/buttons/ChatButton/ChatButton'
import ScreenShareButton from '../../components/buttons/ScreenShareButton/ScreenShareButton'
import ChatBox from '../../components/ChatBox/ChatBox'


 class MainWindow extends Component{
    constructor(props){
         super(props)

     }

     state={
        isMuted:false,
        showVideo:true,
        raiseHand:false,
        isDisconnected:false,
        chatOn:false,
        screenShared:false
      }


     toggleAudio = () => {
        var muteState=this.state.isMuted
        this.setState({isMuted : !muteState}) 
        console.log(this.state.isMuted)
      }
    
      toggleVideo = () => {
        var videoState=this.state.showVideo
        this.setState({showVideo : !videoState}) 
        console.log(this.state.showVideo)
      }
    
      toggleHandRaise = () => {
        var raiseHandState=this.state.raiseHand
        this.setState({raiseHand : !raiseHandState}) 
        console.log(this.state.raiseHand)
      }
    
      disconnectCall =() =>{
        var callState=this.state.isDisconnected
        this.setState({isDisconnected: !callState})
        console.log(this.state.isDisconnected)
      }
    
      toggleChat =() =>{
        var chatState=this.state.chatOn
        this.setState({chatOn: !chatState})
        console.log(this.state.chatOn)
      }
    
      screenShareHandler =() =>{
        var screenShareState=this.state.screenShared
        this.setState({screenShared: !screenShareState})
        console.log(this.state.screenShared)
      }
    



    render(){
    return(

        <div class="main-window">
            
            <div className='buttons'>
            <ChatButton chatOn = {this.state.chatOn} click={this.toggleChat} />
            <RaisHandButton raiseHand = {this.state.raiseHand} click={this.toggleHandRaise} />
            <AudioButton isMuted = {this.state.isMuted} click={this.toggleAudio} />
            <DisconnectButton isDisconnected = {this.state.isDisconnected} click={this.disconnectCall} />
            <VideoButton showVideo = {this.state.showVideo} click={this.toggleVideo} />
            <ScreenShareButton screenShared = {this.state.screenShared} click={this.screenShareHandler} />
            </div>
            
        </div>
    )
    }
}

export default MainWindow