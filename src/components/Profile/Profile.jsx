import { Link } from 'react-router-dom'
import './Profile.css'
import { useEffect } from 'react'
import Form from '../Form/Form'
import Input from '../Input/Input'
import useFormValidation from '../../hooks/useFormValidation'

export default function Profile({ name, setLoggedIn }) {
  const { values, errors, isInputValid, isValid, handleChange, reset } = useFormValidation()

  useEffect(() => {
    reset({username: 'Виталий', email: 'pochta@yandex.ru'})
  }, [reset])

  function handleEdit (evt) {
    evt.preventDefault()
  }

  function signOut() {
    setLoggedIn(false)
  }
  return (
    <section className='profile page__profile'>
      <h2 className='profile__title'>{`Привет, Виталий!`}</h2>
      <Form
        name={name}
        isValid={isValid}
        onSubmit={handleEdit}
      >
        <Input
          selectname={name}
          name='username'
          type='text'
          title='Имя'
          minLength='3'
          value={values.username}
          isInputValid={isInputValid.username}
          error={errors.username}
          onChange={handleChange}
          placeholder='Введите ваше имя'
        />
        <Input
          selectname={name}
          name='email'
          type='email'
          title='E-mail'
          value={values.email}
          isInputValid={isInputValid.email}
          error={errors.email}
          onChange={handleChange}
          placeholder='example@example.com'
        />
      </Form>
      <Link to={'/'} onClick={signOut} className='profile__link'>Выйти из аккаунта</Link>
    </section>
  )
}
