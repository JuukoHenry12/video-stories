import React, { useState,useRef } from 'react';
import './Video.css'
import VideoHeader from './VideHeader'
import VideoFooter from './VideoFooter';
const VideoCard = ({ url, channel, avatarSrc, song, likes, shares }) => {
          const [playing, setPlaying] = useState(false)
          const videoRef = useRef(null)

          const handleVideoPress = () => {
                    if (playing) {
                              videoRef.current.pause()
                              setPlaying(false)
                    } else {
                              videoRef.current.play()
                              setPlaying(true)
                    }
          }
          return (
                    <div className='videoCard'>
                              <VideoHeader />
                              <video
                                        src={url}
                                        className='videoCard__Player'
                                        alt="Short Video App"
                                        loop
                                        ref={videoRef}
                                        onClick={handleVideoPress}
                              />

                              <VideoFooter
                                        channel={channel}
                                        likes={likes}
                                        shares={shares}
                                        avatarSrc={avatarSrc}
                                        song={song}
                              />
                    </div>
          );
}

export default VideoCard 
