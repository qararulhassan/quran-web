// Desc: Content component
import React, { useState, useCallback, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AudioAPI, NavPath } from "../../pages";
import { LoadingAnimation, NetworkError } from "../../assets/svgIcons";
import AudioPlayer from "./player";

export const RecitorsList = () => {
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState(0);

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

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    }

    return (
        <React.Fragment>
            {loading ? (
                <LoadingAnimation animationStyle="w-full" />
            ) : error ? (
                <NetworkError errorText={error} animationStyle="w-full" />
            ) : (
                <React.Fragment>
                    <ul className="bg-teal-300 p-1 inline-flex gap-2 mx-auto rounded-full mb-12">
                        {groups.map((group, groupIndex) => (
                            <li key={groupIndex} className={`tab ${activeTab === groupIndex ? 'bg-white text-teal-500' : ''} transition duration-300 px-5 py-3 rounded-full hover:bg-white hover:text-teal-500 cursor-pointer`} onClick={() => handleTabClick(groupIndex)}>{group.name}</li>
                        ))}
                    </ul>
                    <div className="tab-content min-h-full no-scrollbar overflow-y-scroll">
                        {groups.map((group, groupIndex) => (
                            <div key={groupIndex} className={`${activeTab === groupIndex ? 'flex' : 'hidden'} flex-col gap-6 pb-12 mb-12`}>       
                                {group.data && group.data.length > 0 && (
                                    <React.Fragment>
                                        {group.data.map((subGroup, subGroupIndex) => (
                                            <div key={subGroupIndex} className={`flex ${groupIndex === 1 ? 'flex-col' : ''} gap-6 pb-12 mb-12 border-b-2 group`}>
                                                <div className="name-letter">
                                                    {groupIndex === 1 ? (
                                                        <span className="text-2xl w-fit h-auto pb-2 pr-8 border-b-2 border-teal-500 transition duration-300">{subGroup.letter}</span>
                                                        ) : (
                                                            <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">{subGroup.letter}</span>
                                                        )
                                                    }
                                                </div>
                                                {subGroup.data && subGroup.data.length > 0 && (
                                                    <ul className="grid grid-cols-4 w-full">
                                                        {subGroup.data.map((item, itemIndex) => (
                                                            <li key={itemIndex}><Link to={NavPath({path: 'quranAudio', author: item.url})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">{item.name}</Link></li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        ))}
                                    </React.Fragment>
                                )}
                            </div>
                        ))}
                    </div>
                </React.Fragment>
            )}
        </React.Fragment>
    );
}


// export const ChaptersAudio = () => {
//     const { author } = useParams();
//     const [groups, setGroups] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const fetchData = useCallback(() => {
//         Promise.all([fetch(AudioAPI())])
//         .then(([response]) => Promise.all([response.json()]))
//         .then(([quran]) => {
//             setGroups(quran);
//             setLoading(false);
//         })
//         .catch(error => {
//             setError(error.message);
//             setLoading(false);
//         });
//     }, []);
    
//     useEffect(() => {
//         fetchData();
//     }, [fetchData]);

//     const surahs = groups
//     .flatMap((group) =>
//       group.data
//         ? group.data.flatMap((subGroup) =>
//             subGroup.data ? subGroup.data.filter((item) => item.url === author) : []
//           )
//         : []
//     )
//     .flatMap((item) => (item.surahs ? item.surahs : []));

//     const group = groups
//     .flatMap((group) =>
//         group.data
//         ? group.data.flatMap((subGroup) =>
//             subGroup.data
//                 ? subGroup.data.filter((item) => item.url === author)
//                 : []
//             )
//         : []
//     );

//     return (
//         <React.Fragment>
//             {loading ? (
//                 <LoadingAnimation animationStyle="w-full" />
//             ) : error ? (
//                 <NetworkError errorText={error} animationStyle="w-full" />
//             ) : (
//                 <React.Fragment>
//                     {group.map((item, itemIndex) => (
//                         <p key={itemIndex} className="font-bold text-4xl text-center gap-2 mb-12 w-full block"><span className="block clear-both uppercase text-base text-teal-400 mb-2">Recited By</span>{item.name}</p>
//                     ))}
//                     <div className="grid divide-y relative overflow-x-hidden overflow-y-scroll max-h-screen no-scrollbar">
//                         {surahs.map((surah, surahIndex) => (
//                             <AudioPlayer key={surahIndex} audioSrc={surah.audio} id={surah.number} name={surah.englishName} meaning={surah.englishNameTranslation} />
//                         ))}
//                     </div>
//                 </React.Fragment>
//             )}
//         </React.Fragment>
//     )
// }

