import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import VideoCard from './components/VideoCard';
import BottomNavbar from './components/BottomNavbar';
import TopNavbar from './components/TopNavbar';


// This array holds information about different videos
const videoUrls = [
  {
    url: require('./videos/video1.MP4'),
    profilePic: '',
    username: 'trumptok',
    description: 'TRUMP 2024 BABY',
    song: 'TrumkTok - Original Audio',
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: require('./videos/video2.MP4'),
    profilePic: '',
    username: 'trumptok',
    description: 'Trump is so sigma',
    song: 'TrumkTok - Original Audio',
    likes: '13.4K',
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: require('./videos/video3.MP4'),
    profilePic: '',
    username: 'trumptok',
    description: 'ADD TRUMP DANCE TO FORTNITE',
    song: 'TrumkTok - Original Audio',
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: require('./videos/video4.MP4'),
    profilePic: '',
    username: 'trumptok',
    description: 'Say bye bye to Kamala',
    song: 'TrumkTok - Original Audio',
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: require('./videos/video5.MP4'),
    profilePic: '',
    username: 'trumptok',
    description: 'In Trump We Trust',
    song: 'TrumkTok - Original Audio',
    likes: Math.floor(Math.random() * 10000),
    comments: Math.floor(Math.random() * 500),
    saves: Math.floor(Math.random() * 300),
    shares: Math.floor(Math.random() * 100),
  },
  {
    url: require('./videos/video6.MP4'),
    profilePic: '',
    username: 'trumptok',
    description: 'Kamala got that GYAAT',
    song: 'TrumkTok - Original Audio',
    likes: Math.floor(Math.random() * 10000),
    comments: Math.floor(Math.random() * 500),
    saves: Math.floor(Math.random() * 300),
    shares: Math.floor(Math.random() * 100),
  },
  {
    url: require('./videos/video7.MP4'),
    profilePic: '',
    username: 'trumptok',
    description: 'Tell them Mr. President',
    song: 'TrumkTok - Original Audio',
    likes: Math.floor(Math.random() * 10000),
    comments: Math.floor(Math.random() * 500),
    saves: Math.floor(Math.random() * 300),
    shares: Math.floor(Math.random() * 100),
  },
  {
    url: require('./videos/video8.MP4'),
    profilePic: '',
    username: 'trumptok',
    description: 'Winner winner chicken dinner',
    song: 'TrumkTok - Original Audio',
    likes: Math.floor(Math.random() * 10000),
    comments: Math.floor(Math.random() * 500),
    saves: Math.floor(Math.random() * 300),
    shares: Math.floor(Math.random() * 100),
  },
  {
    url: require('./videos/video9.MP4'),
    profilePic: '',
    username: 'trumptok',
    description: 'Good Morning Patriots',
    song: 'TrumkTok - Original Audio',
    likes: Math.floor(Math.random() * 10000),
    comments: Math.floor(Math.random() * 500),
    saves: Math.floor(Math.random() * 300),
    shares: Math.floor(Math.random() * 100),
  },
];


function App() {
  const [videos, setVideos] = useState([]);
  const videoRefs = useRef([]);

  useEffect(() => {
    setVideos(videoUrls);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8, // Adjust this value to change the scroll trigger point
    };

    // This function handles the intersection of videos
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const videoElement = entry.target;
          videoElement.play();
        } else {
          const videoElement = entry.target;
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // We observe each video reference to trigger play/pause
    videoRefs.current.forEach((videoRef) => {
      observer.observe(videoRef);
    });

    // We disconnect the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [videos]);

  // This function handles the reference of each video
  const handleVideoRef = (index) => (ref) => {
    videoRefs.current[index] = ref;
  };

  return (
    <div className="app">
  {/* Header Section */}
  <header className="header">
    <div className="logo">
      <img src="./photos/TRUMPTOK-TRANSP.png" alt="logo" className="logo-image" />
    </div>
    <nav>
      <a href="https://t.me/trumptoksolana" className="styled-link">[tg]</a>
      <a href="https://x.com/trumptok_sol" className="styled-link">[twitter]</a>
      <a href="https://pump.fun/coin/" className="styled-link highlight-link">[pump.fun]</a>
    </nav>
  </header>

  {/* Notification Banner */}
  <div className="notification-banner">
    <span>CA: </span>
    <span className="blue-highlight"> updating... </span>
  </div>

  {/* Random Images */}
  {/* Main Content */}
  <div className="container">
    <TopNavbar className="top-navbar" />

    {/* Video Feed */}
    {videos.map((video, index) => (
      <VideoCard
        key={index}
        username={video.username}
        description={video.description}
        song={video.song}
        likes={video.likes}
        saves={video.saves}
        comments={video.comments}
        shares={video.shares}
        url={video.url}
        profilePic={video.profilePic}
        setVideoRef={handleVideoRef(index)}
        autoplay={index === 0}
      />
    ))}

    {/* Search Section */}
    <div className="search-container">
      <input type="text" placeholder="search for token" />
      <button>search</button>
    </div>

    {/* Filters */}
    <div className="filters">
      <select>
        <option>sort: featured 🔥</option>
      </select>
      <div className="toggle-buttons">
        <span>Show animations: </span>
        <button>On</button>
        <button>Off</button>
        <span>Include nsfw: </span>
        <button>On</button>
        <button>Off</button>
      </div>
    </div>

    <BottomNavbar className="bottom-navbar" />
  </div>
</div>

  );
  
  
}

export default App;
