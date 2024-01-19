import { defineConfig } from 'vitepress'
import { genFeed } from './genFeed.js'

export default defineConfig({
  title: 'Abdelrhman Said',
  description: 'Quality-oriented Software Engineer with a passion for building products that are easy to use, easy to understand, and easy to maintain.',
  cleanUrls: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/logo.svg'
      }
    ],
  ],
  buildEnd: genFeed,
  srcExclude: ['README.md']
})
