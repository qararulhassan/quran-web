import React, { useState, useEffect, useCallback } from 'react';
import { Bismillah, Download, Forward, Heart, HeartFill, List2, LoadingAnimation, Loop, Madina, Mecca, NetworkError, PauseFill, PlayFill, Previous } from "../../assets/svgIcons";
import { Link, useParams } from "react-router-dom";
import { AyahsAPI, SurahAudio } from '../../pages';
import WaveSurfer from 'wavesurfer.js';

export const Waveform = (props) => {
    const {surahNumber, revelationType, name, englishName, englishNameTranslation, surahAudio, location, author, totalAyahs} = props;
    const [waveform, setWaveform] = useState(null);
    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const track = SurahAudio({author: author, surahNumber: surahNumber});

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        // Define the progress gradient
        const progressGradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 1.35)
        progressGradient.addColorStop(0, '#134e4a') // Top color
        progressGradient.addColorStop(1, '#134e4a') // Bottom color

        const newWaveform = WaveSurfer.create({
            barWidth: 3,
            barRadius: 3,
            barGap: 3,
            barMinHeight: 1,
            cursorWidth: 1,
            splitChannels: false,
            interact: true,
            container: ".waveform",
            backend: "WebAudio",
            height: 60,
            progressColor: progressGradient,
            responsive: true,
            waveColor: "#ffffff",
            cursorColor: "transparent",
            cursor: "pointer",
            url: track,
            peaks: [
                [
                    0, 0.0023595101665705442, 0.012107174843549728, 0.005919494666159154, -0.31324470043182373, 0.1511787623167038,
                    0.2473851442337036, 0.11443428695201874, -0.036057762801647186, -0.0968964695930481, -0.03033737652003765,
                    0.10682467371225357, 0.23974689841270447, 0.013210971839725971, -0.12377244979143143, 0.046145666390657425,
                    -0.015757400542497635, 0.10884027928113937, 0.06681904196739197, 0.09432944655418396, -0.17105795443058014,
                    -0.023439358919858932, -0.10380347073078156, 0.0034454423002898693, 0.08061369508504868, 0.026129156351089478,
                    0.18730352818965912, 0.020447958260774612, -0.15030759572982788, 0.05689578503370285, -0.0009095853311009705,
                    0.2749626338481903, 0.2565386891365051, 0.07571295648813248, 0.10791446268558502, -0.06575305759906769,
                    0.15336275100708008, 0.07056761533021927, 0.03287476301193237, -0.09044631570577621, 0.01777501218020916,
                    -0.04906218498945236, -0.04756792634725571, -0.006875281687825918, 0.04520256072282791, -0.02362387254834175,
                    -0.0668797641992569, 0.12266506254673004, -0.10895221680402756, 0.03791835159063339, -0.0195105392485857,
                    -0.031097881495952606, 0.04252675920724869, -0.09187793731689453, 0.0829525887966156, -0.003812957089394331,
                    0.0431736595928669, 0.07634212076663971, -0.05335947126150131, 0.0345163568854332, -0.049201950430870056,
                    0.02300390601158142, 0.007677287794649601, 0.015354577451944351, 0.007677287794649601, 0.007677288725972176,
                ],
            ],
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
    }, [author, surahNumber]);

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
        <React.Fragment>
        { location === 'aside' ? (
                <div className="player-wrapper bg-gradient-to-r from-teal-400 to-teal-400 rounded-xl p-12 mb-6 relative inline-table overflow-hidden">
                    <div className="player-container">
                        <Bismillah svgStyle="absolute w-full text-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        <div className="player relative z-10">
                            <div className='flex flex-col justify-center items-center w-full text-lg text-white'>
                                <p className='w-fit text-4xl font-medium'>{englishName}</p>
                                <p className='w-fit opacity-90 border-b border-solid border-white/90 pb-1 mb-1'>( {englishNameTranslation} )</p>
                                <p className='w-fit'>{revelationType} - {totalAyahs} Ayahs</p>
                            </div>
                            <div className='flex items-center gap-8 mt-4'>
                                <div className="cursor-pointer" onClick={handlePlay}>{playing ? <PauseFill svgStyle="w-12 aspect-square text-white hover:text-teal-800" /> : <PlayFill svgStyle="w-12 aspect-square text-white hover:text-teal-800" />}</div>
                                <div className='w-full'><div className="waveform my-4 cursor-pointer" /></div>
                                <p className='text-white text-lg font-semibold whitespace-nowrap'>{formatTime(currentTime)} &nbsp;/&nbsp; {formatTime(duration)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="player-wrapper">
                    <div className="player-container">
                        <div className="player">
                            <div className="bg-gradient-to-br from-teal-300 via-teal-400 to-teal-500 w-full aspect-square rounded-xl text-white flex justify-center items-center font-cairo text-3xl xl:text-4xl relative p-8 animate-gradient">
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
                                    {surahNumber > 1 ? (
                                        <Link to={`/${author}/surah/${surahNumber - 1}`} onClick={handleStop}>
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
                                    {surahNumber < 114 ? (
                                        <Link to={`/${author}/surah/${surahNumber + 1}`} onClick={handleStop}>
                                            <Forward svgStyle="w-5 aspect-square text-teal-500 hover:text-teal-600" strokeWidth="20" />
                                        </Link>
                                    ) : (
                                        <Forward svgStyle="w-5 aspect-square text-gray-300 hover:text-gray-400 cursor-not-allowed" strokeWidth="20" />
                                    )}
                                </li>
                                <li className="cursor-pointer"><Link to="/"><List2 svgStyle="w-5 aspect-square text-teal-500 hover:text-teal-600" strokeWidth="30" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
        </React.Fragment>
    );
}

// Desc: Surah player component
export const SurahsPlayer = (props) => {
    const { location } = props;
    const { author, surahNumber } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [surahs, setSurahs] = useState([]);

    const fetchData = useCallback(() => {
        Promise.all([
            fetch(AyahsAPI({fileName: surahNumber})),
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
                <Waveform location={location} author={author} totalAyahs={surahs.totalAyahs} surahNumber={surahs.number} revelationType={surahs.revelationType} name={surahs.name} englishName={surahs.englishName} englishNameTranslation={surahs.englishNameTranslation} surahAudio={SurahAudio({author: author, surahNumber: surahNumber})} />
            )}
        </React.Fragment>
    )
}