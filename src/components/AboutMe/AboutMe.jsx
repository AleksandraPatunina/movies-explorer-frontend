import { Link } from "react-router-dom"
import './AboutMe.css'
import Cover from "../Cover/Cover"
import picture from '../../images/menpicture.png'


export default function AboutMe() {
  return (
    <section className='aboutme section__aboutme'>
      <Cover>
        <h2 className='aboutme__title'>Студент</h2>
        <div className='aboutme__container'>
          <div className='aboutme__text-container'>
            <h3 className='aboutme__student-name'>Виталий</h3>
            <p className='aboutme__job'>Фронтенд-разработчик, 30 лет</p>
            <p className='aboutme__description'>Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ.
             У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом.
              Недавно начал кодить. С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;.
              После того, как прошёл курс по&nbsp;веб-разработке,начал заниматься фриланс-заказами и&nbsp;ушёл 
              с&nbsp;постоянной работы.</p>
            <Link to={'https://github.com/AleksandraPatunina'}  className='aboutme__link' target='_blank'>Github</Link>
          </div>
          <img  className='aboutme__picture' src={picture} alt="#"/>
        </div>
      </Cover>
    </section>
  )
}
