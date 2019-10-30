import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import logo from './logo/3.png';

const Navbar = ({ lang, switchLang, switchRoute }) => {
  return (
    <Fragment>
      <nav style={{ height: '64px' }}>
        <div className='nav-wrapper'>
          <a
            href='#home'
            onClick={() => switchRoute('home')}
            className='brand-logo'
          >
            <img alt='' src={logo} style={{ height: '64px' }} />
          </a>
          <a href='#' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <a href='#home' onClick={() => switchRoute('home')}>
                {lang === 'en' ? 'Home' : 'Домой'}
              </a>
            </li>
            <li>
              <a href='#projects' onClick={() => switchRoute('projects')}>
                {lang === 'en' ? 'Projects' : 'Работы'}
              </a>
            </li>
            <li>
              <a
                href='http://github.com/yalalex/'
                rel='noopener noreferrer'
                target='_blank'
              >
                Github
              </a>
            </li>
          </ul>
          <ul id='nav-mobile' className='right'>
            <li>
              <a onClick={switchLang}>{lang === 'en' ? 'RU' : 'EN'}</a>
            </li>
          </ul>
        </div>
      </nav>
      <ul className='sidenav' id='mobile-demo'>
        <li>
          <a href='#home' onClick={() => switchRoute('home')}>
            {lang === 'en' ? 'Home' : 'Домой'}
          </a>
        </li>
        <li>
          <a href='#projects' onClick={() => switchRoute('projects')}>
            {lang === 'en' ? 'Projects' : 'Работы'}
          </a>
        </li>
        <li>
          <a href='http://github.com/yalalex/'>Github</a>
        </li>
      </ul>
    </Fragment>
  );
};

Navbar.propTypes = {
  lang: PropTypes.string.isRequired,
  switchLang: PropTypes.func.isRequired,
  switchRoute: PropTypes.func.isRequired
};

export default Navbar;
