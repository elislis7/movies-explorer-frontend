import React from 'react';

import './InfoTooltip.css'

function InfoTooltip(props) {

  const { isOpen, onClose, popupStatus } = props;

  return (
    <div
      className={`popup ${isOpen ? 'popup_opened' : ''}`}
    >
      <div className='popup__container'>
        <button className='popup__close' 
          type='button' 
          name='button' 
          aria-label='Кнопка закрытия формы'
          onClick={onClose}>
        </button>
        <div className='popup__content'>
          <img
            className='popup__picture'
            src={popupStatus.image}
            alt={`Информационное сообщение: ${popupStatus.message}`}
          />
          <p className='popup__title-success'>{popupStatus.message}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;