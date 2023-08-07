class MainApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  // обработчик ошибок
  _handleResponse(res) {
    console.log(res)
    if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res);
      }
  }

  async _request(endpoint, method, body, jwt) {
    const initHeaders = jwt
      ? {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
        }
      : { 
        'Content-Type': 'application/json' 
        }

    const fetchInit = {
      method: method,
      headers: initHeaders,
      credential: 'include'
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
  getUserInfo(token) {
    return this._request('users/me', 'GET', null, token)
  }

  // редактирование инфо о пользователе
  updateUser(userData, token) {
    return this._request('users/me', 'PATCH', userData, token)
  }

  //получение списка сохраненых фильмов
  getUserMovies(token) {
    return this._request('movies', 'GET', null, token)
  }

  //добавление фильма в сохраненки
  saveMovie(movies, token) {
    return this._request('movies', 'POST', movies, token)
  }

  //удаление фильма из сохраненок
  deleteMovie(movieId, token) {
    return this._request(`movies/${movieId}`, 'DELETE', null, token)
  }

  // логирование пользователя
  login(authData) {
    return this._request('signin', 'POST', authData)
  }

  // регистрация пользователя
  register(authData) {
    return this._request('signup', 'POST', authData)
  }
}

export const apiMain = new MainApi ({
  url: 'https://api.lis.movies-explorer.nomoreparties.sbs',
  //url: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  }
});