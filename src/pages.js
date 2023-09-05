import React from 'react';
import { Header } from './components/header/header';
import { SurahsBody } from './screens/surahs';
import { AyahsBody } from './screens/ayahs';
import { useParams } from 'react-router-dom';
import { AudioBody } from './screens/audio';

export const NavPath = (props) => {
    const { author } = useParams();
    if (props.path === "surahsList") {
        return `/${author}`
    }
    if (props.path === "recitorsList") {
        return `/audio`
    }
    if (props.path === "quranAudio") {
        return `/audio/${props.author}`
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
    // return `https://quranaudio.s3.us-east-005.backblazeb2.com/${author}/surah/${surahNumber}.mp3`;
}

export const AyahAudio = (props) => {
    const author = props.author;
    const ayahNumber = props.ayahNumber;
    return require(`./quran/audio/${author}/ayah/${ayahNumber}.mp3`);
}

export const ChaptersAudio = (props) => {
    const author = props.author;
    const chapter = props.chapter;
    return `https://download.quranicaudio.com/quran/${author}/${chapter}.mp3`;
}

export const SurahsPage = () => {
    return (
        <div className='flex flex-col h-screen overflow-hidden'>
            <Header />
            <SurahsBody />
        </div>
    )
}

export const AyahsPage = () => {
    return (
        <div className='flex flex-col h-screen overflow-hidden'>
            <Header />
            <AyahsBody />
        </div>
    )
}

export const RecitorsPage = () => {
    return (
        <div className='flex flex-col h-screen overflow-hidden'>
            <Header />
            <AudioBody />
        </div>
    )
}

export const RecitorsAudioPage = () => {
    return (
        <div className='flex flex-col h-screen overflow-hidden'>
            <Header />
            <AudioBody />
        </div>
    )
}