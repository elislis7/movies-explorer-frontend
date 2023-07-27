import './FilterCheckbox.css'

function FilterCheckbox(props) {

  const { isChecked, checkHandler } = props;

  return (
    <div className="filter">
      <label className="filter__container">
        <input 
          className="filter__input" 
          type="checkbox" 
          checked={isChecked}
          onChange={checkHandler}
        />
        <span className="filter__slider filter__slider_round"></span>
      </label>
      <p className="filter__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;