import { type ComponentPropsWithoutRef } from 'react'

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  href?: never // button never has href attribute -> if we set href, it is the anchor
}

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
  href?: string
}

// @ Type Predication -> default return type is boolean -> but more specific, we use type predication
function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return 'href' in props
}

export default function Button(props: ButtonProps | AnchorProps) {
  // @
  if (isAnchorProps(props)) {
    return <a className='button' {...props}></a>
  }

  return <button className='button' {...props}></button>
}
