import { createContentLoader } from 'vitepress'

export interface Post {
  title: string
  url: string
  excerpt: string | undefined
  draft?: boolean
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
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url,
        excerpt,
        draft: frontmatter.draft === true,
        date: formatDate(frontmatter.date)
      }))
      .filter((post) => !post.draft)
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
