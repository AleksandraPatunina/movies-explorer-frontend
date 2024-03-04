// Компонент со ссылками на другие проекты
import { Link } from 'react-router-dom'
import './Portfolio.css'
import Cover from '../Cover/Cover'

export default function Portfolio() {
  return (
    <section className='portfolio page__portfolio'>
      <Cover>
        <h2 className='portfolio__title'>Портфолио</h2>
        <nav className="portfolio__navigation">
          <ul className='portfolio__items'>
            <li className='portfolio__item'>
              <Link to={'https://github.com/AleksandraPatunina/how-to-learn'}className='portfolio__link' target='_blank' >
                <p className='portfolio__text'>Статичный сайт</p>
                <button className='portfolio__button' type='button' ></button>
              </Link>
            </li>
            <li className='portfolio__item'>
              <Link to={'https://github.com/AleksandraPatunina/russian-travel'}className='portfolio__link' target='_blank' >
                <p className='portfolio__text'>Адаптивный сайт</p>
                <button className='portfolio__button' type='button' ></button>
              </Link>
            </li>
            <li className='portfolio__item'>
              <Link to={'https://github.com/AleksandraPatunina/react-mesto-auth'} className='portfolio__link portfolio__link_type_last' target='_blank'>
                <p className='portfolio__text'>Одностраничное приложение</p>
                <button className='portfolio__button' type='button' ></button>
              </Link>
            </li>
          </ul>
        </nav>
      </Cover>
    </section>
  )
}
