import { ComponentPropsWithoutRef } from 'react'

// type InputProps = {
//   label: string
//   id: string
//   type: 'text' | 'number' // $
// }

type InputProps = {
  label: string
  id: string
} & ComponentPropsWithoutRef<'input'> // $

// @ add ...props
export default function Input({ label, id, ...props }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>

      {/* @ add {...props} */}
      <input id={id} {...props} />
    </p>
  )
}
