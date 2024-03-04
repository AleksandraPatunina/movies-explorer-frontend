import './Form.css'

export default function Form({ name, children, onSubmit, isValid }) {

  return (
    <form noValidate name={name} onSubmit={onSubmit}>
      {children}
      {name === 'signin' ?
        <>
          <span className='login__error-message'>{'Вы ввели неправильный логин или пароль'}</span>
          <button  type="submit" className={`login__submit ${isValid ? '' : 'login__submit_disabled'}`} disabled={!isValid} >{'Войти'}</button>
        </>
        :
        name === 'signup' ?
          <>
            <span className='login__error-message login__error-message_type_reg'>{'При регистрации пользователя произошла ошибка.'}</span>
            <button className={`login__submit ${isValid ? '' : 'login__submit_disabled'}`} type="submit" >{'Зарегистрироваться'}</button>
          </>
          :
          <>
            <span className='profile__error-message'>{'При обновлении профиля произошла ошибка.'}</span>
            <button  className='profile__submit' type="submit">{'Редактировать'}</button>
          </>
      }
    </form>
  )
}
