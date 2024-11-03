import { type ReactNode, createContext, useContext } from 'react'

// 1.
type Timer = {
  name: string
  duration: number
}

// 2.
type TimersState = {
  isRunning: boolean
  timers: Timer[]
}

// 3.
type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void
  startTimers: () => void
  stopTimers: () => void
}

const TimersContext = createContext<TimersContextValue | null>(null) // 4.
