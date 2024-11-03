import { useRef, type FormEvent } from 'react'

// $
type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void
}

// $
export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null) // 1. useRef -> generic type = <HTMLInputElement>
  const summary = useRef<HTMLInputElement>(null)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const enteredGoal = goal.current!.value // @ goal.current maybe null
    const enteredSummary = summary.current!.value

    e.currentTarget.reset() // @
    onAddGoal(enteredGoal, enteredSummary) // $
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='goal'>Your goal</label>
        <input
          id='goal'
          type='text'
          ref={goal} // 2a. ref
        />
      </p>
      <p>
        <label htmlFor='summary'>Short summary</label>
        <input
          id='summary'
          type='text'
          ref={summary} // 2b. ref
        />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  )
}
