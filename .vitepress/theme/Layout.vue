<script setup lang="ts">
import { useData } from 'vitepress'
import Home from './Home.vue'
import Article from './Article.vue'
import NotFound from './NotFound.vue'

const { page, frontmatter } = useData()
</script>

<template>
  <div class="antialiased bg-zinc-950 text-white">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <nav class="flex justify-between items-center py-10 font-bold">
        <a class="text-xl" href="/">Abdelrhman Said</a>
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
      <div class="py-10 text-sm text-gray-500">
        <p>
          © {{ new Date().getFullYear() }} Abdelrhman Said. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>
