// Desc: Content component
import React, { useState, useEffect, useCallback } from "react";
import { ItemGrid } from "./items";
import { TopFilters } from "./filters";
import { LoadingAnimation, NetworkError } from "../../assets/svgIcons";

export const SurahsListing = () => {

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
        <React.Fragment>
            {loading ? (
                <LoadingAnimation animationStyle="w-full" />
            ) : error ? (
                <NetworkError errorText={error} animationStyle="w-full" />
            ) : (
                <React.Fragment>
                    <TopFilters />
                    <div className="grid grid-cols-4 xl:grid-cols-5 gap-6 surah-window">
                        {surahs.map((surah, index) => (
                            <ItemGrid key={index} surahNumber={surah.number} surahNameEN={surah.englishName} surahMeaningEN={surah.englishNameTranslation} surahType={surah.revelationType} />
                        ))}
                    </div>
                </React.Fragment>
            )}
        </React.Fragment>
    );
}