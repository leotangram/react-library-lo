import { useField, ErrorMessage } from 'formik'

interface MySelectProps {
  [x: string]: any
  label: string
  name: string
}

const MySelect = ({ ...props }: MySelectProps) => {
  const [field] = useField(props)

  return (
    <>
      <label htmlFor={props.id || props.name}>{props.label}</label>
      <select {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
    </>
  )
}

export default MySelect
