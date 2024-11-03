import { type ReactNode } from 'react'

interface CourseGoalProps {
  id: number // @ is is needed to call onDelete
  title: string
  children: ReactNode
  onDelete: (id: number) => void
}

export default function CourseGoal({
  title,
  id,
  children,
  onDelete,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  )
}
