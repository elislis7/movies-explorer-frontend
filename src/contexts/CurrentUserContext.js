import { createContext, useContext } from 'react';

// изначальное состояние данных пользователя 
const initialUserData = {
  name: '',
  email: '',
};

// создаем контекст в котором будут лежать начальные данные пользователя
const CurrentUserContext = createContext(initialUserData);

// функция для получения данных из контекста
function useCurrentUserContext() {
  const context = useContext(CurrentUserContext);
  return context;
};

// хук будет использоваться в компонентах, чтобы получить доступ к данным о пользователе
function CurrentUserContextProvider({ children, ...props }) {
  return <CurrentUserContext.Provider value={props.context}>{children}</CurrentUserContext.Provider>;
};

export {
  useCurrentUserContext,
  CurrentUserContextProvider
};