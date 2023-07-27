import { useEffect, useState, useRef }from 'react';
import { useNavigate } from "react-router-dom";

import './Profile.css'

import { useFormValidation } from "../../hook/formValidation";
import { apiMain } from "../../utils/Api/MainApi";
import { useCurrentUserContext } from '../../contexts/CurrentUserContext';
import { PATTERN_EMAIL, CHANGE_SUCCESS } from '../../utils/constants';

function Profile(props) {

  const { changeStatus } = props;
  const { values, handleChange, errors, isValid, resetForm } = useFormValidation();

  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useCurrentUserContext();
  const [message, setMessage] = useState("");
  const [isValue, setIsValue] = useState(true);
  const [isFormChanging, setIsFormChanging] = useState(false);
  const nameInputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    apiMain.updateUser(values)
      .then((updatedUserData ) => {
        setCurrentUser(updatedUserData);
        setMessage(CHANGE_SUCCESS);
      })
      .catch(err => {
        setMessage(err)
      })
      .finally(() => {
        setIsValue(true);
      })
    setIsFormChanging(false);
  }

  function handleMakeChangeable() { 
    setIsFormChanging(true);
    setMessage('');
  }

  function handleLogout() {
    apiMain.logOut() 
      .then(() => {
        setCurrentUser({name: '', email: ''});
        localStorage.removeItem('currentId');
        localStorage.removeItem('search');
        changeStatus(false);
        navigate('/', {replace: true});
      })
  }

  useEffect(() => {
    if(!isFormChanging) return;
    nameInputRef.current.focus();
  }, [ isFormChanging ]);

  useEffect(() => {
    if (!currentUser.name) return;
    resetForm(false, { name: currentUser.name, email: currentUser.email });
  }, [currentUser, resetForm])

useEffect(() => {
    if (currentUser.name === values.name && currentUser.email === values.email) {
      setIsValue(true);
    } else {
      setIsValue(false);
    }
}, [currentUser, values])

  return (
    <main className="profile main-container">
      <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
      <form className="profile__form" onClick={handleSubmit}>
        <label className='profile__field'>
          <span className='profile__span'>Имя</span>
          <input className='profile__input' 
            id="input-name" 
            name="name" 
            type="text"
            minLength={2}
            maxLength={30}
            ref={nameInputRef}
            disabled={!isFormChanging}
            onChange={handleChange}
            value={values.name || ''}
            required />
          <span className="profile__error"></span> 
        </label>
        <label className='profile__field'>
          <span className='profile__span'>E-mail</span>
          <input className='profile__input'
            id="input-email"
            name="email"
            type="email"
            disabled={!isFormChanging}
            onChange={handleChange}
            value={values.email || ''}
            pattern={PATTERN_EMAIL}
            required />
          <span className="profile__error"></span>
        </label>
        <span className='profile__server-error'>{message}</span>
      </form>
        {
          isFormChanging
            ? <button className='profile__submit-button' type='submit' disabled={isValue || !isValid}>
                Сохранить
            </button>
            : <div className='profile__buttons'>
                <button className='profile__button profile__button_type_edit' type='button' onClick={handleMakeChangeable}>
                    Редактировать
                </button>
                <button className='profile__button profile__button_type_logout' type='button' onClick={handleLogout}>
                    Выйти из аккаунта
                </button>
              </div>
          }
    </main>
  );
}

export default Profile;