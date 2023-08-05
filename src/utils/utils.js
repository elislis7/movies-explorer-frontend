import {
  SHORTS_DURATION // длительность фильма максимум 40 минут
} from '../utils/constants';

// --- фильтр фильмов ---

function filterMovies(movies, searchQuery) {
  const lowerQuery = searchQuery.toLowerCase();
  return movies.filter((movie) =>
    movie.nameRU.toLowerCase().includes(lowerQuery) || movie.nameEN.toLowerCase().includes(lowerQuery)
  );
}

function filterMovieDuration(movies) {
  return movies.filter((movie) => movie.duration < SHORTS_DURATION);
}

// Функция для конвертации длительности фильма из минут в формат 'часы:минуты'
function convertDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}ч ${remainingMinutes}мин`;
}

export {
  filterMovies,
  filterMovieDuration,
  convertDuration,
}