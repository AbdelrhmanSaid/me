<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
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
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <div
    class="relative min-h-screen overflow-x-hidden bg-page text-ink antialiased selection:bg-accent/20 selection:text-ink"
  >
    <div aria-hidden="true" class="pointer-events-none fixed inset-0 z-0 bg-noise-texture opacity-25"></div>
    <div
      aria-hidden="true"
      class="pointer-events-none fixed inset-x-0 top-0 z-0 h-32 bg-gradient-to-b from-surface via-surface/80 to-transparent backdrop-blur-[2px]"
    ></div>

    <main class="relative z-10 mx-auto max-w-[74rem] px-6 pt-16 pb-24 md:px-10 md:pt-20 md:pb-32">
      <template v-if="frontmatter.index">
        <Home />
      </template>
      <template v-else-if="page.isNotFound">
        <NotFound />
      </template>
      <template v-else>
        <header class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <a href="/" class="rounded-sm text-inherit no-underline focus-ring">
              <p class="m-0 font-serif text-[1.5rem] leading-[1.25] tracking-[-0.025em] text-ink md:text-[1.875rem]">
                Abdelrhman Said
              </p>
              <p class="mt-1 mr-0 mb-0 ml-0 font-sans text-sm text-muted">Senior Software Engineer</p>
            </a>
          </div>

          <nav aria-label="Site" class="mt-6 flex gap-6 font-sans text-sm font-medium sm:mt-0">
            <a
              href="/#projects"
              class="text-muted no-underline transition-colors duration-150 hover:text-accent focus-ring"
              >Projects</a
            >
            <a
              href="/#writing"
              class="text-muted no-underline transition-colors duration-150 hover:text-accent focus-ring"
              >Writing</a
            >
            <a
              href="/#about"
              class="text-muted no-underline transition-colors duration-150 hover:text-accent focus-ring"
              >About</a
            >
            <a
              href="https://github.com/AbdelrhmanSaid"
              class="text-muted no-underline transition-colors duration-150 hover:text-accent focus-ring"
              target="_blank"
              rel="noopener noreferrer"
              >GitHub</a
            >
          </nav>
        </header>

        <Article />

        <footer class="mt-24 border-t border-ink/10 pt-8 font-sans text-sm text-muted md:mt-32">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p class="m-0">© {{ new Date().getFullYear() }} Abdelrhman Said. Built in Cairo.</p>
            <div class="flex gap-6">
              <a
                href="https://github.com/AbdelrhmanSaid"
                class="text-inherit no-underline transition-colors duration-150 hover:text-accent"
                >GitHub</a
              >
              <a
                href="https://linkedin.com/in/AbdelrhmanSaid"
                class="text-inherit no-underline transition-colors duration-150 hover:text-accent"
                >LinkedIn</a
              >
            </div>
          </div>
        </footer>
      </template>
    </main>

    <button
      v-if="showBackToTop"
      type="button"
      class="focus-ring fixed right-5 bottom-5 z-20 rounded-full border border-ink/15 bg-panel p-3 text-ink shadow-[0_4px_6px_-1px_rgba(28,25,23,0.08)] transition-colors duration-150 hover:border-accent/40 hover:text-accent"
      aria-label="Back to top"
      @click="backToTop"
    >
      <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 330 330" aria-hidden="true">
        <path
          d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
        ></path>
      </svg>
    </button>
  </div>
</template>
