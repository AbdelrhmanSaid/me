<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import Home from './Home.vue'
import Article from './Article.vue'
import NotFound from './NotFound.vue'

const { page, frontmatter } = useData()

const showBackToTop = ref(false)

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 200
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <main class="antialiased">
    <header class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <nav class="flex justify-between items-center py-10 font-bold">
        <a href="/" v-if="frontmatter.index" class="text-xl">
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
    </header>

    <section class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <Home v-if="frontmatter.index" />
      <NotFound v-else-if="page.isNotFound" />
      <Article v-else />
    </section>

    <footer class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div class="py-10 text-sm">
        <p>
          © {{ new Date().getFullYear() }} Abdelrhman Said. All rights reserved.
        </p>
      </div>
    </footer>

    <button
      v-if="showBackToTop"
      @click="backToTop"
      class="fixed bottom-0 right-0 mb-5 mr-5 bg-gray-100 rounded-full p-3"
    >
      <svg
        class="h-5 w-5 text-gray-600"
        fill="currentColor"
        viewBox="0 0 330 330"
      >
        <path
          d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
        ></path>
      </svg>
    </button>
  </main>
</template>
