import React, {useState} from 'react';

import './index.scss';

import ClearIcon from '../../images/clear.svg';

export const Modal = (props) => {

  const [hash, setHash] = useState({value: ''});

  function handleHashChange({target}) {
    setHash({value: target.value});
  };

  function clearHash() {
    setHash({ value: '' });
  };

  function onBuild() {
    props.onBuild(hash.value);
  }

  function handleFocus({ target }) {
    target.parentElement.style.borderColor = '#B3B3B3';
  }

  function handleBlur({ target }) {
    target.parentElement.style.borderColor = '#d9d9d9';
  }

  return (
    <div className="overlay">
      <div className="modal">
        <p className="modal__title">New build</p>
        <p className="modal__info">
          Enter the commit hash which you want to build.
        </p>
        <label className="modal__label">
          <input
            className="modal__input"
            placeholder="Commit hash"
            value={hash.value}
            onChange={handleHashChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {hash.value && (
            <img
              src={ClearIcon}
              alt="clear"
              className="modal__clear"
              onClick={clearHash}
            />
          )}
        </label>
        <div className="modal__controls">
          <button className="modal__btn modal__btn_yellow" onClick={onBuild}>
            Run build
          </button>
          <button
            className="modal__btn modal__btn_white"
            onClick={props.onBuildCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}