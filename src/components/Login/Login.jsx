//компонент страницы авторизации
import Input from "../Input/Input";
import SignIn from "../SignIn/SignIn";
import useFormValidation from '../../hooks/useFormValidation'
import { useNavigate } from "react-router-dom";


export default function Login({ name, setLoggedIn }) {
  const navigate = useNavigate()
  const { values, errors, isInputValid, isValid, handleChange, } = useFormValidation()

  function handleLoginSuccess(evt) {
    evt.preventDefault()
    navigate('/movies')
    setLoggedIn(true)
  }

  return (
    <SignIn name={name} isValid={isValid} onSubmit={handleLoginSuccess}>
      <Input
        name='email'
        type='email'
        title='E-mail'
        value={values.email}
        isInputValid={isInputValid.email}
        error={errors.email}
        onChange={handleChange}
        placeholder='Введите ваш E-mail'
      />
      <Input
        name='password'
        type='password'
        title='Пароль'
        minLength = '3'
        value={values.password}
        isInputValid={isInputValid.password}
        error={errors.password}
        onChange={handleChange}
        placeholder='Введите ваш пароль'
      />
    </SignIn>
  )
}
