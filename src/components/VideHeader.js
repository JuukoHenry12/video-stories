import React from 'react';
import './VideoHeader.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined'
const VideoHeader=()=>{
          return(
           <div className='videoheader'>
             <ArrowBackIosIcon/>
             <h3>Shorts</h3>
             <CameraAltOutlinedIcon/>
           </div>
          )
}


export default VideoHeader;