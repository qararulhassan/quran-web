import './App.css';
import React from 'react';
import { AyahsPage, SurahsPage } from './pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={SurahsPage} />
        <Route exact path='/surah' Component={SurahsPage} />
        <Route exact path='/surah/:surahNumber' Component={AyahsPage} />
      </Routes>
    </Router>
  );
}

export default App;
