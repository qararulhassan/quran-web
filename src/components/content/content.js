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
    const [surahs, setSurahs] = useState([]);

    const fetchData = useCallback(() => {
        Promise.all([
          fetch(`https://axntr01jcwgp.objectstorage.me-dubai-1.oci.customer-oci.com/n/axntr01jcwgp/b/quran-api/o/abdulbasit%2Fsurahs%2Fapi.json`),
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
                                    {surahs.map((surah, index) => (
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
    );
}

export const QuranAyahs = () => {
    const { paramValue } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [surahs, setSurahs] = useState([]);
    const [ayahs, setAyahs] = useState([]);

    const fetchData = useCallback(() => {
        Promise.all([
          fetch(`https://axntr01jcwgp.objectstorage.me-dubai-1.oci.customer-oci.com/n/axntr01jcwgp/b/quran-api/o/abdulbasit%2Fayahs%2F${paramValue}%2Fapi.json`),
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
    }, [paramValue]);
    
    useEffect(() => {
            fetchData();
    }, [fetchData]);

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
                                    {ayahs.map((ayah, index) => (
                                        <ItemList key={index} surahNumber={paramValue} ayahNumber={ayah.numberInSurah} ayahTextEN={ayah.englishText} ayahTextAR={ayah.arabicText} ayahAudio={ayah.audio} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-span-2">
                        <Waveform number={surahs.number} revelationType={surahs.revelationType} name={surahs.name} englishName={surahs.englishName} englishNameTranslation={surahs.englishNameTranslation} surahAudio={surahs.audio} />
                    </div>
                </div>
            </div>
        </div>
    )
}