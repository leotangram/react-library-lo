import { useField } from 'formik'

interface MyCheckboxProps {
  [x: string]: any
  label: string
  name: string
}

const MyCheckbox = ({ ...props }: MyCheckboxProps) => {
  const [field, meta] = useField({ ...props })

  return (
    <>
      <label>
        <input {...field} {...props} type="checkbox" />
        {props.label}
      </label>
      {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )}
    </>
  )
}

export default MyCheckbox
