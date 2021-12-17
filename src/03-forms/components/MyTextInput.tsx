import { ErrorMessage, useField } from 'formik'

interface MyTextInputProps {
  [x: string]: any
  label: string
  name: string
  placeholder?: string
  type?: 'text' | 'email' | 'password'
}

const MyTextInput = ({ ...props }: MyTextInputProps) => {
  const [
    field
    // meta
  ] = useField(props)

  return (
    <>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <input className="text-input" type="text" {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
      {/* {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )} */}
    </>
  )
}

export default MyTextInput
