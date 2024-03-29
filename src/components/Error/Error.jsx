// страница 404
import { Link, useNavigate } from 'react-router-dom'
import './Error.css'

export default function Error() {
  const navigate = useNavigate()
  return (
    <section className='error'>
      <div className='error__container'>
        <h1 className='error__number'>404</h1>
        <p className='error__text'>Страница не найдена</p>
        <Link onClick={() => navigate(-1)} className='error__link'>Назад</Link>
      </div>
    </section>
  )
}
