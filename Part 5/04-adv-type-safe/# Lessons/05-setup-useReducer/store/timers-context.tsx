import { type ReactNode, createContext, useContext, useReducer } from 'react'

type Timer = {
  name: string
  duration: number
}

type TimersState = {
  isRunning: boolean
  timers: Timer[]
}

// 1.
const initialState: TimersState = {
  isRunning: true,
  timers: [],
}

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void
  startTimers: () => void
  stopTimers: () => void
}

const TimersContext = createContext<TimersContextValue | null>(null)

export function useTimersContext() {
  const timersCtx = useContext(TimersContext)

  if (timersCtx === null) {
    throw new Error('TimersContext is null - that should not be the case!')
  }

  return timersCtx
}

// 2.
type Action = 'ADD_TIMER' | 'START_TIMERS' | 'STOP_TIMERS'

// 3.
function timersReducer(state: TimersState, action: Action): TimersState {
  return state
}

type TimersContextProviderProps = {
  children: ReactNode
}

export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  const [timersState, dispatch] = useReducer(timersReducer, initialState) // 4.

  const ctx: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData) {},
    startTimers() {},
    stopTimers() {},
  }
  return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
}
