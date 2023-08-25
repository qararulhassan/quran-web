// Desc: Content component
import React, { useState, useEffect, useCallback } from "react";
import { NavPath } from "../navigation/navigation"
import { ItemList } from "./items"
import { Link, useParams } from "react-router-dom"
import { ArrowBack, LoadingAnimation, NetworkError } from "../../assets/svgIcons";

export const AyahsListing = () => {
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
        <React.Fragment>
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
                            <ItemList key={index} surahNumber={surahNumber} ayahNumber={ayah.numberInSurah} ayahTextEN={ayah.englishText} ayahTextAR={ayah.arabicText} ayahAudio={audioRef} />
                        ))}
                    </div>
                </React.Fragment>
            )}
        </React.Fragment>
    )
}