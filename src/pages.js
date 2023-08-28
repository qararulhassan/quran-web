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
        <React.Fragment>
            <Header />
            <SurahsBody />
        </React.Fragment>
    )
}

export const AyahsPage = () => {
    return (
        <React.Fragment>
            <Header />
            <AyahsBody />
        </React.Fragment>
    )
}