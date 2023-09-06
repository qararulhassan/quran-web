import './App.css';
import React from 'react';
import { AyahsPage, RecitorsAudioPage, RecitorsPage, SurahsPage } from './pages';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/:author' Component={SurahsPage} />
        <Route exact path='/:author/surah' Component={SurahsPage} />
        <Route exact path='/:author/surah/:surahNumber' Component={AyahsPage} />
        <Route exact path='/audio' Component={RecitorsPage} />
        <Route exact path='/audio/:author' Component={RecitorsAudioPage} />

        {/* <Route exact path='/*' Component={RedirectToDefault} /> */}
      </Routes>
    </Router>
  );
}

// function RedirectToDefault() {
//   const navigate = useNavigate();

//   React.useEffect(() => {
//     navigate('/muhammad-asad', { replace: true });
//   }, [navigate]);

//   return null;
// }

export default App;
