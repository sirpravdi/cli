import React, {useState} from "react";
import MaskedInput from 'react-text-mask';

import { useDispatch, useSelector } from 'react-redux';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import ClearIcon from '../../images/clear.svg';

import './index.scss';

export const SettingsPage = (props) => {

  const dispatch = useDispatch();

  const [repoName, setRepoName] = useState({
    value: localStorage.getItem('repo_name') || '',
  });

  const [buildCommand, setBuildCommand] = useState({
    value: localStorage.getItem('build_command') || ''
  });

  const [branch, setBranch] = useState({
    value: localStorage.getItem('branch') || '',
  });

  const [syncPeriod, setSyncPeriod] = useState({
    value: localStorage.getItem('sync_period') || '',
  });

  const [isBtnDisabled, setBtnDisabled] = useState({
    value: false
  });

  const [error, setError] = useState({
    value: false
  });

  function handleChange({target}) {

    if (!target) {
      return;
    }

    setError({ value: false });

    switch(target.name) {
      case 'repo_name': 
        setRepoName({value: target.value})
        break;
      case 'build_command':
        setBuildCommand({ value: target.value });
        break;
      case 'branch':
        setBranch({ value: target.value });
        break;
      case 'sync_period': 
        setSyncPeriod({ value: target.value });
        break;
    }
  };

  function handleFocus({target}) {
    target.parentElement.style.borderColor = '#B3B3B3';
  }

  function handleBlur({target}) {
    target.parentElement.style.borderColor = '#d9d9d9';
  }

  function handleCancel (e) {
    e.preventDefault();

    props.history.push('/');
  }

  function handleSave(e) {
    e.preventDefault();

    setBtnDisabled({value: true});

    const data = new FormData(e.target);

    dispatch({type: 'SET_SETTINGS'});

    for (var [key, value] of data.entries()) {
      localStorage.setItem(key, value);
    }

     setTimeout(() => {
      let result = Math.floor(Math.random() * 10);
      
      setBtnDisabled({ value: false });

      if (result >= 5) {
        props.history.push('/');
      } else {
        setError({value: true});
      }
    }, 5000);
  }

  function clearInput (field) {
    switch (field) {
      case 'repo_name':
        setRepoName({ value: '' });
        break;
      case 'build_command':
        setBuildCommand({ value: '' });
        break;
      case 'branch':
        setBranch({ value: '' });
        break;
      case 'sync_period':
        setSyncPeriod({ value: '' });
        break;
    }
  }

  return (
    <>
      <Header />
      <main className="settings">
        <h2 className="settings__title">Settings</h2>
        <p className="settings__info">
          Configure repository connection and synchronization settings.
        </p>
        <form className="settings__form" onSubmit={handleSave}>
          <label className="settings__label">
            <p>
              GitHub repository <span className="settings__star">*</span>
            </p>
            <div className="settings__input-wrapper">
              <input
                name="repo_name"
                className="settings__input"
                required
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={repoName.value}
                placeholder="user-name/repo-name"
              />
              {repoName.value && (
                <img
                  src={ClearIcon}
                  alt="clear"
                  className="settings__clear"
                  onClick={() => clearInput('repo_name')}
                />
              )}
            </div>
          </label>
          <label className="settings__label">
            <p>
              Build command <span className="settings__star">*</span>
            </p>
            <div className="settings__input-wrapper">
              <input
                name="build_command"
                className="settings__input"
                required
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={buildCommand.value}
              />
              {buildCommand.value && (
                <img
                  src={ClearIcon}
                  alt="clear"
                  className="settings__clear"
                  onClick={() => clearInput('build_command')}
                />
              )}
            </div>
          </label>
          <label className="settings__label">
            Main branch
            <div className="settings__input-wrapper">
              <input
                name="branch"
                className="settings__input"
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={branch.value}
              />
              {branch.value && (
                <img
                  src={ClearIcon}
                  alt="clear"
                  className="settings__clear"
                  onClick={() => clearInput('branch')}
                />
              )}
            </div>
          </label>
          <label className="settings__label settings__label_row">
            Syncronize every
            <MaskedInput
              name="sync_period"
              className="settings__input settings__input_small"
              mask={[/\d/, /\d/]}
              onChange={handleChange('sync_period')}
              value={syncPeriod.value}
            />
            minutes
          </label>
          {error.value && (
            <p className="settings__error">
              Something went wrong, please try again
            </p>
          )}
          <div className="settings__controls">
            <button
              className="settings__btn settings__btn_yellow"
              type="submit"
              disabled={isBtnDisabled.value}
            >
              Save
            </button>
            <button
              className="settings__btn settings__btn_grey"
              onClick={handleCancel}
              disabled={isBtnDisabled.value}
            >
              Cancel
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}