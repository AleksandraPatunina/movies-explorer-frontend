import './FilterCheckbox.css'
 // чекбокс для фильтрации короткометражных фильмов
 //отображение и управление флажком (checkbox). Флажок меняет свое состояние (выбран или нет) 
//св-ва  из ul
 export default function FilterCheckbox({ isCheck, changeBox }) {
  return (
    <label className='search__label-container'>
      <span className='search__input-container'>
        <input type="checkbox" className='search__ckeck' onChange={changeBox}/>
        <svg className='search__check-svg' width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="smalltumb">
          {/* прямоугольник внутри SVG изображения, который меняет свой класс в зависимости от значения isCheck. */}
            <rect
              className={`search__check-svg-rect ${isCheck ? 'search__check-svg-rect_active' : ''}`}
              id="tumb__COLOR:tumbler-on" width="36" height="20" rx="10" fill="#2BE080"
            />
            {/* круг внутри SVG изображения, который также меняет свой класс в зависимости от значения isCheck. */}
            <circle
              className={`search__check-svg-circle ${isCheck ? 'search__check-svg-circle_active' : ''}`}
              id="tumb__COLOR:tumbler-on-2" cx="26" cy="10" r="8" fill="white"
            />
          </g>
        </svg>
      </span>
      <span className='search__check-text'>Короткометражки</span>
    </label>
  )
}


