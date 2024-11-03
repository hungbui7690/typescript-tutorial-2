import { useRef } from 'react'

import Input from './components/Input.tsx'

function App() {
  const input = useRef<HTMLInputElement>(null) // @ useRef

  return (
    <main>
      {/* @ passing ref */}
      <Input label='Test' id='test' ref={input} />
    </main>
  )
}

export default App
