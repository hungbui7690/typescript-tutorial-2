import { useTimersContext } from '../store/timers-context.tsx'
import Timer from './Timer.tsx'

export default function Timers() {
  const { timers } = useTimersContext() // 5.

  return (
    <ul>
      {timers.map((timer) => (
        <li key={timer.name}>
          <Timer {...timer} />
        </li>
      ))}
    </ul>
  )
}
