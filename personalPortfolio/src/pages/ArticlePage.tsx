import RouteLink from '../components/RouteLink'
import PageShell from '../components/PageShell'
import { articles } from '../data/portfolio'

type ArticlePageProps = {
  slug: string
}

function ArticlePage({ slug }: ArticlePageProps) {
  const article = articles.find((item) => item.slug === slug)

  if (!article) {
    return (
      <PageShell>
        <section className="article-page article-missing">
          <p className="eyebrow">Article</p>
          <h1>Article not found.</h1>
          <RouteLink className="button" to="/blog">
            Back to blog
          </RouteLink>
        </section>
      </PageShell>
    )
  }

  return (
    <PageShell>
      <article className="article-page">
        <RouteLink className="back-link" to="/blog">
          Back to blog
        </RouteLink>
        <header className="nyt-article-header">
          <div className="article-meta">
            <span>{article.section}</span>
            <time>{article.date}</time>
          </div>
          <h1>{article.title}</h1>
          <p className="byline">{article.byline}</p>
        </header>

        <div className="nyt-article-body">
          {article.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </PageShell>
  )
}

export default ArticlePage
