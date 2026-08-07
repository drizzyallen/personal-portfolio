import RouteLink from './RouteLink'

function SiteHeader() {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <RouteLink className="wordmark" to="/">
        Home
      </RouteLink>
      <nav>
        <a href="/#work">Work</a>
        <a href="/#contact">Contact</a>
        <span className="nav-divider" aria-hidden="true">
          |
        </span>
        <RouteLink to="/blog">Blog</RouteLink>
        <RouteLink to="/about">Learn more about me</RouteLink>
      </nav>
    </header>
  )
}

export default SiteHeader
