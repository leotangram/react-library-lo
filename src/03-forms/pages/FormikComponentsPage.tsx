import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

const FormikComponentsPage = () => {
  return (
    <div>
      <h1>Formil Components</h1>
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
            <label htmlFor="firstName">First name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage component="span" name="firstName" />
            <label htmlFor="lastName">Last name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage component="span" name="lastName" />
            <label htmlFor="email">Email addres</label>
            <Field name="email" type="text" />
            <ErrorMessage component="span" name="email" />
            <label htmlFor="jobType">Job type</label>
            <Field as="select" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Junior</option>
            </Field>
            <ErrorMessage component="span" name="jobType" />
            <label>
              <Field name="terms" type="checkbox" />
              Terms and conditions
            </label>
            <ErrorMessage component="span" name="terms" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormikComponentsPage
