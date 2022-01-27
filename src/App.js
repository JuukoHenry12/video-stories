import './App.css';
import VideoCard from './components/VideoCard'
function App() {
  return (
    <div className="App">
      <div className='app_top'>
       <img src='logo192.png' alt='App logo' className='app_logo'/>
       <h1>Shorts</h1>
      </div>
      <div className='app_videos'>
          <VideoCard
             url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4"
             channel="TWD"
             avatarSrc="https://pbs.twimg.com/profile_images/1020939891457241088/fcbu814K_400x400.jpg"
             song="I am a Windows PC"
             likes={950}
             shares={200}
          />
          <VideoCard
              url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169739/video2_mecbdo.mp4"
              channel="nabendu"
              avatarSrc="https://pbs.twimg.com/profile_images/1020939891457241088/fcbu814K_400x400.jpg"
              song="I am a good PC"
              likes={850}
              shares={150}
          />
      </div>
    </div>
  );
}

export default App;
