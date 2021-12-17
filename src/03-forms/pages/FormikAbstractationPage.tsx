import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import { MyTextInput, MyCheckbox, MySelect } from '../components'
import '../styles/styles.css'

const FormikAbstractationPage = () => {
  return (
    <div>
      <h1>Formil Abstractation</h1>
      <Formik
        initialValues={{
          email: '',
          firstName: '',
          jobType: '',
          lastName: '',
          terms: false
        }}
        onSubmit={values => {
          console.log(values)
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('El email no tiene un formato válido')
            .required('Requerido'),
          firstName: Yup.string()
            .max(15, 'Debe tener 15 caracteres o menos')
            .required('Requerido'),
          jobType: Yup.string()
            .required('Requerido')
            .notOneOf(['it-jr'], 'Esta opción no es permitida'),
          lastName: Yup.string()
            .max(10, 'Debe tener 10 caracteres o menos')
            .required('Requerido'),
          terms: Yup.boolean().oneOf(
            [true],
            'Debe aceptar los términos y condiciones'
          )
        })}
      >
        {formik => (
          <Form>
            <MyTextInput
              label="Firs name"
              name="firstName"
              placeholder="Leonardo"
            />
            <MyTextInput
              label="Last name"
              name="lastName"
              placeholder="Omaña"
            />
            <MyTextInput
              label="Email"
              name="email"
              placeholder="johndoe@gmail.com"
              type="email"
            />
            <MySelect label="Job type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Junior</option>
            </MySelect>
            <MyCheckbox label="Terms & conditions" name="terms" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormikAbstractationPage
