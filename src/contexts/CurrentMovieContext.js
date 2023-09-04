import { createContext, useContext } from 'react';

// создаем контекст массива текущих филдьмов и задаем начальное зн-е пустого массива
const CurrentMoviesContext = createContext([]);

// функция для получения данных из контекста
function useMoviesContext() {
  const context = useContext(CurrentMoviesContext);
  return context;
};

// хук будет использоваться в компонентах, чтобы получить доступ к данным о текущих фильмах
function CurrentMoviesContextProvider({ children, ...props }) {
  return <CurrentMoviesContext.Provider value={props.context}>{children}</CurrentMoviesContext.Provider>;
};

export {
  useMoviesContext,
  CurrentMoviesContextProvider
};