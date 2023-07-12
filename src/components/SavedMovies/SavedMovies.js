import React from 'react';
import movie from '../../images/не уменьшеный формат/pic__COLOR_pic.png';
import remove from '../../images/не уменьшеный формат/delete.svg';
/* import { Link } from "react-router-dom"; */
import './SavedMovies.css'

function SavedMovies() {
  return (
    <section class="elements" id="element-template">
    <div class="element">
      <div class="element__designation">
        <h2 class="element__title">В погоне за Бенкси</h2>
        <p class="element__time">27 минут</p>
      </div>
      <img class="element__image" src={movie} alt="#"/>
      <div class="element__container_save">
        <button class="element__delete" type="button" name="button" aria-label="Кнопка сохранения фильма">
          <img class="element__delete_image" src={remove} alt=""/>
        </button>
      </div>
    </div>
    <div class="element">
      <div class="element__designation">
        <h2 class="element__title">В погоне за Бенкси</h2>
        <p class="element__time">27 минут</p>
      </div>
      <img class="element__image" src={movie} alt="#"/>
      <div class="element__container_save">
        <button class="element__delete" type="button" name="button" aria-label="Кнопка сохранения фильма">
          <img class="element__delete_image" src={remove} alt=""/>
        </button>
      </div>
    </div>
    <div class="element">
      <div class="element__designation">
        <h2 class="element__title">В погоне за Бенкси</h2>
        <p class="element__time">27 минут</p>
      </div>
      <img class="element__image" src={movie} alt="#"/>
      <div class="element__container_save">
        <button class="element__delete" type="button" name="button" aria-label="Кнопка сохранения фильма">
          <img class="element__delete_image" src={remove} alt=""/>
        </button>
      </div>
    </div>
  </section>
  );
}

export default SavedMovies;