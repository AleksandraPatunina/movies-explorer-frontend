// Компонент, который управляет отрисовкой карточек фильмов и их кол-вом
import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'
import { useState } from 'react'

export default function MoviesCardList({ movies }) {
  const [count, setCount] = useState(getCounter().init)
  const fact = movies.slice(0, count)

  function getCounter() {
    const counter = { init: 16, step: 4}
    if (window.innerWidth < 1023) {
      counter.init = 8
      counter.step = 2
    }
    if (window.innerWidth < 650) {
      counter.init = 5
      counter.step = 2
    }
    return counter
  }
//кнопка еще
  function clickMoreFilms() {
    setCount(count + getCounter().step)
  }

  return (
    <section className='movies-gallery page__movies-gallery'>
      <ul className='movies-gallery__items'>
        {fact.map(data => {
          return (
            <MoviesCard key={data.id} name={data.name} src={data.image} trailerLink={data.trailerLink}/>
          )
        })}
      </ul>
      <button type='button' className={`movies-gallery__more-films ${count >= movies.length && 'movies-gallery__more-films_hidden'}`} onClick={clickMoreFilms}>Ещё</button>
    </section>
  )
}
