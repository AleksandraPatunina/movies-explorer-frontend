// хук для валидации формы
import { useCallback, useState } from "react";

export default function useFormValidation() {
  const [values, setValues] = useState({})  
  const [isInputValid, setIsInputValid] = useState({})
  const [isValid, setIsValid] = useState(false)
  const [errors, setErrors] = useState({})


  function handleChange(evt) {
    const name = evt.target.name
    const value = evt.target.value
    const validationMessage = evt.target.validationMessage // сообщение об ошибке
    const valid = evt.target.validity.valid //проверяем , прошло ли введенное значение валидацию
    const form = evt.target.form
    setValues((prevValues) => {
      return { ...prevValues, [name]: value }
    })
    // отображение ошибки валидации в форме 
    setErrors(oldErrors => {
      return { ...oldErrors, [name]: validationMessage }
    })
    // обновление  состояния валидации отдельных полей формы и обновление общей валидности всей формы
    setIsInputValid((oldValid) => {
      return { ...oldValid, [name]: valid }
    })
    setIsValid(form.checkValidity())
  }
// обновление значений состояния (используя предыдущие значения, переданные в setValues)
  const setValue = useCallback((name, value) => {
    setValues((prevValues) => {
      return { ...prevValues, [name]: value }
    })
  }, [])

  const reset = useCallback((newValues = {}) => {
    setValues(newValues)
    setErrors({})
    setIsInputValid({})
    setIsValid(false)
  },[])

  return { values, isInputValid, isValid, errors, handleChange, setValue, reset }
}
