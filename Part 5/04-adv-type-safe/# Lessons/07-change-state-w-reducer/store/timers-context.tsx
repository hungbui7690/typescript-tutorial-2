import { type ReactNode, createContext, useContext, useReducer } from 'react'

type Timer = {
  name: string
  duration: number
}

type TimersState = {
  isRunning: boolean
  timers: Timer[]
}

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

type TimersContextProviderProps = {
  children: ReactNode
}

type StartTimersAction = {
  type: 'START_TIMERS'
}

type StopTimersAction = {
  type: 'STOP_TIMERS'
}

type AddTimerAction = {
  type: 'ADD_TIMER'
}

type Action = StartTimersAction | StopTimersAction | AddTimerAction

function timersReducer(state: TimersState, action: Action): TimersState {
  // 1.
  if (action.type === 'START_TIMERS') {
    // state.isRunning = true;
    return {
      ...state,
      isRunning: true,
    }
  }
  if (action.type === 'STOP_TIMERS') {
    return {
      ...state,
      isRunning: false,
    }
  }

  return state
}

export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  const [timersState, dispatch] = useReducer(timersReducer, initialState)

  const ctx: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData) {},
    startTimers() {
      dispatch({ type: 'START_TIMERS' }) // 2.
    },
    stopTimers() {
      dispatch({ type: 'STOP_TIMERS' }) // 3.
    },
  }
  return <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
}
