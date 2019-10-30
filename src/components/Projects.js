import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import fid from './screenshots/fid.PNG';
import wa from './screenshots/wa.PNG';
import wa2 from './screenshots/wa2.PNG';

const Projects = ({ lang }) => {
  return (
    <Fragment>
      <div className='col s12'>
        <h2 className='header'>Weather App V2 (w/ Redux)</h2>
        <div className='card horizontal'>
          <div className='card-image'>
            <img
              className='materialboxed responsive-img'
              src={wa2}
              alt=''
              width='650'
            />
          </div>
          <div className='card-stacked'>
            <div className='card-content'>
              {lang === 'en' ? (
                <div>
                  <p>
                    Fully responsive web application for searching weather in
                    more than 134,000 cities in the world.
                  </p>
                  <p>
                    Provides information on current weather, as well as a
                    detailed forecast for the next 48 hours and a forecast for
                    15 days.
                  </p>
                  <p>Made with React.js + Redux.js.</p>
                  <p>API's: GeoDB Cities, OpenWeatherMap, WeatherBit.</p>
                </div>
              ) : (
                <div>
                  <p>
                    Приложение для поиска погоды в более чем 134 000 городах
                    мира.
                  </p>
                  <p>
                    Предоставляет информацию по текущей погоде, а так же
                    подробный прогноз на ближайшие 48 часов и прогноз на 15
                    дней.
                  </p>
                  <p>Сделано на React.js + Redux.js.</p>
                  <p>
                    Используемые API: GeoDB Cities, OpenWeatherMap, WeatherBit.
                  </p>
                </div>
              )}
            </div>
            <div className='card-action'>
              <a href='/weather-app-redux'>
                {lang === 'en' ? 'Website' : 'Веб-сайт'}
              </a>
              <a
                href='https://github.com/yalalex/weather-app-redux'
                rel='noopener noreferrer'
                target='_blank'
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='col s12'>
        <h2 className='header'>Weather App</h2>
        <div className='card horizontal'>
          <div className='card-image'>
            <img
              className='materialboxed responsive-img'
              src={wa}
              alt=''
              width='650'
            />
          </div>
          <div className='card-stacked'>
            <div className='card-content'>
              {lang === 'en' ? (
                <div>
                  <p>
                    Fully responsive web application for searching weather in
                    more than 134,000 cities in the world.
                  </p>
                  <p>
                    Provides information on current weather, as well as a
                    detailed forecast for the next 48 hours and a forecast for
                    15 days.
                  </p>
                  <p>Made with React.js.</p>
                  <p>API's: GeoDB Cities, OpenWeatherMap, WeatherBit.</p>
                </div>
              ) : (
                <div>
                  <p>
                    Приложение для поиска погоды в более чем 134 000 городах
                    мира.
                  </p>
                  <p>
                    Предоставляет информацию по текущей погоде, а так же
                    подробный прогноз на ближайшие 48 часов и прогноз на 15
                    дней.
                  </p>
                  <p>Сделано на React.js.</p>
                  <p>
                    Используемые API: GeoDB Cities, OpenWeatherMap, WeatherBit.
                  </p>
                </div>
              )}
            </div>
            <div className='card-action'>
              <a href='/weather-app'>
                {lang === 'en' ? 'Website' : 'Веб-сайт'}
              </a>
              <a
                href='https://github.com/yalalex/weather-app'
                rel='noopener noreferrer'
                target='_blank'
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='col s12'>
        <h2 className='header'>Face Info Detector</h2>
        <div className='card horizontal'>
          <div className='card-image'>
            <img
              className='materialboxed responsive-img'
              src={fid}
              alt=''
              width='650'
            />
          </div>
          <div className='card-stacked'>
            <div className='card-content'>
              {lang === 'en' ? (
                <div>
                  <p>
                    Full stack web application for detecting persons' gender,
                    age and race on the URL based photo.
                  </p>
                  <p>Front-End: React.js.</p>
                  <p>
                    Back-End: Node.js (Express.js) + PostgreSQL + Clarifai API.
                  </p>
                </div>
              ) : (
                <div>
                  <p>
                    Фулл-стэк веб-приложение, определяющее пол, возраст и
                    расовую принадлежность людей на фотографии, предоставленной
                    посредством URL-адреса.
                  </p>
                  <p>Front-End: React.js.</p>
                  <p>
                    Back-End: Node.js (Express.js) + PostgreSQL + Clarifai API.
                  </p>
                </div>
              )}
            </div>
            <div className='card-action'>
              <a href='/face-info-detector'>
                {lang === 'en' ? 'Website' : 'Веб-сайт'}
              </a>
              <a
                href='https://github.com/yalalex/face-info-detector'
                rel='noopener noreferrer'
                target='_blank'
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Projects.propTypes = {
  lang: PropTypes.string.isRequired
};

export default Projects;
