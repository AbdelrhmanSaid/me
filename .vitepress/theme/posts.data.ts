import { createContentLoader } from 'vitepress'

export interface Post {
  url: string
  title: string
  excerpt: string | undefined
  draft?: boolean
  tags?: string[]
  date: {
    time: number
    string: string
  }
}

declare const data: Post[]
export { data }

export default createContentLoader('posts/*.md', {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .map((post) => ({
        url: post.url,
        title: post.frontmatter.title,
        excerpt: post.excerpt,
        draft: post.frontmatter.draft === true,
        tags: post.frontmatter.tags,
        date: formatDate(post.frontmatter.date)
      }))
      .filter((post) => post.draft !== true)
      .sort((a, b) => b.date.time - a.date.time)
  }
})

function formatDate(raw: string): Post['date'] {
  const date = new Date(raw)
  date.setUTCHours(12)

  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}
