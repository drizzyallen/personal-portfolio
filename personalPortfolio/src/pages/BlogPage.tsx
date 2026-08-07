import RouteLink from '../components/RouteLink'
import PageShell from '../components/PageShell'
import { articles } from '../data/portfolio'

function BlogPage() {
  return (
    <PageShell>
      <section className="article-section" aria-label="Articles">
        <div className="article-bars">
          {articles.map((article) => (
            <RouteLink
              className="article-bar"
              key={article.title}
              to={`/blog/${article.slug}`}
            >
              <div className="article-rule" aria-hidden="true" />
              <div className="article-content">
                <div className="article-meta">
                  <span>{article.section}</span>
                  <time>{article.date}</time>
                </div>
                <h2>{article.title}</h2>
                <p className="byline">{article.byline}</p>
              </div>
            </RouteLink>
          ))}
        </div>
      </section>
    </PageShell>
  )
}

export default BlogPage
