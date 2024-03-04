import './Footer.css'
import { Link, useLocation } from 'react-router-dom'


export default function Footer() {

  const { currentLocation } = useLocation()

  return (
    <footer className={`footer page__footer ${currentLocation === '/saved-movies' && 'page__footer_type_saved-movies'}`}>
      <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__container">
        <p className="footer__text">&copy;2024</p>
        <nav className="footer__nav">
          <Link to={'https://practicum.yandex.ru/'}  className="footer__link" target='_blank'>Яндекс.Практикум</Link>
          <Link to={'https://github.com/AleksandraPatunina'}  className="footer__link" target='_blank'>Github</Link>
        </nav>
      </div>
    </footer>
  )
}
