import React, { useState, useEffect } from 'react';

function AudioPlayer({ audioSrc, id }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audioElement = document.getElementById(`audio-element-${id}`);
    const audioFill = document.getElementById(`audio-fill-${id}`);

    const handleTimeUpdate = () => {
      setCurrentTime(audioElement.currentTime);
      setDuration(audioElement.duration);

      const percentage = (audioElement.currentTime / audioElement.duration) * 100;
      audioFill.style.width = `${percentage}%`;
    };

    audioElement.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      // Cleanup by removing the same event listener when the component unmounts
      audioElement.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [id]);

  return (
    <div className="audio-player">
      <audio id={`audio-element-${id}`} className="relative z-10" controls>
        <source src={audioSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="audio-timeline">
        <div id={`audio-fill-${id}`} className="audio-fill bg-black absolute top-0 left-0 h-full transition duration-300"></div>
      </div>
    </div>
  );
}

export default AudioPlayer;
