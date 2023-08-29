// Desc: Content component
import React, { useState, useCallback, useEffect, useRef } from "react";
import { ItemList, ItemSideList } from "./items";
import { useParams } from "react-router-dom";
import { LoadingAnimation, NetworkError } from "../../assets/svgIcons";
import { SurahsPlayer } from "./Waveform";

export const AyahsListing = () => {
    const { author, surahNumber } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [ayahs, setAyahs] = useState([]);

    const fetchData = useCallback(() => {
        Promise.all([
          fetch(`https://raw.githubusercontent.com/qararulhassan/quran-web/main/API/text/${author}/ayah/${surahNumber}.json`),
        ])
          .then(([responseSurah]) =>
            Promise.all([
              responseSurah.json()
            ])
          )
          .then(([quran]) => {
            setAyahs(quran.data.ayahs);
            setLoading(false);
          })
          .catch(error => {
            setError(error.message);
            setLoading(false);
          });
    }, [author, surahNumber]);
    
    useEffect(() => {
            fetchData();
    }, [fetchData]);

    let audioRef = "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3";

    return (
        <React.Fragment>
            {loading ? (
                <LoadingAnimation animationStyle="w-full" />
            ) : error ? (
                <NetworkError errorText={error} animationStyle="w-full" />
            ) : (
                <React.Fragment>
                    <SurahsPlayer location="aside" />
                    <div className="grid gap-6 surah-window">
                        {ayahs.map((ayah, index) => (
                            <ItemList key={index} surahNumber={surahNumber} ayahNumber={ayah.numberInSurah} ayahTextEN={ayah.englishText} ayahTextAR={ayah.arabicText} ayahAudio={audioRef} />
                        ))}
                    </div>
                </React.Fragment>
            )}
        </React.Fragment>
    )
}

export const SideSurahsListing = () => {
    const { author, surahNumber } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [surahs, setSurahs] = useState([]);
    const containerRef = useRef(null);
  
    const fetchData = useCallback(() => {
        Promise.all([
          fetch(`https://raw.githubusercontent.com/qararulhassan/quran-web/main/API/text/${author}/surah/api.json`),
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
    }, [author]);
    
    useEffect(() => {
        fetchData();
        if (containerRef.current) {
            const itemToScrollTo = containerRef.current.querySelector(`.list-item-wrapper:nth-child(${surahNumber})`);
            itemToScrollTo.scrollIntoView({ behavior: 'smooth' });
        };
    }, [fetchData, surahNumber]);
  
    return (
        <React.Fragment>
            {loading ? (
                <LoadingAnimation animationStyle="w-full" />
            ) : error ? (
                <NetworkError errorText={error} animationStyle="w-full" />
            ) : (
                <React.Fragment>
                    <div className="side-listing-wrapper grid gap-6 relative overflow-y-scroll overflow-x-hidden h-full" ref={containerRef}>
                        {surahs.map((surah, index) => (
                            <ItemSideList key={index} author={author} surahNo={surah.number} totalAyahs={surah.totalAyahs} surahNameEN={surah.englishName} surahMeaningEN={surah.englishNameTranslation} surahType={surah.revelationType} />
                        ))}
                    </div>                
                </React.Fragment>
            )}
        </React.Fragment>
    );
  }