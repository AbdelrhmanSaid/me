import tailwindPostcss from '@tailwindcss/postcss'
import { defineConfig } from 'vitepress'
import { genFeed } from './genFeed.js'

export default defineConfig({
  title: 'Abdelrhman Said — Senior Software Engineer',
  description:
    'Abdelrhman Said, quality-oriented Senior Software Engineer in Cairo, Egypt, focused on building products that are easy to use, understand, and maintain.',
  cleanUrls: true,
  markdown: {
    theme: 'github-dark',
    math: true
  },
  vite: {
    css: {
      postcss: {
        plugins: [tailwindPostcss()]
      }
    }
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/logo.svg'
      }
    ]
  ],
  buildEnd: genFeed,
  srcExclude: ['README.md']
})
