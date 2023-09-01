// Desc: Content component
import React, { useState, useCallback, useEffect } from "react";
import { ItemList, ItemSideList } from "./items";
import { useParams } from "react-router-dom";
import { LoadingAnimation, NetworkError } from "../../assets/svgIcons";
import { SurahsPlayer } from "./Waveform";
import { SurahsAPI, AyahsAPI, AyahAudio } from "../../pages";

export const AyahsListing = () => {
    const { author, surahNumber } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [ayahs, setAyahs] = useState([]);

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

    return (
        <React.Fragment>
            {loading ? (
                <LoadingAnimation animationStyle="w-full" />
            ) : error ? (
                <NetworkError errorText={error} animationStyle="w-full" />
            ) : (
                <React.Fragment>
                    <SurahsPlayer location="aside" />
                    <div className="flex flex-col flex-grow gap-6 overflow-scroll no-scrollbar">
                        {ayahs.map((ayah, index) => (
                            <ItemList key={index} surahNumber={surahNumber} ayahNumber={ayah.numberInSurah} ayahTextEN={ayah.englishText} ayahTextAR={ayah.arabicText} ayahAudio={AyahAudio({author: author, ayahNumber: ayah.number})} />
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
  
    const fetchData = useCallback(() => {
        Promise.all([
          fetch(SurahsAPI()),
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
    }, [fetchData, surahNumber]);
  
    return (
        <React.Fragment>
            {loading ? (
                <LoadingAnimation animationStyle="w-full" />
            ) : error ? (
                <NetworkError errorText={error} animationStyle="w-full" />
            ) : (
                <React.Fragment>
                    <div className="flex flex-col gap-6 relative overflow-x-hidden overflow-y-scroll max-h-screen no-scrollbar">
                        {surahs.map((surah, index) => (
                            <ItemSideList key={index} author={author} surahNo={surah.number} totalAyahs={surah.totalAyahs} surahNameEN={surah.englishName} surahMeaningEN={surah.englishNameTranslation} surahType={surah.revelationType} />
                        ))}
                    </div>
                </React.Fragment>
            )}
        </React.Fragment>
    );
  }