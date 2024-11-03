import { useEffect, useRef, useState } from 'react'

import Container from './UI/Container.tsx'
import { type Timer as TimerProps } from '../store/timers-context.tsx'

export default function Timer({ name, duration }: TimerProps) {
  const interval = useRef<number | null>(null) // 1.
  const [remainingTime, setRemainingTime] = useState(duration * 1000)

  // 5.
  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current)
  }

  useEffect(() => {
    // 2. because of strict mode -> we need to clearInterval twice
    const timer = setInterval(function () {
      setRemainingTime((prevTime) => prevTime - 50)
    }, 50)
    interval.current = timer // 4.

    return () => clearInterval(timer) // 3.
  }, [])

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2)

  return (
    <Container as='article'>
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  )
}
