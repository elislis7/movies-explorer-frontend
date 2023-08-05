import { useEffect, useState, useRef } from 'react';

import './Profile.css'

import { useFormValidation } from '../../hook/formValidation';
import { useCurrentUserContext } from '../../contexts/CurrentUserContext';
import { PATTERN_EMAIL } from '../../utils/constants';

function Profile(props) {

  const { onUpdateUser, onLogOut, onClose } = props;
  const { values, setValues, handleChange, errors, isValid, setIsValid } = useFormValidation();
  const { currentUser, setCurrentUser } = useCurrentUserContext();

  const [isFormChanging, setIsFormChanging] = useState(false);
  const nameInputRef = useRef(null);

  useEffect(() => {
    if (currentUser) {
      setValues({
        name: currentUser.name,
        email: currentUser.email,
      });
    }
  }, [setValues, currentUser]);

  useEffect(() => {
    if (
      currentUser.name === values.name
      &&
      currentUser.email === values.email
    ) {
      setIsValid(false);
    }
  }, [setIsValid, values, currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name: values.name,
      email: values.email
    });
    setIsFormChanging(false);
  }

  function handleMakeChangeable() { 
    setIsFormChanging(true);
  }

  return (
    <main className='profile main-container'>
      <h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>
      <form className='profile__form' onSubmit={handleSubmit} onClose={onClose}>
        <label className='profile__field'>
          <span className='profile__span'>Имя</span>
          <input className='profile__input' 
            id='input-name' 
            name='name' 
            type='text'
            minLength={2}
            maxLength={30}
            ref={nameInputRef}
            disabled={!isFormChanging}
            onChange={handleChange}
            value={values.name || ''}
            required />
          <span className='profile__error'>{errors.name}</span> 
        </label>
        <label className='profile__field'>
          <span className='profile__span'>E-mail</span>
          <input className='profile__input'
            id='input-email'
            name='email'
            type='email'
            disabled={!isFormChanging}
            onChange={handleChange}
            value={values.email || ''}
            pattern={PATTERN_EMAIL}
            required />
          <span className='profile__error'>{errors.email}</span>
        </label>
        { 
          isFormChanging 
            ? (
              <button 
                className={isValid ? 'profile__submit-button' : 'profile__submit-button profile__submit-button_disabled'}
                type='submit' 
                disabled={!isValid}>
                  Сохранить
              </button>
            ) : ( 
            <div className='profile__buttons'>
              <button 
                className='profile__button profile__button_type_edit' 
                type='button' 
                onClick={handleMakeChangeable}
              >
                Редактировать
              </button>
              <button 
                className='profile__button profile__button_type_logout' 
                type='button' 
                onClick={onLogOut}
              >
                Выйти из аккаунта
              </button>
            </div>
          )}  
      </form> 
    </main>
  );
}

export default Profile;