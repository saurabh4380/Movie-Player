import React from 'react'
import ReactPlayer from 'react-player'

const Player = ({selectedURL}) => {
    return (
        <div style={{display:"flex",justifyContent:"center"}}>
        {/* <video src ={selectedURL}></video> */}
            <ReactPlayer url={selectedURL} width='80%'/>
        </div>
    )
}

export default Player
