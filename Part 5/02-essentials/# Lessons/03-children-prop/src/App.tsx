/*
  Defining a Type for Props with children



*/

import CourseGoal from './components/CourseGoal.tsx'

export default function App() {
  return (
    <main>
      {/* @ children */}
      <CourseGoal title='Learn React + TS'>
        <p>Learn it from the ground up</p>
      </CourseGoal>
    </main>
  )
}
