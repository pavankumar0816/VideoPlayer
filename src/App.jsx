import { useRef } from "react";
import "./App.css";
import Videojs from "./components/Videojs";

function App() {
  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: false,
    muted: true,
    controls: true,
    responsive: true,
    playbackRates: [0.25, 0.5, 1, 1.5, 1.75, 2],
    fluid: true,
    sources: [
      {
        src: "https://ik.imagekit.io/your_id/your_video.mp4/ik-master.m3u8?tr=sr-240_360_480_720_1080,l-subtitles,i-yt/english.srt,l-end",
        type: "application/x-mpegURL",
      },
    ],
    poster:
      "https://ik.imagekit.io/your_id/your_video.mp4/ik-thumbnail.jpg?tr=so-5",
    tracks: [
      {
        kind: "captions",
        src: "/english.vtt",
        srcLang: "en",
        label: "English",
        default: true,
      },
      {
        kind: "captions",
        src: "/hindi.vtt",
        srcLang: "hi",
        label: "Hindi",
        default: true,
      },
      {
        kind: "chapters",
        src: "/chapters.vtt",
        srcLang: "en",
        label: "Chapters",
        default: true,
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
  };

  return (
    <div style={{ maxWidth: "800px" }}>
      {/* <video src='https://ik.imagekit.io/your_id/your_video.mp4?tr=w-800,l-subtitles,i-yt/english.srt,l-end'  
       width="800"
       height="450"
       controls
      //  autoPlay
      //  muted
       loop
       poster='https://www.w3schools.com/html/mov_bbb.mp4/ik-thumbnail.jpg?tr=so-5'  
       >
       <track kind='subtitles' 
       src="/english.vtt" 
       srcLang='en'
       label='English'
       default
       /> 
       <track kind='subtitles' 
       src="/hindi.vtt" 
       srcLang='hi'
       label='Hindi'
       /> 
      </video> */}

      <Videojs options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  );
}

export default App;

// installing open source library - Video.js
// npm install --save-dev video.js@7.21.3 videojs-contrib-quality-levels@3.0.0 videojs-http-source-selector
