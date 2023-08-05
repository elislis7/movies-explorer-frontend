class MoviesApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  // обработчик ошибок
  _handleResponse(res) {
    if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res);
      }
  }

  // получение списка фильмов с сервера
  getMovies() {
    return fetch(this._url, {
      method: 'GET',
      headers: this._headers
    })
    .then(this._handleResponse)
  }
}

export const apiMovie = new MoviesApi({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  }
});