/*
  How to type (extend) HTML elements
  - The @types/react library ships with ComponentPropsWithoutRef type that you can use to grab all the native attributes of an HTML element as the props type of your component.
  - Button.tsx -> how to use ComponentPropsWithoutRef
  - Img.tsx -> extends ComponentPropsWithoutRef


---------------------

  - <input id={id} {...props} />
    -> ctrl + space -> there are many native attributes of <input> -> and we don't want to type out all of them or setup props for all of them


---------------------

  - so, we need to add ComponentPropsWithoutRef<'input'>
    -> type InputProps = {
        label: string
        id: string
      } & ComponentPropsWithoutRef<'input'>


---------------------

  - if we use Ref -> ComponentPropsWithRef<'input'>


---------------------

  🌲 https://blog.bitsrc.io/react-with-typescript-cheatsheet-9dd891dc5bf 


*/

import Input from './components/Input.tsx'

function App() {
  return (
    <main>
      {/* $ add "type" */}
      <Input id='name' label='Your name' type='text' />
      <Input id='age' label='Your age' type='number' />
    </main>
  )
}

export default App
