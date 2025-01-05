import path from 'path'
import { writeFileSync } from 'fs'
import { Feed } from 'feed'
import { createContentLoader, type SiteConfig } from 'vitepress'

const baseUrl = `https://abdelrhmansaid.netlify.app`

export async function genFeed(config: SiteConfig) {
  const feed = new Feed({
    title: 'Abdelrhman Said',
    description: 'Quality-oriented Software Engineer with a passion for building products that are easy to use, easy to understand, and easy to maintain.',
    id: baseUrl,
    link: baseUrl,
    language: 'en',
    image: `${baseUrl}/logo.svg`,
    favicon: `${baseUrl}/logo.svg`,
    copyright: 'Copyright (c) 2022-present, Abdelrhman Said'
  })

  const posts = await createContentLoader('posts/*.md', {
    excerpt: true,
    render: true
  }).load()

  posts.sort(
    (a, b) =>
      +new Date(b.frontmatter.date as string) -
      +new Date(a.frontmatter.date as string)
  )

  for (const { url, excerpt, frontmatter, html } of posts) {
    if (frontmatter.draft) {
      continue
    }

    feed.addItem({
      title: frontmatter.title,
      id: `${baseUrl}${url}`,
      link: `${baseUrl}${url}`,
      description: excerpt,
      content: html,
      author: [
        {
          name: 'Abdelrhman Said',
          link: `https://www.linkedin.com/in/abdelrhmansaid/`
        }
      ],
      date: frontmatter.date
    })
  }

  writeFileSync(path.join(config.outDir, 'feed.rss'), feed.rss2())
}
