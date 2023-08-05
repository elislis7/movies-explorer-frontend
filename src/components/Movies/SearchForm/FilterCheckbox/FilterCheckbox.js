import './FilterCheckbox.css'

function FilterCheckbox(props) {

  const { isShortMovies, onShortMoviesFilter } = props;

  return (
    <div className='filter'>
      <label className='filter__container'>
        <input 
          className='filter__input' 
          type='checkbox' 
          checked={isShortMovies}
          onChange={onShortMoviesFilter}
        />
        <span className='filter__slider filter__slider_round'></span>
      </label>
      <p className='filter__text'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;