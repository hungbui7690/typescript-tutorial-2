import { type ReactNode } from 'react'

type InfoBoxProps = {
  mode: 'hint' | 'warning' // @
  children: ReactNode
}

export default function InfoBox({ mode, children }: InfoBoxProps) {
  // @ mode is hint -> different css
  if (mode === 'hint') {
    return (
      <aside className='infobox infobox-hint'>
        <p>{children}</p>
      </aside>
    )
  }

  return (
    <aside className='infobox infobox-warning warning--medium'>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  )
}
