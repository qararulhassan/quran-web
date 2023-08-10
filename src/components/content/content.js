// Desc: Content component
import React, { useState, useEffect, useCallback } from "react";
import { SideNavigation } from "../navigation/navigation"
import { TopFilters } from "./filters"
import { ItemGrid, ItemList } from "./items"
import { useParams } from "react-router-dom"
import Waveform from "./Waveform";

export const QuranChapters = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quran, setQuran] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        Promise.all([
        fetch('http://api.alquran.cloud/v1/surah').then(response => {
            if (!response.ok) {
                    throw new Error('Network response for Quran chapters was not ok');
                }
                return response.json();
            }),
        ])
        .then(([quran]) => {
            setQuran(quran.data);
            setLoading(false);
        })
        .catch(error => {
            setError(error.message);
            setLoading(false);
        });
    };

    return (
        <div className="content-wrapper">
            <div className="content-container">
                <div className="grid grid-cols-15 gap-4 adjust-height">
                    <div className="col-span-1 flex flex-col justify-between pt-8 py-16">
                        <SideNavigation />
                    </div>
                    <div className="col-span-12 grid grid-flow-col">
                        <div className="bg-gray-100 rounded-t-[2em] p-16">
                            <TopFilters />
                            {loading ? (
                                <div>Loading...</div>
                            ) : error ? (
                                <div>Error: {error}</div>
                            ) : (
                                <div className="grid grid-cols-5 gap-6 surah-window">
                                    {quran.map((surah, index) => (
                                        <ItemGrid key={index} surahNumber={surah.number} surahNameEN={surah.englishName} surahMeaningEN={surah.englishNameTranslation} surahType={surah.revelationType} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-span-2 flex justify-end">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export const QuranAyahs = () => {

    const { paramValue } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [surah, setSurah] = useState([]);
    const [ayahEN, setAyahEN] = useState([]);
    const [ayahAR, setAyahAR] = useState([]);



    const fetchData = useCallback(() => {
        Promise.all([
          fetch(`http://api.alquran.cloud/v1/surah/${paramValue}/en.asad`),
          fetch(`http://api.alquran.cloud/v1/surah/${paramValue}/ar.abdulbasitmurattal`),
        ])
          .then(([responseEnglish, responseArabic]) =>
            Promise.all([
              responseEnglish.json(),
              responseArabic.json()
            ])
          )
          .then(([ayahEN, ayahAR]) => {
            setAyahEN(ayahEN.data.ayahs);
            setAyahAR(ayahAR.data.ayahs);
            setSurah(ayahAR.data);
            setLoading(false);
          })
          .catch(error => {
            setError(error.message);
            setLoading(false);
          });
    }, [paramValue]);
    
    useEffect(() => {
        fetchData(); // Call fetchData on initial render
    }, [fetchData]); // Include fetchData in the dependency array


    let audioSrc = `http://cdn.islamic.network/quran/audio-surah/128/ar.abdulbasitmurattal/${paramValue}.mp3`;

    return (
        <div className="content-wrapper">
            <div className="content-container">
                <div className="grid grid-cols-15 gap-4 adjust-height">
                    <div className="col-span-1 flex flex-col justify-between pt-8 py-16">
                        <SideNavigation />
                    </div>
                    <div className="col-span-12 grid grid-flow-col">
                        <div className="bg-gray-100 rounded-t-[2em] p-16">
                            <TopFilters />
                            {loading ? (
                                <div>Loading...</div>
                            ) : error ? (
                                <div>Error: {error}</div>
                            ) : (
                                <div className="grid gap-6 surah-window">
                                    {ayahEN.map((ayah, index) => (
                                        <ItemList key={index} surahNumber={paramValue} ayahNumber={ayah.numberInSurah} ayahTextEN={ayah.text} ayahTextAR={ayahAR[index].text} ayahAudio={ayahAR[index].audio} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-span-2">
                        <Waveform number={surah.number} revelationType={surah.revelationType} name={surah.name} englishName={surah.englishName} englishNameTranslation={surah.englishNameTranslation} audioSrc={audioSrc} />
                    </div>
                </div>
            </div>
        </div>
    )
}