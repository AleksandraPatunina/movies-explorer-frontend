// форма поиска, куда пользователь будет вводить запрос
import { useState } from 'react'
import './SearchForm.css'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import useFormValidation from '../../hooks/useFormValidation'

export default function SearchForm({ isCheck, changeBox }) {
  const [isError,setIsError] = useState(false)
  const {values, isValid, handleChange} = useFormValidation()

  function onSubmit(evt) {
    evt.preventDefault()
    if (!isValid) {
      setIsError(true)
      return
    } else {
      setIsError(false)
    }
  }

  return (
    <section className='search search-form'>
      
        <form className='search__form' name={'SearchForm'} value={values.search} onSubmit={onSubmit} noValidate >
        <div className='search-form__container'>
          <input className='search-form__input'  type="text" placeholder='Фильм'  onChange={handleChange} required/>
          <button className='search__submit'></button>
          </div>
        <span className={`search-form__error ${isError && 'search-form__error_type_active'}`}>{isError ? 'Пожалуйста, укажите ключевое слово' : ''}</span>
        <FilterCheckbox isCheck={isCheck} changeBox={changeBox}/>
        </form>
    </section>
  )
}
