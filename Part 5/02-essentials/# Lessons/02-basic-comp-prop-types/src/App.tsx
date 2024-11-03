/*
  Building a First Component & Facing a Missing Type
  Defining Component Props Types
  Storing Props Types as a Custom Type or Interface



*/

import CourseGoal from './components/CourseGoal.tsx'

export default function App() {
  return (
    <main>
      {/* @ need to have props -> otherwise error */}
      <CourseGoal
        title='Learn React + TS'
        description='Learn it from the ground up'
      />
    </main>
  )
}
