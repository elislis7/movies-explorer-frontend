class MainApi {
  constructor(config) {
    this._baseURL = config.baseURL;
    this._headers = config.headers
  }

  _checkServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка в запросе: ${res.status}`)
  }

  register(userData) {
    return fetch(`${this._baseURL}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(userData),
    })
    .then(res => this._checkServerResponse(res))
  }

  login(userData) {
    return fetch(`${this._baseURL}/signin`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify(userData),
    })
    .then(res => this._checkServerResponse(res))
  }

  logOut() {
    return fetch(`${this._baseURL}/signout`, {
      method: 'GET',
      credentials: 'include',
    })
    .then(res => this._checkServerResponse(res));
  }

  getUser() {
    return fetch(`${this._baseURL}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    })
    .then(res => this._checkServerResponse(res));
  }

  updateUser(userData) {
    return fetch(`${this._baseURL}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify(userData)
    })
    .then(res => this._checkServerResponse(res));
  }

  addMovie(movieData) {
    return fetch(`${this._baseURL}/movies`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify(movieData),
    })
    .then(res => this._checkServerResponse(res));
  }

  getSavedMovies() {
    return fetch(`${this._baseURL}/movies`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    })
    .then(res => this._checkServerResponse(res));
  }

  deleteMovie(movieId) {
    return fetch(`${this._baseURL}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    })
    .then(res => this._checkServerResponse(res));
  }
} 

/* class MainApi {
  constructor(config) {
    this._url = config.url;
    console.log(this._url)
  }

  // обработчик ошибок
  _handleResponse(res) {
    if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res);
      }
  }

  async _request(endpoint, method, body) {
    const fetchInit = {
      method: method,
      credentials: 'include'
    };
  
    try {
      const response = await fetch(`${this._url}/${endpoint}`, body
        ? {
          ...fetchInit,
          body: JSON.stringify(body)
        }
        : fetchInit
      );
  
      if (!response.ok) {
        throw new Error(`Ошибка при выполнении запроса: ${response.status} ${response.statusText}`);
      }
  
      return response.json();
    } catch (error) {
      console.error('Произошла ошибка при запросе:', error);
      throw error;
    }
  }

  // получение инфо о пользователе
  getUser() {
    return this._request('/users/me', 'GET')
  }

  // редактирование инфо о пользователе
  updateUser(userData) {
    return this._request('/users/me', 'PATCH', userData)
  }

  //получение списка сохраненых фильмов
  getSavedMovies() {
    return this._request('/movies', 'GET')
  }

  //добавление фильма в сохраненки
  addMovie(movieData) {
    return this._request('/movies', 'POST', movieData)
  }

  //удаление фильма из сохраненок
  deleteMovie(movieId) {
    return this._request(`/movies/${movieId}`, 'DELETE')
  }

  // логирование пользователя
  login(authData) {
    return this._request('/signin', 'POST', authData)
  }

  // регистрация пользователя
  register(authData) {
    return this._request('/signup', 'POST', authData)
  }

  logOut() {
    return this._request('/signout', 'GET')
  }
} */

export const apiMain = new MainApi ({
  baseURL: "https://lis.movies-explorer.nomoreparties.sbs",
  headers: {
    "Content-Type": "application/json",
  }
});