// Desc: Content component
import React, { useState, useCallback, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AudioAPI, ChaptersAudioSrc, NavPath } from "../../pages";
import { Waveform } from "../content/Waveform";
import { LoadingAnimation, NetworkError } from "../../assets/svgIcons";

export const RecitorsList = () => {
    const [activeTab, setActiveTab] = useState(1);
    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tabs, setTabs] = useState([]);
    const [groups, setGroups] = useState([]);

    const fetchData = useCallback(() => {
        Promise.all([
          fetch(AudioAPI()),
        ])
          .then(([responseSurah]) =>
            Promise.all([
              responseSurah.json()
            ])
          )
          .then(([quranaudio]) => {
            setTabs(quranaudio.data);
            setGroups(quranaudio.data.group);
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
                    <ul className="bg-teal-300 p-1 inline-flex gap-2 mx-auto rounded-full mb-12">
                        {tabs.map((tab, index) => (
                            <li key={index} className={`tab ${activeTab === index ? 'bg-white text-teal-500' : ''} transition duration-300 px-5 py-3 rounded-full hover:bg-white hover:text-teal-500 cursor-pointer`} onClick={() => handleTabClick(index)}>{tab.name}</li>    
                        ))}
                    </ul>
                    <div className="tab-content overflow-scroll">
                        {activeTab === 0 && 
                            <div className="flex flex-col flex-grow overflow-scroll no-scrollbar h-full">
                                <div className="flex gap-6 pb-12 mb-12 border-b-2 group">
                                    <div className="name-letter">
                                        <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">A</span>
                                    </div>
                                    <ul className="grid grid-cols-4 w-full">
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdullaah_3awwaad_al-juhaynee'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdullah Awad al-Juhani</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdullaah_basfar'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdullah Basfar</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdurrahmaan_as-sudays'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdur-Rahman as-Sudais</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'huthayfi'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Ali Abdur-Rahman al-Huthaify</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdul_muhsin_alqasim'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">AbdulMuhsin al-Qasim</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'thubaity'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">AbdulBari ath-Thubaity</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'ahmed_ibn_3ali_al-3ajamy'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Ahmed ibn Ali al-Ajmy</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdulazeez_al-ahmad'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">AbdulAzeez al-Ahmad</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdul_basit_murattal'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">AbdulBaset AbdulSamad [Murattal]</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdulwadood_haneef'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">AbdulWadud Haneef</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'aziz_alili'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Aziz Alili</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdulbaset_mujawwad'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">AbdulBaset AbdulSamad [Mujawwad]</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'alhusaynee_al3azazee_with_children'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Al-Hussayni Al-'Azazy (with Children)</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdulrazaq_bin_abtan_al_dulaimi'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdur-Razaq bin Abtan al-Dulaimi [Mujawwad]</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'khayat'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdullah Khayat</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'adel_kalbani'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Adel Kalbani</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdulkareem_al_hazmi'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">AbdulKareem Al Hazmi</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdulmun3im_abdulmubdi2'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdul-Mun'im Abdul-Mubdi</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdurrashid_sufi'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdur-Rashid Sufi</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'ahmad_alhuthayfi'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Ahmad al-Huthaify</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abu_bakr_ash-shatri_tarawee7'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abu Bakr al-Shatri [Taraweeh]</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdullah_matroud'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdullah Matroud</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdul_wadood_haneef_rare'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">AbdulWadood Haneef</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'ahmad_nauina'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Ahmad Nauina</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'akram_al_alaqmi'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Akram Al-Alaqmi</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'ali_hajjaj_alsouasi'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Ali Hajjaj Alsouasi</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'asim_abdulaleem'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Asim Abdul Aleem</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdallah_abdal'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdallah Abdal</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'ali_jaber'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdullah Ali Jabir</Link></li>
                                    </ul>
                                </div>
                                <div className="flex gap-6 pb-12 mb-12 border-b-2 group">
                                    <div className="name-letter">
                                        <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">A</span>
                                    </div>
                                    <ul className="grid grid-cols-4 w-full">
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdullaah_3awwaad_al-juhaynee'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdullah Awad al-Juhani</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdullaah_basfar'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdullah Basfar</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdurrahmaan_as-sudays'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdur-Rahman as-Sudais</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'huthayfi'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Ali Abdur-Rahman al-Huthaify</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdul_muhsin_alqasim'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">AbdulMuhsin al-Qasim</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'thubaity'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">AbdulBari ath-Thubaity</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'ahmed_ibn_3ali_al-3ajamy'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Ahmed ibn Ali al-Ajmy</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdulazeez_al-ahmad'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">AbdulAzeez al-Ahmad</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdul_basit_murattal'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">AbdulBaset AbdulSamad [Murattal]</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdulwadood_haneef'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">AbdulWadud Haneef</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'aziz_alili'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Aziz Alili</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdulbaset_mujawwad'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">AbdulBaset AbdulSamad [Mujawwad]</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'alhusaynee_al3azazee_with_children'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Al-Hussayni Al-'Azazy (with Children)</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdulrazaq_bin_abtan_al_dulaimi'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdur-Razaq bin Abtan al-Dulaimi [Mujawwad]</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'khayat'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdullah Khayat</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'adel_kalbani'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Adel Kalbani</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdulkareem_al_hazmi'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">AbdulKareem Al Hazmi</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdulmun3im_abdulmubdi2'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdul-Mun'im Abdul-Mubdi</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdurrashid_sufi'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdur-Rashid Sufi</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'ahmad_alhuthayfi'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Ahmad al-Huthaify</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abu_bakr_ash-shatri_tarawee7'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abu Bakr al-Shatri [Taraweeh]</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdullah_matroud'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdullah Matroud</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdul_wadood_haneef_rare'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">AbdulWadood Haneef</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'ahmad_nauina'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Ahmad Nauina</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'akram_al_alaqmi'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Akram Al-Alaqmi</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'ali_hajjaj_alsouasi'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Ali Hajjaj Alsouasi</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'asim_abdulaleem'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Asim Abdul Aleem</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdallah_abdal'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdallah Abdal</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'ali_jaber'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdullah Ali Jabir</Link></li>
                                    </ul>
                                </div>
                                <div className="flex gap-6 pb-12 mb-12 border-b-2 group">
                                    <div className="name-letter">
                                        <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">B</span>
                                    </div>
                                    <ul className="grid grid-cols-4 w-full">
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'bandar_baleela'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Bandar Baleela</Link></li>
                                    </ul>
                                </div>
                                <div className="flex gap-6 pb-12 mb-12 border-b-2 group">
                                    <div className="name-letter">
                                        <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">D</span>
                                    </div>
                                    <ul className="grid grid-cols-4 w-full">
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'dr.shawqy_7amed'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Dr. Shawqy Hamed [Murattal]</Link></li>
                                    </ul>
                                </div>
                                <div className="flex gap-6 pb-12 mb-12 border-b-2 group">
                                    <div className="name-letter">
                                        <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">F</span>
                                    </div>
                                    <ul className="grid grid-cols-4 w-full">
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'fares'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Fares Abbad</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'fatih_seferagic'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Fatih Seferagic</Link></li>
                                    </ul>
                                </div>
                                <div className="flex gap-6 pb-12 mb-12 border-b-2 group">
                                    <div className="name-letter">
                                        <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">H</span>
                                    </div>
                                    <ul className="grid grid-cols-4 w-full">
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'rifai'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Hani ar-Rifai</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'hamad_sinan'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Hamad Sinan</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'hatem_farid'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Hatem Farid</Link></li>
                                    </ul>
                                </div>
                                <div className="flex gap-6 pb-12 mb-12 border-b-2 group">
                                    <div className="name-letter">
                                        <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">I</span>
                                    </div>
                                    <ul className="grid grid-cols-4 w-full">
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'jibreen'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Ibrahim Al-Jibrin</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'imad_zuhair_hafez'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Imad Zuhair Hafez</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'ibrahim_al_akhdar'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Ibrahim Al Akhdar</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'idrees_abkar'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Idrees Abkar</Link></li>
                                    </ul>
                                </div>
                                <div className="flex gap-6 pb-12 mb-12 border-b-2 group">
                                    <div className="name-letter">
                                        <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">K</span>
                                    </div>
                                    <ul className="grid grid-cols-4 w-full">
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'khaalid_al-qahtaanee'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Khalid al-Qahtani</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'khalid_alghamdi'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Khalid Al Ghamdi</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'khalifah_taniji'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Khalifah Taniji</Link></li>
                                    </ul>
                                </div>
                                <div className="flex gap-6 pb-12 mb-12 border-b-2 group">
                                    <div className="name-letter">
                                        <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">M</span>
                                    </div>
                                    <ul className="grid grid-cols-4 w-full">
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'mishaari_raashid_al_3afaasee'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Mishari Rashid al-Afasy</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'muhammad_siddeeq_al-minshaawee'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Muhammad Siddiq al-Minshawi</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'muhammad_jibreel'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Muhammad Jibreel</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'mehysni'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Muhammad al-Mehysni</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'minshawi_mujawwad'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Muhammad Siddiq al-Minshawi [Mujawwad]</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'muhammad_alhaidan'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Muhammad al-Luhaidan</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'muhammad_abdulkareem'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Muhammad Abdul-Kareem</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'mustafa_al3azzawi'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Mustafa al-`Azawi</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'mu7ammad_7assan'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Muhammad Hassan</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'mostafa_ismaeel'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Mostafa Ismaeel</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'muhammad_patel'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Muhammad Sulaiman Patel</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'mohammad_altablawi'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Mohammad Al-Tablawi</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'mohammad_ismaeel_almuqaddim'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Mohammad Ismaeel Al-Muqaddim</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'muhammad_ayyoob_hq'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Muhammad Ayyoob [Taraweeh]</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'masjid_quba_1434'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Masjid Quba Taraweeh 1434</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'muhammad_khaleel'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Muhammad Khaleel</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'mahmood_khaleel_al-husaree_iza3a'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Mahmoud Khaleel Al-Husary</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'mahmood_ali_albana'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Mahmood Ali Al-Bana</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'maher_almu3aiqly'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Maher al-Muaiqly</Link></li>
                                    </ul>
                                </div>
                                <div className="flex gap-6 pb-12 mb-12 border-b-2 group">
                                    <div className="name-letter">
                                        <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">N</span>
                                    </div>
                                    <ul className="grid grid-cols-4 w-full">
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'nabil_rifa3i'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Nabil ar-Rifai</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'nasser_bin_ali_alqatami'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Nasser Al Qatami</Link></li>
                                    </ul>
                                </div>
                                <div className="flex gap-6 pb-12 mb-12 border-b-2 group">
                                    <div className="name-letter">
                                        <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">S</span>
                                    </div>
                                    <ul className="grid grid-cols-4 w-full">
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'sa3ood_al-shuraym'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Sa`ud ash-Shuraym</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'sa3d_al-ghaamidi'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Saad al-Ghamdi</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'sahl_yaaseen'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Sahl Yasin</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'salaah_bukhaatir'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Salah Bukhatir</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'sodais_and_shuraim'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Sudais and Shuraym</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'saleh_al_taleb'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Saleh al Taleb</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'salahbudair'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Salah al-Budair</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'sadaqat_ali'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Sadaqat `Ali</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'salah_alhashim'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Salah Al-Hashim</Link></li>
                                    </ul>
                                </div>
                                <div className="flex gap-6 pb-12 mb-12 border-b-2 group">
                                    <div className="name-letter">
                                        <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">T</span>
                                    </div>
                                    <ul className="grid grid-cols-4 w-full">
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'tawfeeq_bin_saeed-as-sawaaigh'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Tawfeeq ibn Sa`id as-Sawa'igh</Link></li>
                                    </ul>
                                </div>
                                <div className="flex gap-6 pb-12 mb-12 border-b-2 group">
                                    <div className="name-letter">
                                        <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">W</span>
                                    </div>
                                    <ul className="grid grid-cols-4 w-full">
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'wadee_hammadi_al-yamani'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Wadee Hammadi Al Yamani</Link></li>
                                    </ul>
                                </div>
                                <div className="flex gap-6 group">
                                    <div className="name-letter">
                                        <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">Y</span>
                                    </div>
                                    <ul className="grid grid-cols-4 w-full">
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'yasser_ad-dussary'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Yasser ad-Dussary</Link></li>
                                    </ul>
                                </div>
                            </div>
                        }
                        {activeTab === 1 && 
                            <div className="flex flex-col flex-grow overflow-scroll no-scrollbar h-full">
                                <div className="flex gap-6 flex-col pb-12 mb-12 border-b-2 group">
                                    <div className="name-letter">
                                        <span className="text-2xl w-fit h-auto pb-2 pr-8 border-b-2 border-teal-500 transition duration-300">Makkah</span>
                                    </div>
                                    <ul className="grid grid-cols-4 w-full">
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'makkah_1426'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1426</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'makkah_1427'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1427</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'makkah_1425'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1425</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'makkah_1428'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1428</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'makkah_1424'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1424</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'makkah_1429'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1429</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'makkah_1430'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1430</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'makkah_1431'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1431</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'makkah_1432'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1432</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'makkah_1433'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1433</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'makkah_1434'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1434</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'makkah_1435'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1435</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'makkah_1436'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1436</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'makkah_1437'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1437</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'makkah_1438'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1438</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'makkah_1439'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1439</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'makkah_1440'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1440</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'makkah_1441'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1441</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'makkah_1442'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1442</Link></li>
                                    </ul>
                                </div>
                                <div className="flex gap-6 flex-col group">
                                    <div className="name-letter">
                                        <span className="text-2xl w-fit h-auto pb-2 pr-8 border-b-2 border-teal-500 transition duration-300">Madinah</span>
                                    </div>
                                    <ul className="grid grid-cols-4 w-full">
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'madinah_1419'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1419</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'madinah_1426'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1426</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'madinah_1427'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1427</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'madinah_1423'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1423</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'madinah_1428'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1428</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'madinah_1431'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1431</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'madinah_1429'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1429</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'madinah_1430'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1430</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'madinah_1432'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1432</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'madinah_1433'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1433</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'madinah_1435'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1435</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'madinah_1434'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1434</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'madinah_1436'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1436</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'madinah_1437'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1437</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'madinah_1439'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1439</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'madinah_1440'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1440</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'madinah_1441'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1441</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'madinah_1442'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1442</Link></li>
                                    </ul>
                                </div>
                            </div>
                        }
                        {activeTab === 2 && 
                            <div className="flex flex-col flex-grow overflow-scroll no-scrollbar h-full">
                                <div className="flex gap-6 pb-12 mb-12 border-b-2 group">
                                    <div className="name-letter">
                                        <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">A</span>
                                    </div>
                                    <ul className="grid grid-cols-4 w-full">
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdulbaset_warsh'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">AbdulBaset AbdulSamad [Warsh]</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdurrashid_sufi_soosi_rec'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdur-Rashid Sufi [Soosi]</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdurrashid_sufi_-_khalaf_3an_7amza_recitation'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdur-Rashid Sufi [Khalaf]</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdurrashid_sufi_abi_al7arith'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdur-Rashid Sufi [Abi al-Haarith an al-Kasaa'ee]</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdurrashid_sufi_doori'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdur-Rashid Sufi [ad-Doori an Abi Amr]</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdurrashid_sufi_shu3ba'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdur-Rashid Sufi [Shu'bah an Asim]</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'huthayfi_qaloon'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Ali al-Huthaify [Qaloon]</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdurrashid_sufi_soosi_2020'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdur-Rashid Sufi [Soosi, 2020]</Link></li>
                                    </ul>
                                </div>
                                <div className="flex gap-6 pb-12 mb-12 border-b-2 group">
                                    <div className="name-letter">
                                        <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">M</span>
                                    </div>
                                    <ul className="grid grid-cols-4 w-full">
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'mahmood_khaleel_al-husaree_doori'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Mahmoud Khalil Al-Husary [Doori]</Link></li>
                                    </ul>
                                </div>
                                <div className="flex gap-6 group">
                                    <div className="name-letter">
                                        <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">N</span>
                                    </div>
                                    <ul className="grid grid-cols-4 w-full">
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'noreen_siddiq'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Noreen Siddiq [ad-Doori an Abi Amr]</Link></li>
                                    </ul>
                                </div>
                            </div>
                        }
                        {activeTab === 3 && 
                            <div className="flex flex-col flex-grow overflow-scroll no-scrollbar h-full">
                                <div className="flex gap-6 pb-12 mb-12 border-b-2 group">
                                    <div className="name-letter">
                                        <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">A</span>
                                    </div>
                                    <ul className="grid grid-cols-4 w-full">
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdulbaset_with_naeem_sultan_pickthall'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">AbdulBaset AbdulSamad with Naeem Sultan [Pickthall Translation]</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdulbasit_w_ibrahim_walk_si'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">AbdulBaset AbdulSamad with Ibrahim Walk [Saheeh Intl Translation]</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'abdullah_basfar_w_ibrahim_walk_si'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdullah Basfar with Ibrahim Walk [Saheeh Intl Translation]</Link></li>
                                    </ul>
                                </div>
                                <div className="flex gap-6 pb-12 mb-12 border-b-2 group">
                                    <div className="name-letter">
                                        <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">M</span>
                                    </div>
                                    <ul className="grid grid-cols-4 w-full">
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'muhammad_ayub_and_mikaal_waters'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Muhammad Ayyub with Mikaal Waters [Muhsin Khan Translation]</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'mishaari_with_saabir_mkhan'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Mishari ibn Rashid al-`Afasy with Saabir [Muhsin Khan Translation]</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'mishaari_w_ibrahim_walk_si'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Mishari ibn Rashid al-`Afasy with Ibrahim Walk [Saheeh Intl Translation]</Link></li>
                                    </ul>
                                </div>
                                <div className="flex gap-6 group">
                                    <div className="name-letter">
                                        <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">S</span>
                                    </div>
                                    <ul className="grid grid-cols-4 w-full">
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'sudais_shuraim_and_english'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Sudais and Shuraym with Aslam Athar [Pickthall Translation]</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'shakir_qasami_with_english'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Shakir Qasami with Aslam Athar [Pickthall Translation]</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'sudais_shuraim_with_naeem_sultan_pickthall'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Sudais and Shuraym with Naeem Sultan [Pickthall Translation]</Link></li>
                                        <li><Link to={NavPath({path: 'quranAudio', author: 'sudais_and_shuraim_with_urdu'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Sudais and Shuraym [Urdu Translation]</Link></li>
                                    </ul>
                                </div>
                            </div>
                        }
                    </div>
                </React.Fragment>
            )}
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