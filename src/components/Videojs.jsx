import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

import "videojs-contrib-quality-levels"; // plugin to handle quality levels in HLS/DASH stream
import "videojs-http-source-selector"; // plugin that adds quality selector UI to the player

const Videojs = ({ options, onReady }) => {
  const playerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("vjs-big-play-centered", "video-js");
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        onReady && onReady(player);
      }));

      console.log(player);

      //ABS
      player.ready(() => {
        if (typeof player.httpSourceSelector === "function") {
          player.httpSourceSelector({
            default: "auto", // Let the player choose the best quality automatically
          });
        }
      });

      playerRef.current = player;
    }
  }, [options, onReady]);

  useEffect(() => {
    return () => {
      if (playerRef && !playerRef.current.isDisposed()) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
};

export default Videojs;
