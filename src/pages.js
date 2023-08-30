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