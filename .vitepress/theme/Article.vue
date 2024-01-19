<script setup lang="ts">
import Date from './Date.vue'
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import { data as posts } from './posts.data.js'

const { frontmatter: data } = useData()

const route = useRoute()

function findCurrentIndex() {
  return posts.findIndex((p) => p.url === route.path)
}

// use the customData date which contains pre-resolved date info
const date = computed(() => posts[findCurrentIndex()].date)
const nextPost = computed(() => posts[findCurrentIndex() - 1])
const prevPost = computed(() => posts[findCurrentIndex() + 1])
</script>

<template>
  <article>
    <header class="pt-6 pb-10 space-y-2 md:space-y-5">
      <Date :date="date" />
      <h1
        class="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
      >
        {{ data.title }}
      </h1>
    </header>

    <Content class="prose prose-lg max-w-none" />
  </article>
</template>
