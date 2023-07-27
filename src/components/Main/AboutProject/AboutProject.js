import React from 'react';

import './AboutProject.css'

function AboutProject() {
  return (
  <section className="project" id="project">
    <h2 className="project__title">О проекте</h2>
    <div className="project__info">
      <div className="project__description">
        <h3 className="project__subtitle">Дипломный проект включал 5 этапов</h3>
        <p className="project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
      </div>
      <div className="project__description">
        <h3 className="project__subtitle">На выполнение диплома ушло 5 недель</h3>
        <p className="project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
    </div>
    <div className="project__line">
      <p className="project__line-title green-color">1 неделя</p>
      <p className="project__line-title">4 недели</p>
      <p className="project__line-description">Back-end</p>
      <p className="project__line-description">Front-end</p>
    </div>
  </section>
  );
}

export default AboutProject;