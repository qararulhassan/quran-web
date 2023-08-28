// Desc: Content component
import React, { useState, useEffect, useCallback } from "react";
import { ItemGrid, ItemSideLIst } from "./items";
import { TopFilters } from "./filters";
import { useParams } from "react-router-dom";
import { LoadingAnimation, NetworkError } from "../../assets/svgIcons";

export const SurahsListing = () => {
    const { author } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [surahs, setSurahs] = useState([]);

    let authorName;
    if (author === undefined) {
        authorName = "muhammad-asad";
    } else {
        authorName = author;
    }

    const fetchData = useCallback(() => {
        Promise.all([
          fetch(`https://raw.githubusercontent.com/qararulhassan/quran-web/main/API/text/${authorName}/surah/api.json`),
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
    }, [authorName]);
    
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
                    <div className="grid grid-cols-4 xl:grid-cols-6 gap-6 surah-window">
                        {surahs.map((surah, index) => (
                            <ItemGrid key={index} authorName={authorName} surahNumber={surah.number} surahNameEN={surah.englishName} surahMeaningEN={surah.englishNameTranslation} surahType={surah.revelationType} />
                        ))}
                    </div>
                </React.Fragment>
            )}
        </React.Fragment>
    );
}


export const SideSurahsListing = () => {
  const { author } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [surahs, setSurahs] = useState([]);

  let authorName;
  if (author === undefined) {
      authorName = "muhammad-asad";
  } else {
      authorName = author;
  }

  const fetchData = useCallback(() => {
      Promise.all([
        fetch(`https://raw.githubusercontent.com/qararulhassan/quran-web/main/API/text/${authorName}/surah/api.json`),
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
  }, [authorName]);
  
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
                  <div className="grid grid-cols-1 gap-6">
                      {surahs.map((surah, index) => (
                          <ItemSideLIst key={index} authorName={authorName} surahNo={surah.number} surahNameEN={surah.englishName} surahMeaningEN={surah.englishNameTranslation} surahType={surah.revelationType} />
                      ))}
                  </div>
              </React.Fragment>
          )}
      </React.Fragment>
  );
}