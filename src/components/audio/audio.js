// Desc: Content component
import React, { useState, useCallback, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AudioAPI, ChaptersAudioSrc, NavPath } from "../../pages";
import { Waveform } from "../content/Waveform";
import { LoadingAnimation, NetworkError } from "../../assets/svgIcons";

export const RecitorsList = () => {
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(() => {
        Promise.all([fetch(AudioAPI())])
        .then(([response]) => Promise.all([response.json()]))
        .then(([quran]) => {
            setGroups(quran);
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

    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    }

    return (
        <React.Fragment>
            <ul className="bg-teal-300 p-1 inline-flex gap-2 mx-auto rounded-full mb-12">
                {groups.map((group, groupIndex) => (
                    <li key={groupIndex} className={`tab ${activeTab === groupIndex ? 'bg-white text-teal-500' : ''} transition duration-300 px-5 py-3 rounded-full hover:bg-white hover:text-teal-500 cursor-pointer`} onClick={() => handleTabClick(groupIndex)}>{group.name}</li>
                ))}
            </ul>
            {groups.map((group, groupIndex) => (
                <div key={groupIndex} className="flex flex-col flex-grow overflow-scroll no-scrollbar min-h-full">
                    {group.data && group.data.length > 0 && (
                        <div>
                            {group.data.map((subGroup, subGroupIndex) => (
                                <div key={subGroupIndex} className="flex gap-6 pb-12 mb-12 border-b-2 group">
                                    <div className="name-letter">
                                        <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">{subGroup.letter}</span>
                                    </div>
                                    {subGroup.data && subGroup.data.length > 0 && (
                                        <ul className="grid grid-cols-4 w-full">
                                            {subGroup.data.map((item, itemIndex) => (
                                                <li key={itemIndex}><Link to={NavPath({path: 'quranAudio', author: 'abdullaah_3awwaad_al-juhaynee'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">{item.name}</Link></li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </React.Fragment>
    );
}


export const ChaptersAudio = () => {
    const { author } = useParams();
    
    function AudioFiles() {
        let audioFiles = [];

        for (let i = 1; i <= 114; i++) {
            let number = i < 10 ? `00${i}` : i < 100 ? `0${i}` : i;
            audioFiles.push(
                <div key={i} className="list-item-wrapper">
                    <audio className="w-full bg-[#f0f3f4]" src={ChaptersAudioSrc({author: author, chapter: number})} controls={true} />
                    <div className="list-item-container cursor-pointer bg-white p-5 grid gap-8 relative">
                        <Waveform location="line" surahAudio="https://download.quranicaudio.com/quran/abdullaah_3awwaad_al-juhaynee/001.mp3" />
                    </div>
                </div>
            );
        }
        
        return audioFiles;
    }

    return (
        <React.Fragment>
            <div className="flex flex-col divide-y relative overflow-x-hidden overflow-y-scroll max-h-screen no-scrollbar">
                {AudioFiles()}
            </div>
        </React.Fragment>
    )
}