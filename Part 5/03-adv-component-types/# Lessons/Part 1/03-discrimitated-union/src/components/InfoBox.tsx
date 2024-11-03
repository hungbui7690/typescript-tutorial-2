import { type ReactNode } from 'react'

type HintBoxProps = {
  mode: 'hint'
  children: ReactNode
}

type WarningBoxProps = {
  mode: 'warning'
  severity: 'low' | 'medium' | 'high' // *** if we only have 1 type -> use optional here -> otherwise, use union type like we did here
  children: ReactNode
}

// @
type InfoBoxProps = HintBoxProps | WarningBoxProps

// @ use props here
export default function InfoBox(props: InfoBoxProps) {
  const { children, mode } = props

  if (mode === 'hint') {
    return (
      <aside className='infobox infobox-hint'>
        <p>{children}</p>
      </aside>
    )
  }

  // @ else mode === 'warning' -> we cannot extract props directly in the param list
  const { severity } = props

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  )
}
