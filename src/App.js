import React, { useEffect, useState, Fragment } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  const [lang, setLang] = useState('en');
  const [route, setRoute] = useState('home');

  const switchLang = () => {
    lang === 'en' ? setLang('ru') : setLang('en');
  };

  const switchRoute = route => {
    setRoute(route);
  };

  return (
    <Fragment>
      <Navbar lang={lang} switchRoute={switchRoute} switchLang={switchLang} />
      <div className='container'>
        {route === 'home' ? (
          <Home lang={lang} switchRoute={switchRoute} />
        ) : (
          <Projects lang={lang} />
        )}
        <Contact />
      </div>
    </Fragment>
  );
};

export default App;
