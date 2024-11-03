import { type FormEvent } from 'react'

export default function NewGoal() {
  // @ FormEvent
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    new FormData(e.currentTarget) // need to use e.currentTarget instead of e.target -> e.target is not guaranteed to be an HTMLFormElement
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='goal'>Your goal</label>
        <input id='goal' type='text' />
      </p>
      <p>
        <label htmlFor='summary'>Short summary</label>
        <input id='summary' type='text' />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  )
}
