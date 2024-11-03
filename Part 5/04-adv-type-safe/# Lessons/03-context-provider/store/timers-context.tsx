import { type ReactNode, createContext, useContext } from 'react'

type Timer = {
  name: string
  duration: number
}

type TimersState = {
  isRunning: boolean
  timers: Timer[]
}

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void
  startTimers: () => void
  stopTimers: () => void
}

const TimersContext = createContext<TimersContextValue | null>(null)

// 1.
type TimersContextProviderProps = {
  children: ReactNode
}

// 2a.
export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  // 2b.
  const ctx: TimersContextValue = {
    timers: [],
    isRunning: true,
    addTimer(timerData) {
      // ...
    },
    startTimers() {
      // ...
    },
    stopTimers() {
      // ...
    },
  }

  // 2c.
  return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
}
