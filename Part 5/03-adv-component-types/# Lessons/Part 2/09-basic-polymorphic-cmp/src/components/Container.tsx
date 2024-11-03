import { type ElementType } from 'react'

type ContainerProps = {
  as: ElementType // @
}

// @
export default function Container({ as }: ContainerProps) {
  const Component = as // map "as" to Component
  return <Component />
}
