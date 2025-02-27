// @ without types
// export default function CourseGoal(props) {
//   return (
//     <article>
//       <div>
//         <h2>{props.title}</h2>
//         <p>{props.description}</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   )
// }

// ---------------------

// @ props with type
// export default function CourseGoal(props: {
//   title: string
//   description: string
// }) {
//   return (
//     <article>
//       <div>
//         <h2>{props.title}</h2>
//         <p>{props.description}</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   )
// }

// ---------------------

// @ destructuring props
// export default function CourseGoal({
//   title,
//   description,
// }: {
//   title: string
//   description: string
// }) {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         <p>{description}</p>
//       </div>
//       <button>Delete</button>
//     </article>
//   )
// }

// ---------------------

// @ create interface
interface CourseGoalProps {
  title: string
  description: string
}

// @
export default function CourseGoal({ title, description }: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button>Delete</button>
    </article>
  )
}
