import React from 'react';
import { Button, Avatar } from '@material-ui/core'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import { Favorite, ModeComment, MoreHoriz, Send } from '@material-ui/icons'
import Ticker from 'react-ticker';
import './VideoFooter.css';
const VideoFooter = ({ channel, avatarSrc, song, likes, shares }) => {
       
 return(
     <div className='videoFooter'>
          <div className='videoFooter__text'>
               <Avatar src={avatarSrc}/>
               <h3>
                   {channel}.<Button>follow</Button>      
               </h3>
          </div>
          <div className='videoFooter__ticker'>
                    <MusicNoteIcon className='videoFooter__icon'/>
                    <Ticker mode='smooth'>
                        {
                          ({index})=>(
                                    <>
                                    <h1>{song}</h1>
                                    </>
                          )        
                        }      
                    </Ticker>
          </div>
          <div className='videoFooter__actions'>
                    <div className='videoFooter__actionLeft'>
                              <Favorite fontSize='large'/>
                              <p>{likes}</p>
                    </div>
          </div>
     </div>

 )
}



export default VideoFooter;
