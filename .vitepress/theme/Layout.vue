<script setup lang="ts">
import { useData } from 'vitepress'
import Home from './Home.vue'
import Article from './Article.vue'
import NotFound from './NotFound.vue'

const { page, frontmatter } = useData()
</script>

<template>
  <div class="antialiased dark:bg-zinc-950 dark:text-white">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <nav class="flex justify-between items-center py-10 font-bold">
        <a href="/" v-if="frontmatter.index" class="text-xl">
          Abdelrhman Said
        </a>
        <a href="/" v-else class="text-xl flex items-center">
          <svg
            class="inline-block mr-2 h-6 w-6"
            viewBox="0 0 512 512"
            fill="currentColor"
          >
            <polygon
              points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "
            />
          </svg>
          Back to posts
        </a>
        <div class="text-sm leading-5">
          <a href="https://github.com/AbdelrhmanSaid" target="_blank">
            Github
          </a>
          <span class="mr-2 ml-2">·</span>
          <a href="https://linkedin.com/in/AbdelrhmanSaid" target="_blank">
            LinkedIn
          </a>
        </div>
      </nav>
    </div>
    <main class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <Home v-if="frontmatter.index" />
      <NotFound v-else-if="page.isNotFound" />
      <Article v-else />
    </main>

    <footer class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div class="py-10 text-sm">
        <p>
          © {{ new Date().getFullYear() }} Abdelrhman Said. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>
