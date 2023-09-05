// Desc: Content component
import React, { useState, useCallback, useEffect } from "react";
import { ItemList } from "../content/items";
import { Link, useParams } from "react-router-dom";
import { LoadingAnimation, NetworkError } from "../../assets/svgIcons";
import { SurahsPlayer } from "../content/Waveform";
import { AyahsAPI, AyahAudio, NavPath } from "../../pages";

export const RecitorsList = () => {
    const [activeTab, setActiveTab] = useState(1);
    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };
    return (
        <React.Fragment>
            <ul className="bg-teal-300 p-1 inline-flex gap-2 mx-auto rounded-full mb-12">
                <li className={`tab ${activeTab === 1 ? 'bg-white text-teal-500' : ''} transition duration-300 px-5 py-3 rounded-full hover:bg-white hover:text-teal-500 cursor-pointer`} onClick={() => handleTabClick(1)}>Recitations</li>
                <li className={`tab ${activeTab === 2 ? 'bg-white text-teal-500' : ''} transition duration-300 px-5 py-3 rounded-full hover:bg-white hover:text-teal-500 cursor-pointer`} onClick={() => handleTabClick(2)}>Recitations from Haramain Taraweeh</li>
                <li className={`tab ${activeTab === 3 ? 'bg-white text-teal-500' : ''} transition duration-300 px-5 py-3 rounded-full hover:bg-white hover:text-teal-500 cursor-pointer`} onClick={() => handleTabClick(3)}>Non-Hafs Recitations</li>
                <li className={`tab ${activeTab === 4 ? 'bg-white text-teal-500' : ''} transition duration-300 px-5 py-3 rounded-full hover:bg-white hover:text-teal-500 cursor-pointer`} onClick={() => handleTabClick(4)}>Recitations with Translations</li>
            </ul>
            <div className="tab-content overflow-scroll">
                {activeTab === 1 && 
                    <div className="flex flex-col flex-grow overflow-scroll no-scrollbar h-full">
                        <div className="flex gap-6 pb-12 mb-12 border-b-2 group">
                            <div className="name-letter">
                                <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">A</span>
                            </div>
                            <ul className="grid grid-cols-4 w-full">
                                <li><Link to={NavPath({path: 'quranAudio', author: 'abdullaah_3awwaad_al-juhaynee'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdullah Awad al-Juhani</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'abdullah_basfar'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdullah Basfar</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'abdur-rahman_as-sudais'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdur-Rahman as-Sudais</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'ali_abdur-Rahman_al-huthaify'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Ali Abdur-Rahman al-Huthaify</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'abdulmuhsin_al-qasim'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">AbdulMuhsin al-Qasim</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'abdulbari_ath-thubaity'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">AbdulBari ath-Thubaity</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'ahmed_ibn_ali_al-ajmy'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Ahmed ibn Ali al-Ajmy</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'abdulazeez_al-ahmad'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">AbdulAzeez al-Ahmad</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'abdulbaset_abdulsamad_murattal'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">AbdulBaset AbdulSamad [Murattal]</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'abdulwadud_haneef'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">AbdulWadud Haneef</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'aziz_alili'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Aziz Alili</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'abdulbaset_mujawwad'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">AbdulBaset AbdulSamad [Mujawwad]</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'alhusaynee_al3azazee_with_children'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Al-Hussayni Al-'Azazy (with Children)</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'abdur-razaq_bin_abtan_al-dulaimi_mujawwad'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdur-Razaq bin Abtan al-Dulaimi [Mujawwad]</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'abdullah_khayat'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdullah Khayat</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'adel_kalbani'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Adel Kalbani</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'abdulkareem_al_hazmi'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">AbdulKareem Al Hazmi</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'abdul-mun3im_abdul-mubdi'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdul-Mun'im Abdul-Mubdi</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'abdur-rashid_sufi'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdur-Rashid Sufi</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'ahmad_al-huthaify'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Ahmad al-Huthaify</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'abu_bakr_al-shatri_taraweeh'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abu Bakr al-Shatri [Taraweeh]</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'abdullah_matroud'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdullah Matroud</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'abdulwadood_haneef'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">AbdulWadood Haneef</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'ahmad_nauina'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Ahmad Nauina</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'akram_al-alaqmi'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Akram Al-Alaqmi</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'ali_hajjaj_alsouasi'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Ali Hajjaj Alsouasi</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'asim_abdul_aleem'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Asim Abdul Aleem</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'abdallah_abdal'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdallah Abdal</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'abdullah_ali_jabir'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdullah Ali Jabir</Link></li>
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
                                <li><Link to={NavPath({path: 'quranAudio', author: 'dr._shawqy_7amed'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Dr. Shawqy Hamed [Murattal]</Link></li>
                            </ul>
                        </div>
                        <div className="flex gap-6 pb-12 mb-12 border-b-2 group">
                            <div className="name-letter">
                                <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">F</span>
                            </div>
                            <ul className="grid grid-cols-4 w-full">
                                <li><Link to={NavPath({path: 'quranAudio', author: 'fares_abbad'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Fares Abbad</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'fatih_seferagic'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Fatih Seferagic</Link></li>
                            </ul>
                        </div>
                        <div className="flex gap-6 pb-12 mb-12 border-b-2 group">
                            <div className="name-letter">
                                <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">H</span>
                            </div>
                            <ul className="grid grid-cols-4 w-full">
                                <li><Link to={NavPath({path: 'quranAudio', author: 'hani_ar-rifai'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Hani ar-Rifai</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'hamad_sinan'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Hamad Sinan</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'hatem_farid'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Hatem Farid</Link></li>
                            </ul>
                        </div>
                        <div className="flex gap-6 pb-12 mb-12 border-b-2 group">
                            <div className="name-letter">
                                <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">I</span>
                            </div>
                            <ul className="grid grid-cols-4 w-full">
                                <li><Link to={NavPath({path: 'quranAudio', author: 'ibrahim_al-jibrin'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Ibrahim Al-Jibrin</Link></li>
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
                                <li><Link to={NavPath({path: 'quranAudio', author: 'khalid_al-Qahtani'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Khalid al-Qahtani</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'khalid_al_ghamdi'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Khalid Al Ghamdi</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'khalifah_taniji'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Khalifah Taniji</Link></li>
                            </ul>
                        </div>
                        <div className="flex gap-6 pb-12 mb-12 border-b-2 group">
                            <div className="name-letter">
                                <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">M</span>
                            </div>
                            <ul className="grid grid-cols-4 w-full">
                                <li><Link to={NavPath({path: 'quranAudio', author: 'mishari_rashid_al-3afasy'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Mishari Rashid al-3Afasy</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'muhammad_siddiq_al-minshawi'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Muhammad Siddiq al-Minshawi</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'muhammad_jibreel'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Muhammad Jibreel</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'muhammad_al-mehysni'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Muhammad al-Mehysni</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'muhammad_siddiq_al-minshawi_mujawwad'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Muhammad Siddiq al-Minshawi [Mujawwad]</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'muhammad_al-luhaidan'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Muhammad al-Luhaidan</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'muhammad_abdul-kareem'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Muhammad Abdul-Kareem</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'mustafa_al-3azawi'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Mustafa al-`Azawi</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'muhammad_hassan'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Muhammad Hassan</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'mostafa_ismaeel'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Mostafa Ismaeel</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'muhammad_sulaiman_patel'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Muhammad Sulaiman Patel</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'mohammad_al-tablawi'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Mohammad Al-Tablawi</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'mohammad_ismaeel_al-muqaddim'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Mohammad Ismaeel Al-Muqaddim</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'muhammad_ayyoob_taraweeh'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Muhammad Ayyoob [Taraweeh]</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'masjid_quba_taraweeh_1434'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Masjid Quba Taraweeh 1434</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'muhammad_khaleel'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Muhammad Khaleel</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'mahmoud_khaleel_al-husary'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Mahmoud Khaleel Al-Husary</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'mahmood_ali_al-bana'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Mahmood Ali Al-Bana</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'maher_al-muaiqly'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Maher al-Muaiqly</Link></li>
                            </ul>
                        </div>
                        <div className="flex gap-6 pb-12 mb-12 border-b-2 group">
                            <div className="name-letter">
                                <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">N</span>
                            </div>
                            <ul className="grid grid-cols-4 w-full">
                                <li><Link to={NavPath({path: 'quranAudio', author: 'nabil_ar-rifai'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Nabil ar-Rifai</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'nasser_al_qatami'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Nasser Al Qatami</Link></li>
                            </ul>
                        </div>
                        <div className="flex gap-6 pb-12 mb-12 border-b-2 group">
                            <div className="name-letter">
                                <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">S</span>
                            </div>
                            <ul className="grid grid-cols-4 w-full">
                                <li><Link to={NavPath({path: 'quranAudio', author: 'sa3ud_ash-shuraym'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Sa`ud ash-Shuraym</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'saad_al-ghamdi'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Saad al-Ghamdi</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'sahl_yasin'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Sahl Yasin</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'salah_bukhatir'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Salah Bukhatir</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'sudais_and_shuraym'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Sudais and Shuraym</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'saleh_al_taleb'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Saleh al Taleb</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'salah_al-budair'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Salah al-Budair</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'sadaqat_3ali'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Sadaqat `Ali</Link></li>
                                <li><Link to={NavPath({path: 'quranAudio', author: 'salah_al-hashim'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Salah Al-Hashim</Link></li>
                            </ul>
                        </div>
                        <div className="flex gap-6 pb-12 mb-12 border-b-2 group">
                            <div className="name-letter">
                                <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">T</span>
                            </div>
                            <ul className="grid grid-cols-4 w-full">
                                <li><Link to={NavPath({path: 'quranAudio', author: 'tawfeeq_ibn_sa3id_as-sawa3igh'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Tawfeeq ibn Sa`id as-Sawa'igh</Link></li>
                            </ul>
                        </div>
                        <div className="flex gap-6 pb-12 mb-12 border-b-2 group">
                            <div className="name-letter">
                                <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">W</span>
                            </div>
                            <ul className="grid grid-cols-4 w-full">
                                <li><Link to={NavPath({path: 'quranAudio', author: 'wadee_hammadi_al_yamani'})} className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Wadee Hammadi Al Yamani</Link></li>
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
                {activeTab === 2 && 
                    <div className="flex flex-col flex-grow overflow-scroll no-scrollbar h-full">
                        <div className="flex gap-6 flex-col pb-12 mb-12 border-b-2 group">
                            <div className="name-letter">
                                <span className="text-2xl w-fit h-auto pb-2 pr-8 border-b-2 border-teal-500 transition duration-300">Makkah</span>
                            </div>
                            <ul className="grid grid-cols-4 w-full">
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1426</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1427</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1425</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1428</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1424</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1429</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1430</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1431</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1432</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1433</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1434</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1435</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1436</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1437</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1438</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1439</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1440</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1441</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Makkah Taraweeh 1442</Link></li>
                            </ul>
                        </div>
                        <div className="flex gap-6 flex-col group">
                            <div className="name-letter">
                                <span className="text-2xl w-fit h-auto pb-2 pr-8 border-b-2 border-teal-500 transition duration-300">Madinah</span>
                            </div>
                            <ul className="grid grid-cols-4 w-full">
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1419</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1426</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1427</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1423</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1428</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1431</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1429</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1430</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1432</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1433</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1435</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1434</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1436</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1437</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1439</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1440</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1441</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Madinah Taraweeh 1442</Link></li>
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
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">AbdulBaset AbdulSamad [Warsh]</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdur-Rashid Sufi [Soosi]</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdur-Rashid Sufi [Khalaf]</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdur-Rashid Sufi [Abi al-Haarith an al-Kasaa'ee]</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdur-Rashid Sufi [ad-Doori an Abi Amr]</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdur-Rashid Sufi [Shu'bah an Asim]</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Ali al-Huthaify [Qaloon]</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdur-Rashid Sufi [Soosi, 2020]</Link></li>
                            </ul>
                        </div>
                        <div className="flex gap-6 pb-12 mb-12 border-b-2 group">
                            <div className="name-letter">
                                <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">M</span>
                            </div>
                            <ul className="grid grid-cols-4 w-full">
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Mahmoud Khalil Al-Husary [Doori]</Link></li>
                            </ul>
                        </div>
                        <div className="flex gap-6 group">
                            <div className="name-letter">
                                <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">N</span>
                            </div>
                            <ul className="grid grid-cols-4 w-full">
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Noreen Siddiq [ad-Doori an Abi Amr]</Link></li>
                            </ul>
                        </div>
                    </div>
                }
                {activeTab === 4 && 
                    <div className="flex flex-col flex-grow overflow-scroll no-scrollbar h-full">
                        <div className="flex gap-6 pb-12 mb-12 border-b-2 group">
                            <div className="name-letter">
                                <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">A</span>
                            </div>
                            <ul className="grid grid-cols-4 w-full">
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">AbdulBaset AbdulSamad with Naeem Sultan [Pickthall Translation]</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">AbdulBaset AbdulSamad with Ibrahim Walk [Saheeh Intl Translation]</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Abdullah Basfar with Ibrahim Walk [Saheeh Intl Translation]</Link></li>
                            </ul>
                        </div>
                        <div className="flex gap-6 pb-12 mb-12 border-b-2 group">
                            <div className="name-letter">
                                <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">M</span>
                            </div>
                            <ul className="grid grid-cols-4 w-full">
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Muhammad Ayyub with Mikaal Waters [Muhsin Khan Translation]</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Mishari ibn Rashid al-`Afasy with Saabir [Muhsin Khan Translation]</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Mishari ibn Rashid al-`Afasy with Ibrahim Walk [Saheeh Intl Translation]</Link></li>
                            </ul>
                        </div>
                        <div className="flex gap-6 group">
                            <div className="name-letter">
                                <span className="w-10 aspect-square inline-flex justify-center items-center border-2 border-teal-300 h-auto rounded-full uppercase relative top-2 group-hover:bg-white group-hover:text-teal-500 group-hover:border-white transition duration-300">S</span>
                            </div>
                            <ul className="grid grid-cols-4 w-full">
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Sudais and Shuraym with Aslam Athar [Pickthall Translation]</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Shakir Qasami with Aslam Athar [Pickthall Translation]</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Sudais and Shuraym with Naeem Sultan [Pickthall Translation]</Link></li>
                                <li><Link to="/" className="block hover:bg-white hover:text-teal-500 transition duration-300 p-4">Sudais and Shuraym [Urdu Translation]</Link></li>
                            </ul>
                        </div>
                    </div>
                }
            </div>
        </React.Fragment>
    );
}


export const ChaptersAudio = () => {
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