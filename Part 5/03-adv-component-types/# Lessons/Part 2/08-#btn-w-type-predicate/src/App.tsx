import Button from './components/Button.tsx'

function App() {
  return (
    <main>
      <p>
        <Button disabled>A Button</Button>
      </p>
      <p>
        {/* @ we don't need to use "el" prop & we can use "href" */}
        <Button href='https://google.com'>A Link</Button>
      </p>
    </main>
  )
}

export default App
