import React, {useState} from 'react';
import { useSelector } from 'react-redux';

import SettingsIcon from '../../images/settings.svg';
import PlayIcon from '../../images/play.svg';

import './index.scss';

export const Header = (props) =>  {

  const isSettingsSet = useSelector((state) => state.isSettingsSet);

  const [header, setHeader] = useState({
    title:
      localStorage.getItem('repo_name')
        ? localStorage.getItem('repo_name')
        : 'School CI server',
  });

  function openSettings(e) {
    props.onClick(e)
  }

  function runBuild() {
    props.onBuild();
  }

  return (
    <header className="header">
      <h1
        className={`header__title ${
          isSettingsSet ? 'header__title_black' : ''
        }`}
      >
        {header.title}
      </h1>
      <div className="header__controls">
        {isSettingsSet && !window.location.pathname.includes('settings') && (
          <button className="header-btn" onClick={runBuild}>
            <img className="header-btn__icon" src={PlayIcon} alt="play icon" />
            Run build
          </button>
        )}
        {!window.location.pathname.includes('settings') && (
          <button
            className={`header-btn ${
              isSettingsSet ? 'header-btn_small' : ''
            }`}
            onClick={openSettings}
          >
            <img
              className="header-btn__icon"
              src={SettingsIcon}
              alt="settings icon"
            />
            Settings
          </button>
        )}
      </div>
    </header>
  );
}