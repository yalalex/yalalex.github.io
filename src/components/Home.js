import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ lang, switchRoute }) => {
  return (
    <h3 className='center white-text'>
      {lang === 'en' ? (
        <div>
          <p>Hello, I'm Alex.</p>
          <p>I'm web developer from Minsk, Belarus.</p>
        </div>
      ) : (
        <div>
          <p>Привет, меня зовут Александр.</p>
          <p>Я веб-разработчик из Минска, Беларусь.</p>
        </div>
      )}
      <a
        href='#projects'
        onClick={() => switchRoute('projects')}
        className='waves-effect waves-light btn-large'
      >
        <i className='material-icons right'>trending_flat</i>
        {lang === 'en' ? 'my projects' : 'мои работы'}
      </a>
    </h3>
  );
};

Home.propTypes = {
  lang: PropTypes.string.isRequired,
  switchRoute: PropTypes.func.isRequired
};

export default Home;
