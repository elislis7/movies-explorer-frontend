import {
  TABLET_SCREEN_WIDTH, // 900
  MOBILE_SCREEN_WIDTH, // 500
  DESKTOP_CARDS_NUMBER, // 12 + (3)
  TABLET_CARDS_NUMBER, // 8 + (2)
  MOBILE_CARDS_NUMBER, // 5 + (2)
  SHORTS_DURATION // длительность фильма максимум 40 минут
} from '../utils/constants';

// функция для отображения кол-ва постеров на определенной ширине экрана
function getNumberOfCards() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= MOBILE_SCREEN_WIDTH) {
    return MOBILE_CARDS_NUMBER;
  } else if (screenWidth <= TABLET_SCREEN_WIDTH) {
    return TABLET_CARDS_NUMBER;
  } 
  return DESKTOP_CARDS_NUMBER;
}

// --- фильтр фильмов ---
function checkMovieDuration
( movieDuration, isShortsIncluded, criteriaShortsDuration = SHORTS_DURATION) {
  return (isShortsIncluded && (movieDuration <= criteriaShortsDuration)) 
  || (!isShortsIncluded && (movieDuration = criteriaShortsDuration));
}

function filterMovieQuerry(movie, searchQuerry) {
  const lowerQuerry = searchQuerry.toLowerCase();
  return movie.nameRU.toLowerCase().includes(lowerQuerry);
}

function movieFilter(movie, { querry, includeShorts }) {
  return checkMovieDuration(movie.duration, includeShorts) && filterMovieQuerry(movie, querry);
}

// Функция для конвертации длительности фильма из минут в формат "часы:минуты"
function convertDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}ч ${remainingMinutes}мин`;
}

export {
  getNumberOfCards,
  checkMovieDuration,
  filterMovieQuerry,
  movieFilter,
  convertDuration,
}