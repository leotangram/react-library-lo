import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'

const RegisterPage = () => {
  const {
    email,
    formData,
    name,
    password,
    passwordConfirm,

    isValidEmail,
    handleChange,
    resetForm
  } = useForm({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formData)
  }

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={handleSubmit}>
        <input
          className={`${name.trim().length <= 0 && 'has-error'}`}
          name="name"
          onChange={handleChange}
          placeholder="Name"
          type="text"
          value={name}
        />
        {name.trim().length <= 0 && <span>Campo es necesario</span>}
        <input
          className={`${!isValidEmail(email) && 'has-error'}`}
          name="email"
          onChange={handleChange}
          placeholder="Email"
          type="email"
          value={email}
        />
        {!isValidEmail(email) && <span>Email no es valido</span>}
        <input
          className={`${
            (password.trim().length <= 0 ||
              (password.trim().length < 6 && password.trim().length > 0)) &&
            'has-error'
          }`}
          name="password"
          onChange={handleChange}
          placeholder="Password"
          type="password"
          value={password}
        />
        {password.trim().length <= 0 && <span>Campo es necesario</span>}
        {password.trim().length < 6 && password.trim().length > 0 && (
          <span>La contraseña debe tener mas de 6 carácteres</span>
        )}
        <input
          className={`${passwordConfirm !== password && 'has-error'}`}
          name="passwordConfirm"
          onChange={handleChange}
          placeholder="Repeat password"
          type="password"
          value={passwordConfirm}
        />
        {passwordConfirm.trim().length <= 0 && <span>Campo es necesario</span>}
        {passwordConfirm.trim().length > 0 && passwordConfirm !== password && (
          <span>Las contraseñas no son iguales</span>
        )}
        <button type="submit">Create</button>
        <button onClick={resetForm} type="submit">
          Reset form
        </button>
      </form>
    </div>
  )
}

export default RegisterPage
