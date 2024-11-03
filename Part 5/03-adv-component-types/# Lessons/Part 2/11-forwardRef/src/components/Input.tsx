import { forwardRef, type ComponentPropsWithoutRef } from 'react'

type InputProps = {
  label: string
  id: string
} & ComponentPropsWithoutRef<'input'>

// @ forwardRef
const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, ...props },
  ref // $
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      {/* @ ref */}
      <input id={id} {...props} ref={ref} />
    </p>
  )
})

export default Input
