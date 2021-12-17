import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { MyTextInput } from '../components'

import '../styles/styles.css'

const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          passwordConfirm: ''
        }}
        onSubmit={values => {
          console.log(values)
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'El nombre debe tener al menos 2 catacteres o mas')
            .max(15, 'El nombre debe tener máximo de 15 caracteres')
            .required('El nombre es requerido'),
          email: Yup.string()
            .email('Revise el formato del correo')
            .required('El correo es requerido'),
          password: Yup.string()
            .min(6, 'La contraseña debe tener al menos 6 caracteres o mas')
            .required('La contraseña es requerida'),
          passwordConfirm: Yup.string()
            .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden')
            .required('La confirmacion de la contraseña es requerida')
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label="Nombre" name="name" placeholder="Leonardo" />
            <MyTextInput
              label="Email"
              name="email"
              placeholder="johndoe@gmail.com"
              type="email"
            />
            <MyTextInput
              label="Password"
              name="password"
              placeholder="********"
              type="password"
            />
            <MyTextInput
              label="Password"
              name="passwordConfirm"
              placeholder="********"
              type="password"
            />
            <button type="submit">Create</button>
            <button onClick={handleReset}>Reset form</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RegisterFormikPage
