import { useEffect, useState } from 'react'
import './App.css'
import AboutPage from './pages/AboutPage'
import ArticlePage from './pages/ArticlePage'
import BlogPage from './pages/BlogPage'
import HomePage from './pages/HomePage'

type RouteState =
  | { name: 'home' }
  | { name: 'blog' }
  | { name: 'about' }
  | { name: 'article'; slug: string }

function getRouteState(): RouteState {
  const path = window.location.pathname

  if (path === '/') {
    return { name: 'home' }
  }

  if (path === '/blog') {
    return { name: 'blog' }
  }

  if (path === '/about') {
    return { name: 'about' }
  }

  if (path.startsWith('/blog/')) {
    return { name: 'article', slug: path.replace('/blog/', '') }
  }

  window.history.replaceState({}, '', '/')
  return { name: 'home' }
}

function renderRoute(routeState: RouteState) {
  if (routeState.name === 'blog') {
    return <BlogPage />
  }

  if (routeState.name === 'article') {
    return <ArticlePage slug={routeState.slug} />
  }

  if (routeState.name === 'about') {
    return <AboutPage />
  }

  return <HomePage />
}

function App() {
  const [routeState, setRouteState] = useState(getRouteState)

  useEffect(() => {
    function handleRouteChange() {
      setRouteState(getRouteState())
    }

    window.addEventListener('popstate', handleRouteChange)
    window.addEventListener('portfolio:navigate', handleRouteChange)

    return () => {
      window.removeEventListener('popstate', handleRouteChange)
      window.removeEventListener('portfolio:navigate', handleRouteChange)
    }
  }, [])

  return renderRoute(routeState)
}

export default App
