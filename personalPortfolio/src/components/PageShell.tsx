import type { ReactNode } from 'react'
import SiteHeader from './SiteHeader'

type PageShellProps = {
  children: ReactNode
}

function PageShell({ children }: PageShellProps) {
  return (
    <main className="page-shell">
      <SiteHeader />
      {children}
    </main>
  )
}

export default PageShell
