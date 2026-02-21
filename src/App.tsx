import React, {Suspense, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss'
import {AboutPage} from "./pages/AboutPage/index";
import {MainPage} from "./pages/MainPage/index";
import {useTheme} from "./theme/useTheme";
import {cn} from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={cn('app', theme)}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback='Loading...'>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
