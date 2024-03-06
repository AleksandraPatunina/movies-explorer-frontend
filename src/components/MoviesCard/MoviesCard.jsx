// Компонент одной карточки фильма
import { useLocation } from 'react-router-dom'
import './MoviesCard.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function MoviesCard({ name, src, trailerLink }) {
  const { pathname } = useLocation()
  const [click, setClick] = useState(false)

  function onClick() {
    if (click) {
      setClick(false)
    } else {
      setClick(true)
    }
  }
  return (
    <li className='movies-gallery__card'>
      <article>
        <Link to={trailerLink}>
          <img src={src} alt="Изображение трейлера фильма" className='movies-gallery__image' />
        </Link>
        <div className='movies-gallery__card-set'>
          <div className='movies-gallery__text-set'>
            <p className='movies-gallery__subtitle'>{name}</p>
            <span className='movies-gallery__length'>1ч 47м</span>
          </div>
          {pathname === '/movies' ?
            <button type='button' className={`movies-gallery__save ${click ? 'movies-gallery__save_active' : ''}`} onClick={onClick}></button>
            :
            <button type='button' className={`movies-gallery__save movies-gallery__save_type_delete`} onClick={onClick}></button>
          }
        </div>
      </article>
    </li>
  )
}
