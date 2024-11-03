// Method 2
// import { type PropsWithChildren } from 'react' // $
// type CourseGoalProps = PropsWithChildren<{ title: string }> // $

// Method 1
import { type ReactNode } from 'react' // @ can be ReactNode or "type ReactNode"
interface CourseGoalProps {
  title: string
  children: ReactNode
} // @

export default function CourseGoal({ title, children }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  )
}
