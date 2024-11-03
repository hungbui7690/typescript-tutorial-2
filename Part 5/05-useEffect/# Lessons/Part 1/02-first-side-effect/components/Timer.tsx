import Container from './UI/Container.tsx'
import { type Timer as TimerProps } from '../store/timers-context.tsx'
import { useEffect, useState } from 'react'

export default function Timer({ name, duration }: TimerProps) {
  const [remainingTime, setRemainingTime] = useState(duration * 1000) // 1.

  // 2.
  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prev) => prev - 50)
    }, 50)
  }, [])

  // 4.
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2)

  return (
    <Container as='article'>
      <h2>{name}</h2>
      <p>
        {/* 3. */}
        <progress max={duration * 1000} value={remainingTime} />
      </p>

      {/* 5. */}
      <p>{formattedRemainingTime}</p>
    </Container>
  )
}
