import { useFormik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

const FormikYupPage = () => {
  const { errors, getFieldProps, handleSubmit, touched } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: values => console.log(values),
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Debe tener 15 caracteres o menos')
        .required('Requerido'),
      lastName: Yup.string()
        .max(10, 'Debe tener 10 caracteres o menos')
        .required('Requerido'),
      email: Yup.string()
        .email('El email no tiene un formato válido')
        .required('Requerido')
    })
  })

  return (
    <div>
      <h1>Formil Yup</h1>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name</label>
        <input {...getFieldProps('firstName')} type="text" />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}
        <label htmlFor="lastName">Last name</label>
        <input {...getFieldProps('lastName')} type="text" />
        {touched.firstName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="email">Email Addres</label>
        <input {...getFieldProps('email')} type="email" />
        {touched.firstName && errors.email && <span>{errors.email}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormikYupPage
