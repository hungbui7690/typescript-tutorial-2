import AddTimer from './components/AddTimer.tsx'
import Header from './components/Header.tsx'
import Timers from './components/Timers.tsx'
import TimersContextProvider from './store/timers-context.tsx' // 3.

function App() {
  return (
    // 4. add type safe provider
    <TimersContextProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimersContextProvider>
  )
}

export default App
