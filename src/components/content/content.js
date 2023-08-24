// Desc: Content component
import React, { useState, useEffect, useCallback } from "react";
import { NavPath, SideNavigation } from "../navigation/navigation"
import { TopFilters } from "./filters"
import { ItemGrid, ItemList } from "./items"
import { Link, useParams } from "react-router-dom"
import Waveform from "./Waveform";
import { ArrowBack, LoadingAnimation, NetworkError } from "../../assets/svgIcons";

export const QuranChapters = () => {
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [surahs, setSurahs] = useState([]);

    const fetchData = useCallback(() => {
        Promise.all([
          fetch(`https://raw.githubusercontent.com/qararulhassan/quran-web/main/API/text/abdulbasit/surah/api.json`),
        ])
          .then(([responseSurah]) =>
            Promise.all([
              responseSurah.json()
            ])
          )
          .then(([quran]) => {
            setSurahs(quran.data.surahs);
            setLoading(false);
          })
          .catch(error => {
            setError(error.message);
            setLoading(false);
          });
    }, []);
    
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div className="content-wrapper">
            <div className="content-container">
                <div className="grid grid-cols-16 xxl:grid-cols-15 gap-4 adjust-height">
                    <div className="col-span-1 flex flex-col justify-between pt-8 py-16">
                        <SideNavigation />
                    </div>
                    <div className="col-span-12 xxl:col-span-12 grid grid-flow-col">
                        <div className="bg-gray-100 rounded-t-[2em] p-16 relative">
                            {loading ? (
                                <LoadingAnimation animationStyle="w-full" />
                            ) : error ? (
                                <NetworkError errorText={error} animationStyle="w-full" />
                            ) : (
                                <React.Fragment>
                                    <TopFilters />
                                    <div className="grid grid-cols-4 xxl:grid-cols-5 gap-6 surah-window">
                                        {surahs.map((surah, index) => (
                                            <ItemGrid key={index} surahNumber={surah.number} surahNameEN={surah.englishName} surahMeaningEN={surah.englishNameTranslation} surahType={surah.revelationType} />
                                        ))}
                                    </div>
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                    <div className="col-span-3 xxl:col-span-2">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export const QuranAyahs = () => {
    const { surahNumber } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [surahs, setSurahs] = useState([]);
    const [ayahs, setAyahs] = useState([]);

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
            setAyahs(quran.data.ayahs);
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

    let audioRef = "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3";

    return (
        <div className="content-wrapper">
            <div className="content-container">
                <div className="grid grid-cols-16 xxl:grid-cols-15 gap-4 adjust-height">
                    <div className="col-span-1 flex flex-col justify-between pt-8 py-16">
                        <SideNavigation />
                    </div>
                    <div className="col-span-12 xxl:col-span-12 grid grid-flow-col">
                        <div className="bg-gray-100 rounded-t-[2em] p-16 relative">
                            {loading ? (
                                <LoadingAnimation animationStyle="w-full" />
                            ) : error ? (
                                <NetworkError errorText={error} animationStyle="w-full" />
                            ) : (
                                <React.Fragment>
                                <div>
                                    <Link to={NavPath({path: "surahsList"})} className="flex gap-3 text-base xxl:text-lg group w-fit"><ArrowBack svgStyle="w-6 aspect-square transition duration-300 relative group-hover:-translate-x-2 group-hover:text-teal-500" strokeWidth="15" /> Back to Chapters</Link>
                                    <h1 className="text-center text-2xl xxl:text-3xl grid gap-y-6 mb-16">
                                        <span className="font-cairo">{surahs.bism}</span>
                                        <span className="text-xl xxl:text-2xl">{surahs.englishBism}</span>
                                    </h1>
                                </div>
                                    <div className="grid gap-6 surah-window">
                                        {ayahs.map((ayah, index) => (
                                            <ItemList key={index} surahNumber={surahNumber} ayahNumber={ayah.numberInSurah} ayahTextEN={ayah.englishText} ayahTextAR={ayah.arabicText} ayahAudio={ayah.audio} />
                                        ))}
                                    </div>
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                    <div className="col-span-3 xxl:col-span-2">
                        {
                            // setTimeout(() => {
                                <Waveform number={surahs.number} revelationType={surahs.revelationType} name={surahs.name} englishName={surahs.englishName} englishNameTranslation={surahs.englishNameTranslation} surahAudio={audioRef} />
                            // } , 1000)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}