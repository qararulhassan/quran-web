// Desc: List Item component
import React, { useState, useEffect, useRef } from 'react'
import { Heart, HeartFill, Play, Right, Share, Copy, Mecca, Madina, Pause } from "../../assets/svgIcons";
import { Link } from "react-router-dom";

export const ItemGrid = ( props ) => {
    const { surahNumber, surahNameEN, surahMeaningEN, surahType } = props;

    return (
        <div className="list-item-wrapper">
            <Link to={`/surah/${surahNumber}`}>
                <div className="list-item-container cursor-pointer bg-white p-5 rounded-2xl grid gap-8">
                    <div className="flex justify-between items-center">
                        <span className="bg-teal-100 text-teal-500 font-medium text-xl w-10 aspect-square inline-flex justify-center items-center rounded-full">{surahNumber}</span>
                        <div className="relative w-7 aspect-square group">    
                            <Heart svgStyle="absolute w-full aspect-square text-gray-300 opacity-100 group-hover:opacity-0 transition duration-300 group-[.active]:opacity-0]" strokeWidth="35"  />
                            <HeartFill svgStyle="absolute w-full aspect-square text-red-500 opacity-0 group-hover:opacity-100 transition duration-300 group-[.active]:opacity-100" strokeWidth="35"  />
                        </div>
                    </div>
                    <div className="grid gap-1">
                        <h2 className="font-bold text-xl">{surahNameEN}</h2>
                        <p className="font-medium uppercase text-gray-400 grid grid-flow-col items-center justify-between w-full"><span>{surahMeaningEN}</span> {surahType === 'Meccan' ? ( <Mecca svgStyle="w-7 aspect-square" /> ) : ( <Madina svgStyle="w-8 aspect-square" /> )}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export const ItemList = ( props ) => {
    const { surahNumber, ayahNumber, ayahTextEN, ayahTextAR, ayahAudio } = props;
    const audioRef = useRef(null);
    const [currentAudio, setCurrentAudio] = useState(null);
    const [pausedAt, setPausedAt] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false); // New state to track playback status

    const handleAudioClick = (audioId) => {
        if (currentAudio === audioId) {
        if (audioRef.current?.paused) {
            // If the clicked button corresponds to the current audio and it's paused, resume playback
            audioRef.current.currentTime = pausedAt;
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            // If the clicked button corresponds to the current audio and it's playing, pause it
            audioRef.current.pause();
            setPausedAt(audioRef.current.currentTime);
            setIsPlaying(false);
        }
        } else {
            // If a different button is clicked, play the associated audio from the beginning
            audioRef.current.src = ayahAudio;
            audioRef.current.play();
            setCurrentAudio(audioId);
            setPausedAt(null);
            setIsPlaying(true);
        }
    };

    useEffect(() => {
        // Create a variable to store the current ref value
        const currentAudioRef = audioRef.current;
      
        const handleEnded = () => {
          // When the audio ends, reset the pausedAt state to null
          setPausedAt(null);
          setIsPlaying(false); // Set playback status to false when audio ends
        };
      
        // Add the "ended" event listener to the audio element
        currentAudioRef.addEventListener('ended', handleEnded);
      
        // Clean up the event listener when the component unmounts
        return () => {
          // Check if currentAudioRef is not null before removing the event listener
          if (currentAudioRef) {
            currentAudioRef.removeEventListener('ended', handleEnded);
          }
        };
    }, []);      

    return (
        <div className="list-item-wrapper">
            <div className="list-item-container bg-white p-8 rounded-2xl grid gap-6 xxl:gap-8">
                <div className="flex justify-between">
                    <span className="inline-block text-teal-500 text-3xl xxxl:text-4xl mr-8">{surahNumber}:{ayahNumber}</span>
                    <p className="font-cairo text-3xl xxl:text-4xl text-right leading-relaxed">{ayahTextAR}</p>
                </div>
                <div className="uppercase flex gap-4">
                    <p className="text-teal-500 text-sm xxl:text-base">English - Sahih International</p>
                    <p className="border-l border-gray-300"></p>
                    <a href="#!" className="text-yellow-500 flex items-center gap-2 text-sm xxl:text-base">See Tafsir <Right svgStyle="w-5 aspect-square" strokeWidth="0" /></a>
                </div>
                <p>{ayahTextEN}</p>
                <p className="text-white block w-fill h-px bg-gray-300 text-[0px]">space</p>
                <ul className="flex items-center gap-6">
                    <li><Heart svgStyle="w-6 aspect-square text-gray-300 hover:text-red-500 cursor-pointer" strokeWidth="35" /></li>
                    <li><Share svgStyle="w-6 aspect-square text-gray-300 hover:text-teal-500" strokeWidth="35" /></li>
                    <li className='cursor-pointer' onClick={() => handleAudioClick('audio')}>
                        {currentAudio === 'audio' && isPlaying ? <Pause svgStyle="w-6 aspect-square text-teal-500" strokeWidth="35" /> : <Play svgStyle="w-6 aspect-square text-gray-300 hover:text-teal-500" strokeWidth="35" />}
                    </li>
                    <li className='cursor-pointer'><Copy svgStyle="w-6 aspect-square text-gray-300 hover:text-teal-500" strokeWidth="35" /></li>
                </ul>
                <audio ref={audioRef} controls className='hidden'>
                    <source src="" type="audio/mp3" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    )
}
  