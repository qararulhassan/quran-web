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

export const SurahAudio = (props) => {
    const author = props.author;
    const surahNumber = props.number;
    return `https://quranaudio.s3.us-east-005.backblazeb2.com/${author}/surah/${surahNumber}.mp3`
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