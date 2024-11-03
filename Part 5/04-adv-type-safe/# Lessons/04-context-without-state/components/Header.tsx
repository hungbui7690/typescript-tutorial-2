import Button from './UI/Button.tsx'
import { useTimersContext } from '../store/timers-context.tsx'

export default function Header() {
  const timersCtx = useTimersContext() // 2.

  return (
    <header>
      <h1>ReactTimer</h1>

      {/* 3. */}
      <Button>{timersCtx.isRunning ? 'Stop' : 'Start'} Timers</Button>
    </header>
  )
}
