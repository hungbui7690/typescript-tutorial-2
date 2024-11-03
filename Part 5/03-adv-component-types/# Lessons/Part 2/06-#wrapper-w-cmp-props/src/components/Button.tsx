// @ with this setup -> we need to keep adding another prop to the ButtonProps as you need them as follows:
// type ButtonProps = {
//   children: React.ReactNode
//   onClick: () => void // @ need to add more props
//   disabled: boolean
//   type: 'button' | 'submit' | 'reset' | undefined
// }

// const Button = ({ children, onClick }: ButtonProps) => {
//   return <button onClick={onClick}>{children}</button>
// }

// ------------------------

// @ The ComponentPropsWithoutRef type can be used so that you don’t need to add these native HTML attributes to the type as you grow your application.

type ButtonProps = React.ComponentPropsWithoutRef<'button'>
const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  )
}
