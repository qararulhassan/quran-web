// Desc: Content component
import React, { useState, useEffect, useCallback } from "react";
import { ItemGrid } from "./items";
import { TopFilters } from "./filters";
import { useParams } from "react-router-dom";
import { LoadingAnimation, NetworkError } from "../../assets/svgIcons";
import { SurahsAPI } from "../../pages";

export const SurahsListing = () => {
    const { author } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [surahs, setSurahs] = useState([]);

    let authorName;
    if (author === "undefined") {
        authorName = "muhammad-asad";
    } else {
        authorName = author;
    }

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
    }, [fetchData]);

    return (
        <React.Fragment>
            {loading ? (
                <LoadingAnimation animationStyle="w-full" />
            ) : error ? (
                <NetworkError errorText={error} animationStyle="w-full" />
            ) : (
                <React.Fragment>
                    <TopFilters />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 5xl:grid-cols-5 7xl:grid-cols-6 gap-6 overflow-x-hidden overflow-y-scroll no-scrollbar">
                        {surahs.map((surah, index) => (
                            <ItemGrid key={index} authorName={authorName} surahNumber={surah.number} surahNameEN={surah.englishName} surahMeaningEN={surah.englishNameTranslation} surahType={surah.revelationType} />
                        ))}
                    </div>
                </React.Fragment>
            )}
        </React.Fragment>
    );
}