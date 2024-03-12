// контейнер с версткой баннера страницы "О проекте"

// import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import './Promo.css'
// использую HashLink для ссылки (не отправляется запрос на сервер), которая позволит переходить по разделам стр сайта без перезагрузки
export default function Promo() {

  return (
    <section className='promo page__promo'>
      <div className='promo__container'>
        {/* проверить, нужен ли будет здесь неразделимый дефис (&#8209;) */}
        <h1 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1> 
        <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <HashLink className='promo__link' smooth to='#aboutProject' >Узнать больше</HashLink>
      </div>
      <div className='promo__decorate'></div>
    </section>
  )
}
