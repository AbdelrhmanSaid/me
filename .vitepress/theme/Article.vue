<script setup lang="ts">
import DateElement from './DateElement.vue'
import { useRoute, useRouter } from 'vitepress'
import { Post, data } from './posts.data.js'

const route = useRoute()
const router = useRouter()
const post = data.find((p: Post) => p.url === route.path) as Post

if (post.date.time > Date.now()) {
  router.go('/');
}
</script>

<template>
  <article>
    <header class="pt-6 pb-10 space-y-2 md:space-y-5">
      <DateElement :date="post.date" />
      <h1
        class="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
      >
        {{ post.title }}
      </h1>
    </header>

    <Content class="prose prose-lg max-w-none" />

    <ul class="mt-2 flex flex-wrap gap-2">
      <li v-for="tag in post.tags" :key="tag">
        <span class="rounded bg-gray-100 text-gray-800 px-2 py-1 text-sm">
          {{ tag }}
        </span>
      </li>
    </ul>
  </article>
</template>
