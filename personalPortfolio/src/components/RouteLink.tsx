import type { MouseEvent, ReactNode } from 'react'

type RouteLinkProps = {
  children: ReactNode
  className?: string
  to: string
}

function navigate(to: string) {
  window.history.pushState({}, '', to)
  window.scrollTo({ top: 0, behavior: 'smooth' })
  window.dispatchEvent(new Event('portfolio:navigate'))
}

function RouteLink({ children, className, to }: RouteLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      return
    }

    event.preventDefault()
    navigate(to)
  }

  return (
    <a className={className} href={to} onClick={handleClick}>
      {children}
    </a>
  )
}

export default RouteLink
