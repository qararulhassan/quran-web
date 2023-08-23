import './App.css';
import React from 'react';
import { HomePage, AyahPage } from './components/pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={HomePage} />
        <Route exact path='/surah' Component={HomePage} />
        <Route exact path='/surah/:surahNumber' Component={AyahPage} />
      </Routes>
    </Router>
  );
}

export default App;
