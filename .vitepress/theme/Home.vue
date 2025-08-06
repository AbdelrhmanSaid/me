<script setup lang="ts">
import { computed } from 'vue'
import DateElement from './DateElement.vue'
import { data as posts } from './posts.data.js'
import { useData } from 'vitepress'

const { frontmatter } = useData()

const publishedPosts = computed(() => {
  const currentUTCTime = new Date()
  currentUTCTime.setUTCHours(12, 0, 0, 0)

  return posts.filter(
    (post) => post.date && post.date.time <= currentUTCTime.getTime()
  )
})
</script>

<template>
  <div class="divide-y">
    <div class="pt-6 pb-8 space-y-2 md:space-y-5">
      <p class="text-base leading-6 font-medium text-gray-600">Hey, I am</p>
      <h1
        class="text-3xl leading-9 font-extrabold tracking-tight md:text-6xl md:leading-14"
      >
        Abdelrhman Said
      </h1>
      <p class="text-lg text-gray-600 leading-7">
        a Quality-oriented Software Engineer with a passion for building
        products that are easy to use, easy to understand, and easy to maintain.
      </p>
    </div>
    <ul class="divide-y">
      <li class="py-12" v-for="post of publishedPosts" :key="post.url">
        <article
          class="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline"
        >
          <DateElement :date="post.date" />
          <div class="space-y-5 xl:col-span-3">
            <div class="space-y-6">
              <h2 class="text-2xl leading-8 font-bold tracking-tight">
                <a :href="post.url">{{ post.title }}</a>
              </h2>
              <div
                v-if="post.excerpt"
                class="prose"
                v-html="post.excerpt"
              ></div>
            </div>
            <div class="text-base leading-6 font-medium">
              <a class="link" aria-label="read more" :href="post.url"
                >Read more →</a
              >
            </div>
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>
