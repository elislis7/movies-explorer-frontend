const BEATFILM_URL = 'https://api.nomoreparties.co';

// размеры экранов устройств
const TABLET_SCREEN_WIDTH = 900;
const MOBILE_SCREEN_WIDTH = 500;

// количество постеров
const DESKTOP_CARDS_NUMBER = {totalCards: 12, extraCards: 3};
const TABLET_CARDS_NUMBER = {totalCards: 8, extraCards: 2};
const MOBILE_CARDS_NUMBER = {totalCards: 5, extraCards: 2};

// системные сообщения
const CHANGE_SUCCESS = 'Данные профиля обновлены';
const EMPTY_FIELD = 'Введите ключевое слово';

// длительность короткого фильма
const SHORTS_DURATION = 40;

// паттерн для валидации почты
const PATTERN_EMAIL ='[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\\.{1,1}[a-z]{2,}';

export {
  BEATFILM_URL,
  TABLET_SCREEN_WIDTH,
  MOBILE_SCREEN_WIDTH,
  DESKTOP_CARDS_NUMBER,
  TABLET_CARDS_NUMBER,
  MOBILE_CARDS_NUMBER,
  CHANGE_SUCCESS,
  EMPTY_FIELD,
  SHORTS_DURATION,
  PATTERN_EMAIL
}