import { Link } from 'react-router-dom'
import Form from '../Form/Form'
import './SignIn.css'

export default function SignIn({ name, children, isValid, onSubmit }) {
  return (
    
    <section className='login'>
      <Link to={'/'} className="login__link-home"></Link>
      <h1 className='login__title'>{name === 'signin' ? 'Рады видеть!' : 'Добро пожаловать!'}</h1>
      <Form name={name} isValid={isValid} onSubmit={onSubmit}>
        {children}
      </Form>
      {name === 'signin' ?
        <p className='login__text'>Ещё не зарегистрированы? <Link to={'/signup'} className='login__link'>Регистрация</Link></p>
        : name === 'signup' ?
          <p className='login__text'>Уже зарегистрированы? <Link to={'/signin'} className='login__link'>Войти</Link></p>
          :
          <Link to={'/'}>Выйти из аккаунта</Link>
      }
    </section>

  )
}
