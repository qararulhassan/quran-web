import React from 'react'
import { QuranChapters, QuranAyahs } from "./content/content"
import { Header } from "./header/header"


export const HomePage = () => {
    return (
        <React.Fragment>
            <Header />
            <QuranChapters />
        </React.Fragment>
    )
}

export const AyahPage = () => {
    return (
        <React.Fragment>
            <Header />
            <QuranAyahs />
        </React.Fragment>
    )
}