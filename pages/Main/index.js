import React, {useState} from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

dayjs.locale('ru');

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Modal } from '../../components/Modal';

import ToolsIcon from  '../../images/tools.svg';
import DoneIcon from '../../images/done.svg';
import FailIcon from '../../images/fail.svg';
import ProgressIcon from '../../images/progress.svg';
import UserIcon from '../../images/user.svg';
import CommitIcon from '../../images/commit.svg';
import CalendarIcon from '../../images/calendar.svg';
import ClockIcon from '../../images/clock.svg';

import './index.scss';

  const cards = [
    {
      status: 'done',
      number: Math.floor(1000 + Math.random() * 9000),
      commitMessage: 'add readme',
      branch: 'master',
      hash: '123456e',
      author: 'Harry Potter',
      date: dayjs(new Date()).format('D MMM, hh:mm').replace('.', ''),
      duration: '180',
    },
    {
      status: 'failed',
      number: Math.floor(1000 + Math.random() * 9000),
      commitMessage:
        'Super cool UI kit for making websites that look like games',
      branch: 'master',
      hash: '123456e',
      author: 'Harry Potter',
      date: dayjs(new Date()).format('D MMM, hh:mm').replace('.', ''),
      duration: '180',
    },
    {
      status: 'processing',
      number: Math.floor(1000 + Math.random() * 9000),
      commitMessage: 'add readme',
      branch: 'master',
      hash: '123456e',
      author: 'Harry Potter',
      date: dayjs(new Date()).format('D MMM, hh:mm').replace('.', ''),
      duration: '230',
    },
    {
      status: 'done',
      number: Math.floor(1000 + Math.random() * 9000),
      commitMessage: 'add readme',
      branch: 'master',
      hash: '123456e',
      author: 'Harry Potter',
      date: dayjs(new Date()).format('D MMM, hh:mm').replace('.', ''),
      duration: '180',
    },
    {
      status: 'failed',
      number: Math.floor(1000 + Math.random() * 9000),
      commitMessage:
        'Super cool UI kit for making websites that look like games',
      branch: 'master',
      hash: '123456e',
      author: 'Harry Potter',
      date: dayjs(new Date()).format('D MMM, hh:mm').replace('.', ''),
      duration: '180',
    },
    {
      status: 'processing',
      number: Math.floor(1000 + Math.random() * 9000),
      commitMessage: 'add readme',
      branch: 'master',
      hash: '123456e',
      author: 'Harry Potter',
      date: dayjs(new Date()).format('D MMM, hh:mm').replace('.', ''),
      duration: '230',
    },
    {
      status: 'done',
      number: Math.floor(1000 + Math.random() * 9000),
      commitMessage: 'add readme',
      branch: 'master',
      hash: '123456e',
      author: 'Harry Potter',
      date: dayjs(new Date()).format('D MMM, hh:mm').replace('.', ''),
      duration: '180',
    },
    {
      status: 'failed',
      number: Math.floor(1000 + Math.random() * 9000),
      commitMessage:
        'Super cool UI kit for making websites that look like games',
      branch: 'master',
      hash: '123456e',
      author: 'Harry Potter',
      date: dayjs(new Date()).format('D MMM, hh:mm').replace('.', ''),
      duration: '180',
    },
    {
      status: 'processing',
      number: Math.floor(1000 + Math.random() * 9000),
      commitMessage: 'add readme',
      branch: 'master',
      hash: '123456e',
      author: 'Harry Potter',
      date: dayjs(new Date()).format('D MMM, hh:mm').replace('.', ''),
      duration: '230',
    },
    {
      status: 'done',
      number: Math.floor(1000 + Math.random() * 9000),
      commitMessage: 'add readme',
      branch: 'master',
      hash: '123456e',
      author: 'Harry Potter',
      date: dayjs(new Date()).format('D MMM, hh:mm').replace('.', ''),
      duration: '180',
    },
    {
      status: 'failed',
      number: Math.floor(1000 + Math.random() * 9000),
      commitMessage:
        'Super cool UI kit for making websites that look like games',
      branch: 'master',
      hash: '123456e',
      author: 'Harry Potter',
      date: dayjs(new Date()).format('D MMM, hh:mm').replace('.', ''),
      duration: '180',
    },
    {
      status: 'processing',
      number: Math.floor(1000 + Math.random() * 9000),
      commitMessage: 'add readme',
      branch: 'master',
      hash: '123456e',
      author: 'Harry Potter',
      date: dayjs(new Date()).format('D MMM, hh:mm').replace('.', ''),
      duration: '230',
    },
  ];

export const IndexPage = (props) => {

  const [settings, setSettings] = useState({
    isSettingsSet: JSON.parse(localStorage.getItem('is_settings_set')) || false,
  });

  const [modal, setModal] = useState({
    isDisplayed: false
  })

  const [page, setPage] = useState({page: 1});
  
  function openSettingsPage(e) {
    e.preventDefault();

    props.history.push('/settings');
  }

  function getDuration(duration) {
    const minutes = duration % 60;
    const hours = (duration - minutes) / 60;

    return minutes === 0 ? hours + ' ч' : hours + ' ч ' + minutes + ' мин' ;

  }

  function showNextPage() {
    setPage({page: page.page + 1});
  }

  function getNumberStyle(status) {
    switch(status) {
      case 'done':
        return 'card__number_done'
        break;
      case 'failed':
        return 'card__number_failed'
        break;
      case 'processing':
        return 'card__number_processing'
        break;
    }
  }

  function isShowMoreAvailable () {
    return cards.filter((item, index) =>  index >= page.page * 9).length === 0 ? false : true;
  }

  function onRunBuild() {
    document.body.style.overflow = 'hidden';
    setModal({isDisplayed: true});
  }

  function onBuildCancel() {
    document.body.style.overflow = 'auto';
    setModal({ isDisplayed: false });
  }

  function onBuild(hash) {

    onBuildCancel();

    cards.unshift({
      status: 'done',
      number: Math.floor(1000 + Math.random() * 9000),
      commitMessage: 'add readme',
      branch: 'master',
      hash: hash,
      author: 'Harry Potter',
      date: dayjs(new Date()).format('D MMM, hh:mm').replace('.', ''),
      duration: '180',
    });
  }

  return (
    <>
    {modal.isDisplayed && <Modal onBuildCancel={onBuildCancel} onBuild={onBuild}/>}
    <>
      {settings.isSettingsSet !== true ? (
        <>
          <Header onClick={openSettingsPage} />
          <main className="main">
            <img src={ToolsIcon} alt="tools icon" />
            <p className="main__text">
              Configure repository connection <br /> and synchronization
              settings
            </p>
            <button className="main__btn" onClick={openSettingsPage}>
              Open settings
            </button>
          </main>
        </>
      ) : (
        <>
          <Header onClick={openSettingsPage} onBuild={onRunBuild}/>
          <main className="main-card">
            {cards
              .filter((card, index) => index < page.page * 9)
              .map((card) => (
                <article key={card.number} className="card">
                  <div className="card__info">
                    <div className="card__about">
                      {card.status === 'done' && (
                        <img
                          className="card__icon card__icon-status"
                          src={DoneIcon}
                          alt="done"
                        />
                      )}
                      {card.status === 'failed' && (
                        <img
                          className="card__icon card__icon-status"
                          src={FailIcon}
                          alt="fail"
                        />
                      )}
                      {card.status === 'processing' && (
                        <img
                          className="card__icon card__icon-status"
                          src={ProgressIcon}
                          alt="processing"
                        />
                      )}
                      <span
                        className={`card__number ${getNumberStyle(
                          card.status
                        )}`}
                      >
                        #{card.number}
                      </span>
                      <p className="card__message">{card.commitMessage}</p>
                    </div>
                    <div className="card__general">
                      <div className="card__commit">
                        <img
                          className="card__icon"
                          src={CommitIcon}
                          alt="commit"
                          height="16"
                        />
                        <p className="card__text">
                          {card.branch}
                          <span className="card__comment">{card.hash}</span>
                        </p>
                      </div>
                      <div className="card__author">
                        <img
                          className="card__icon"
                          src={UserIcon}
                          alt="user"
                          height="16"
                        />
                        <p className="card__text">{card.author}</p>
                      </div>
                    </div>
                  </div>
                  <div className="card__timing">
                    <div className="card__date">
                      <img
                        className="card__icon"
                        src={CalendarIcon}
                        alt="calendar"
                      />
                      <p className="card__text">{card.date}</p>
                    </div>
                    <div className="card__time">
                      <img className="card__icon" src={ClockIcon} alt="clock" />
                      <p className="card__text">{getDuration(card.duration)}</p>
                    </div>
                  </div>
                </article>
              ))}

            {
              isShowMoreAvailable() &&<button className="main-card__show-more" onClick={showNextPage}>
                Show more
              </button>
            } 
          </main>
        </>
      )}
      <Footer />
    </>
    </>
  );
}