import React, { useState, useEffect, useCallback } from 'react';
import { Download, Forward, Forward2, Heart, HeartFill, List2, LoadingAnimation, Loop, Madina, Mecca, NetworkError, PauseFill, PlayFill, Previous } from "../../assets/svgIcons";
import { Link, useParams } from "react-router-dom";
import WaveSurfer from "wavesurfer.js";
import audioRef from "../../assets/audio.mp3";

export const Waveform = (props) => {
    const {number, revelationType, name, englishName, englishNameTranslation, surahAudio} = props;
    const [waveform, setWaveform] = useState(null);
    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const track = document.querySelector("#track");

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Define the progress gradient
        const progressGradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 1.35)
        progressGradient.addColorStop(0, '#2dd4bf') // Top color
        progressGradient.addColorStop(1, '#14b8a6') // Bottom color

        const newWaveform = WaveSurfer.create({
            barWidth: 3,
            barRadius: 3,
            barGap: 3,
            barMinHeight: 1,
            cursorWidth: 1,
            splitChannels: false,
            interact: true,
            container: "#waveform",
            backend: "WebAudio",
            height: 60,
            progressColor: progressGradient,
            responsive: true,
            waveColor: "#C4C4C4",
            cursorColor: "transparent",
            cursor: "pointer",
        });

        newWaveform.on('ready', () => {
            setDuration(newWaveform.getDuration());
        });

        newWaveform.load(track);

        setWaveform(newWaveform);

        newWaveform.on('audioprocess', () => {
            setCurrentTime(newWaveform.getCurrentTime());
        });

        newWaveform.on('finish', () => {
            setPlaying(false);
        });

        return () => {
            if (newWaveform) {
                newWaveform.destroy();
            }
        };
    }, []);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secondsRemainder = Math.round(seconds) % 60;
        const paddedSeconds = `0${secondsRemainder}`.slice(-2);
        return `${minutes}:${paddedSeconds}`;
    };

    const handlePlay = () => {
        if (waveform) {
            if (playing) {
                waveform.pause();
            } else {
                waveform.play();
            }
            setPlaying(!playing);
        }
    };

    const handleStop = () => {
        if (waveform) {
            waveform.stop();
            setPlaying(false);
        }
    };

    const handleDownload = async () => {
        try {
          // Fetch the audio data
          const response = await fetch(surahAudio);
          const audioData = await response.blob();
    
          // Create a URL for the blob
          const blobUrl = URL.createObjectURL(audioData);
    
          // Create a temporary anchor tag for downloading
          const downloadLink = document.createElement('a');
          downloadLink.href = blobUrl;
          downloadLink.download = `${englishName}`; // Specify the download filename
          downloadLink.click();
          URL.revokeObjectURL(blobUrl);
        } catch (error) {
          console.error('Error downloading audio:', error);
        }
    };

    return (
      <div className="player-wrapper">
          <div className="player-container">
              <div className="player">
                  <div className="bg-gradient-to-br from-teal-300 via-teal-400 to-teal-500 w-full aspect-square rounded-xl text-white flex justify-center items-center font-cairo text-3xl xxl:text-4xl relative p-8 animate-gradient">
                      {revelationType === 'Meccan' ? ( <Mecca svgStyle="absolute w-[60%] opacity-20 aspect-square" /> ) : ( <Madina svgStyle="absolute w-[60%] opacity-20 aspect-square" /> )}
                      <p className="relative z-10">{name}</p>
                  </div>
                  <div className="grid justify-center relative -mt-8">
                      <ul className="flex gap-8 border border-white rounded-full px-8 py-4 justify-center bg-gradient-to-b from-teal-300 to-teal-500">
                          <li><Forward svgStyle="w-5 aspect-square text-white cursor-pointer" strokeWidth="35" /></li>
                          <li>
                              <div className="relative w-5 aspect-square group cursor-pointer">    
                                  <Heart svgStyle="absolute w-full aspect-square text-white opacity-100 group-hover:opacity-0 transition duration-300 group-[.active]:opacity-0]" strokeWidth="35"  />
                                  <HeartFill svgStyle="absolute w-full aspect-square text-red-500 opacity-0 group-hover:opacity-100 transition duration-300 group-[.active]:opacity-100" strokeWidth="35"  />
                              </div>
                          </li>
                          <li onClick={handleDownload}><Download svgStyle="w-5 aspect-square text-white cursor-pointer" strokeWidth="35" /></li>
                      </ul>
                  </div>
                  <div className="mt-4">
                      <p className="text-center font-bold text-2xl mb-1">{englishName}</p>
                      <p className="text-center text-base text-cyan-800">{englishNameTranslation}</p>
                  </div>
                  <div>
                        <div id="waveform" className="my-4 cursor-pointer" />
                        <audio id="track" src={surahAudio} />
                        <p className="flex justify-between text-cyan-800"><span id="time">{formatTime(currentTime)}</span><span id="duration">{formatTime(duration)}</span></p>
                  </div>
                  <ul className="flex gap-8 items-center justify-center mt-4">
                      <li className="cursor-pointer">
                          <Loop svgStyle="w-5 aspect-square text-teal-500 hover:text-teal-600" strokeWidth="30" />
                      </li>
                      <li className="cursor-pointer">
                          {number > 1 ? (
                              <Link to={`/surah/${number - 1}`} onClick={handleStop}>
                                <Previous svgStyle="w-5 aspect-square text-teal-500 hover:text-teal-600" strokeWidth="20" />
                              </Link>
                          ) : (
                              <Previous svgStyle="w-5 aspect-square text-gray-300 hover:text-gray-400 cursor-not-allowed" strokeWidth="20" />
                          )}
                      </li>
                      <li className="cursor-pointer" onClick={handlePlay}>
                            {playing ? <PauseFill svgStyle="w-12 aspect-square text-teal-500 hover:text-teal-600" /> : <PlayFill svgStyle="w-12 aspect-square text-teal-500 hover:text-teal-600" />}
                      </li>
                      <li className="cursor-pointer">
                          {number < 114 ? (
                              <Link to={`/surah/${number + 1}`} onClick={handleStop}>
                                  <Forward2 svgStyle="w-5 aspect-square text-teal-500 hover:text-teal-600" strokeWidth="20" />
                              </Link>
                          ) : (
                              <Forward2 svgStyle="w-5 aspect-square text-gray-300 hover:text-gray-400 cursor-not-allowed" strokeWidth="20" />
                          )}
                      </li>
                      <li className="cursor-pointer"><Link to="/"><List2 svgStyle="w-5 aspect-square text-teal-500 hover:text-teal-600" strokeWidth="30" /></Link></li>
                  </ul>
              </div>
          </div>
      </div>
    );
}

// Desc: Surah player component
export const SurahsPlayer = () => {
    const { surahNumber } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [surahs, setSurahs] = useState([]);

    const fetchData = useCallback(() => {
        Promise.all([
            fetch(`https://raw.githubusercontent.com/qararulhassan/quran-web/main/API/text/abdulbasit/ayah/${surahNumber}.json`),
        ])
          .then(([responseSurah]) =>
            Promise.all([
              responseSurah.json()
            ])
          )
          .then(([quran]) => {
            setSurahs(quran.data);
            setLoading(false);
          })
          .catch(error => {
            setError(error.message);
            setLoading(false);
          });
    }, [surahNumber]);
    
    useEffect(() => {
        fetchData();
    }, [fetchData]);


    return (
        <React.Fragment>
            {loading ? (
                <LoadingAnimation animationStyle="w-full" />
            ) : error ? (
                <NetworkError errorText={error} animationStyle="w-full" />
            ) : (
                <Waveform number={surahs.number} revelationType={surahs.revelationType} name={surahs.name} englishName={surahs.englishName} englishNameTranslation={surahs.englishNameTranslation} surahAudio={audioRef} />
            )}
        </React.Fragment>
    )
}