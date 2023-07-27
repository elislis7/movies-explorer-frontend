class MainApi {
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
    return this._request('users/me', 'GET')
  }

  // редактирование инфо о пользователе
  updateUser(userData) {
    return this._request('users/me', 'PATCH', userData)
  }

  //получение списка сохраненых фильмов
  getSavedMovies() {
    return this._request('movies', 'GET')
  }

  //добавление фильма в сохраненки
  addMovie(movieData) {
    return this._request('movies', 'POST', movieData)
  }

  //удаление фильма из сохраненок
  deleteMovie(movieId) {
    return this._request(`movies/${movieId}`, 'DELETE')
  }

  // логирование пользователя
  login(authData) {
    return this._request('signin', 'POST', authData)
  }

  // регистрация пользователя
  register({name, email, password}) {
    return this._request('signup', 'POST', {name, email, password})
  }

  logOut() {
    return this._request('signout', 'GET')
  }
}

export const apiMain = new MainApi ({
  url: "https://api.lis.movies-explorer.nomoreparties.sbs",
  headers: {
    "Content-Type": "application/json",
  }
});