import React, { useState, useEffect } from 'react';
import { PauseFill, PlayFill } from '../../assets/svgIcons';

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}

function AudioPlayer(props) {
    const { id, name, meaning, audioSrc } = props;
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState("");

    useEffect(() => {
        const audioElement = document.getElementById(`audio-element-${id}`);
        const audioFill = document.getElementById(`audio-fill-${id}`);

        if (!audioElement || !audioFill) {
            // Element not found, exit early to avoid errors
            return;
        }

        const handleTimeUpdate = () => {
            setCurrentTime(audioElement.currentTime);

            const percentage = (audioElement.currentTime / duration) * 100;
            audioFill.style.width = `${percentage}%`;
        };

        const handleEnded = () => {
            setIsPlaying(false);
            
            let nextAudio = parseInt(id) + 1;
            if (nextAudio < 115) {
                document.querySelector(`.audio-player-${nextAudio} .player-wrapper`).click();
            }
        };

        const handleLoadedMetadata = () => {
            setDuration(audioElement.duration);
        };

        audioElement.addEventListener('timeupdate', handleTimeUpdate);
        audioElement.addEventListener('ended', handleEnded);
        audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);

        return () => {
        // Cleanup by removing the event listeners when the component unmounts
            audioElement.removeEventListener('timeupdate', handleTimeUpdate);
            audioElement.removeEventListener('ended', handleEnded);
            audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
    }, [id, duration]);

    const handlePlayPause = () => {
        const audioElement = document.getElementById(`audio-element-${id}`);

        if (audioElement.paused) {
            audioElement.play();
            setIsPlaying(true);
        } else {
            audioElement.pause();
            setIsPlaying(false);
        }
    }

    return (
        <div className={`audio-player-${id} bg-white p-5 relative group`}>
            <div className="cursor-pointer flex gap-6 items-center">
                <div className="flex gap-6 items-center w-full player-wrapper" onClick={handlePlayPause}>
                    <div className="flex items-center justify-center">
                        <span className="absolute text-2xl font-bold group-hover:text-white transition duration-300">{id}.</span>
                        <button className="opacity-0 group-hover:opacity-100 transition duration-300 relative z-10">{isPlaying ? <PauseFill svgStyle="w-12 aspect-square text-teal-500 hover:text-teal-600" /> : <PlayFill svgStyle="w-12 aspect-square text-teal-500 hover:text-teal-600" />}</button>
                    </div>
                    <p className="font-bold text-xl flex items-center gap-2">{name} <span>-</span> <span className="font-medium uppercase text-sm text-slate-400">{meaning}</span></p>
                    <audio id={`audio-element-${id}`} className="relative z-10 hidden"><source src={audioSrc} type="audio/mp3" /></audio>
                </div>
                {/* <div className="text-center w-fit">
                    <Link to={audioSrc} className="bg-gradient-to-br from-teal-400 to-teal-500 hover:bg-gradient-to-bl text-white rounded-md px-8 py-2 inline-block transition duration-300 text-lg relative z-50 opacity-0 group-hover:opacity-100 animate-gradient" target="_blank">Download</Link>
                </div> */}
                <div className="font-medium text-right w-full" onClick={handlePlayPause}>
                    <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
                </div>
            </div>
            <div className="audio-timeline">
                <div id={`audio-fill-${id}`} className="audio-fill bg-gradient-to-br from-teal-400 to-teal-500 hover:bg-gradient-to-bl absolute bottom-0 left-0 h-[4px] transition duration-300"></div>
            </div>
        </div>
    );
}

export default AudioPlayer;
