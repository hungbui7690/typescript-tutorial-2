import {
  type ReactNode,
  type ElementType,
  type ComponentPropsWithoutRef,
} from 'react'

// @ add generic type
type ContainerProps<T extends ElementType> = {
  as?: T
  children: ReactNode
} & ComponentPropsWithoutRef<T> // $ this also works with custom components

// @
export default function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || 'div'
  return <Component {...props}>{children}</Component>
}
