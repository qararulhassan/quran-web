import React from 'react';
import { Header } from './components/header/header';
import { SurahsBody } from './screens/surahs';
import { AyahsBody } from './screens/ayahs';
import { useParams } from 'react-router-dom';

export const NavPath = (props) => {
    const { author } = useParams();
    if (props.path === "surahsList") {
        return `/${author}`
    }
}

export const SurahsAPI = () => {
    return "https://raw.githubusercontent.com/qararulhassan/quran-web/main/src/quran/text/surah/api.json";
}

export const AyahsAPI = (props) => {
    const fileName = props.fileName;
    return `https://raw.githubusercontent.com/qararulhassan/quran-web/main/src/quran/text/ayah/${fileName}.json`;
}

export const SurahAudio = (props) => {
    const author = props.author;
    const surahNumber = props.surahNumber;
    return require(`./quran/audio/${author}/surah/${surahNumber}.mp3`);
}

export const AyahAudio = (props) => {
    const author = props.author;
    const ayahNumber = props.ayahNumber;
    return require(`./quran/audio/${author}/ayah/${ayahNumber}.mp3`);
}

export const SurahsPage = () => {
    return (
        <div className='flex flex-col max-h-screen overflow-hidden'>
            <Header />
            <SurahsBody />
        </div>
    )
}

export const AyahsPage = () => {
    return (
        <div className='flex flex-col max-h-screen overflow-hidden'>
            <Header />
            <AyahsBody />
        </div>
    )
}