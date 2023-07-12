import './app.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SearchForm from './components/SearchForm/SearchForm';
import MoviesCard from './components/MoviesCard/MoviesCard';
import SavedMovies from './components/SavedMovies/SavedMovies';
import Main from './components/Main/Main';

function App() {
  return (

  <div className='App'>
  <div className='App__container'>
    <Header />
    <Main />
    <Footer />

  <SearchForm/>
  <MoviesCard/>

  <SavedMovies/>

  </div>
</div>

  );
}

export default App;
