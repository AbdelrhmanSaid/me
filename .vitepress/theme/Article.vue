<script setup lang="ts">
import Date from './Date.vue'
import { useRoute } from 'vitepress'
import { Post, data } from './posts.data.js'

const route = useRoute()
const post = data.find((p: Post) => p.url === route.path) as Post
</script>

<template>
  <article>
    <header class="pt-6 pb-10 space-y-2 md:space-y-5">
      <Date :date="post.date" />
      <h1
        class="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
      >
        {{ post.title }}
      </h1>
    </header>

    <Content class="prose prose-lg max-w-none" />

    <div class="mt-8">
      <h2 class="text-lg leading-6 font-medium text-gray-900">Tags</h2>
      <ul class="mt-2 flex flex-wrap space-x-2">
        <li v-for="tag in post.tags" :key="tag">
          <span
            class="inline-flex items-center px-3 py-0.5 rounded text-sm font-medium leading-5 bg-gray-100 text-gray-800"
          >
            {{ tag }}
          </span>
        </li>
      </ul>
    </div>
  </article>
</template>
