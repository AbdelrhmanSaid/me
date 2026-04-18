<script setup lang="ts">
import DateElement from './DateElement.vue'
import { useRoute, useRouter } from 'vitepress'
import { Post, data } from './posts.data.js'

const route = useRoute()
const router = useRouter()
const post = data.find((p: Post) => p.url === route.path) as Post

const today = new Date()
today.setUTCHours(12, 0, 0, 0)

if (post.date.time > today.getTime()) {
  router.go('/')
}
</script>

<template>
  <article class="mx-auto mt-16 w-full max-w-208 md:mt-20">
    <header class="w-full">
      <DateElement :date="post.date" />
      <h1
        class="mt-4 mb-0 font-serif text-[2.375rem] font-semibold leading-[1.2] tracking-[-0.025em] text-ink md:text-[3.125rem] md:leading-[1.12]"
      >
        {{ post.title }}
      </h1>
    </header>

    <div class="mt-12 max-w-none">
      <Content
        class="prose prose-xl max-w-none font-serif prose-headings:font-serif prose-p:leading-[1.7] prose-li:leading-[1.7]"
      />
    </div>

    <ul v-if="post.tags?.length" class="mt-10 flex w-full flex-wrap gap-2 p-0 list-none">
      <li v-for="tag in post.tags" :key="tag">
        <span
          class="inline-flex items-center rounded-md border border-ink/14 bg-[linear-gradient(145deg,rgba(246,243,237,0.7),rgba(28,25,23,0.04))] px-[0.7rem] py-[0.35rem] font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.03em] text-muted"
        >
          {{ tag }}
        </span>
      </li>
    </ul>
  </article>
</template>
