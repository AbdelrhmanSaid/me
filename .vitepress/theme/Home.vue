<script setup lang="ts">
import { computed } from 'vue'
import DateElement from './DateElement.vue'
import { data as posts } from './posts.data.js'

const publishedPosts = computed(() => {
  const currentUTCTime = new Date()
  currentUTCTime.setUTCHours(12, 0, 0, 0)

  return posts.filter((post) => post.date && post.date.time <= currentUTCTime.getTime())
})
</script>

<template>
  <div>
    <header class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
      <div>
        <p class="m-0 font-serif text-[1.5rem] leading-[1.25] tracking-[-0.025em] text-ink md:text-[1.875rem]">
          Abdelrhman Said
        </p>
        <p class="mt-1 mr-0 mb-0 ml-0 font-sans text-sm text-muted">Senior Software Engineer</p>
      </div>

      <nav aria-label="On this page" class="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm font-medium sm:mt-0">
        <a href="#projects" class="text-muted no-underline transition-colors duration-150 hover:text-accent focus-ring"
          >Projects</a
        >
        <a href="#writing" class="text-muted no-underline transition-colors duration-150 hover:text-accent focus-ring"
          >Writing</a
        >
        <a href="#about" class="text-muted no-underline transition-colors duration-150 hover:text-accent focus-ring"
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

    <section
      id="hello"
      aria-labelledby="hello-heading"
      class="mt-20 grid gap-12 md:mt-28 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start lg:gap-16"
    >
      <div>
        <h1
          id="hello-heading"
          class="m-0 max-w-[42rem] font-serif text-[2.25rem] leading-[1.15] font-semibold tracking-[-0.025em] text-balance text-ink md:text-[3rem] lg:text-[3.75rem]"
        >
          Clear, maintainable software built to last.
        </h1>

        <div
          class="mt-8 max-w-[42rem] font-serif text-[1.125rem] leading-[1.625] text-muted md:text-[1.25rem] md:leading-8"
        >
          <p class="m-0">
            Quality-oriented Senior Software Engineer with a passion for building products that are easy to use, easy to
            understand, and easy to maintain.
          </p>
          <p class="mt-6">
            With over 6 years of experience, I've built multiple Projects for different clients, from small startups to
            large enterprises, serving more then 10M users, handling millions of requests per day.
          </p>
        </div>

        <div class="mt-10 flex flex-wrap gap-4 font-sans text-sm">
          <a
            href="tel:+201552196447"
            class="inline-flex items-center justify-center bg-accent px-6 py-3 font-semibold text-surface no-underline shadow-[0_1px_2px_rgba(28,25,23,0.06)] transition-colors duration-150 hover:bg-accent-hover focus-ring"
            >Get in touch</a
          >
          <a
            href="https://linkedin.com/in/AbdelrhmanSaid"
            class="inline-flex items-center justify-center border border-ink/15 bg-transparent px-6 py-3 font-semibold text-ink no-underline transition-colors duration-150 hover:border-ink hover:bg-ink/5 focus-ring"
            target="_blank"
            rel="noopener noreferrer"
            >LinkedIn</a
          >
        </div>
      </div>

      <aside
        aria-label="Quick facts"
        class="group relative overflow-hidden border border-ink/10 bg-panel p-8 transition-[border-color,box-shadow] duration-150 hover:border-ink/20 hover:shadow-[0_4px_6px_-1px_rgba(28,25,23,0.08),0_2px_4px_-2px_rgba(28,25,23,0.06)]"
      >
        <div
          aria-hidden="true"
          class="absolute top-0 right-0 -mt-8 -mr-8 h-24 w-24 rounded-full bg-accent/5 transition-transform duration-300 group-hover:scale-150 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        ></div>
        <p class="m-0 font-sans text-xs font-bold uppercase tracking-[0.1em] text-accent">Current Focus</p>
        <dl class="relative z-10 mt-6">
          <div>
            <dt class="m-0 font-sans text-xs font-semibold text-muted">Day-to-day</dt>
            <dd class="mt-1.5 m-0 font-serif text-[1.125rem] font-medium text-ink">Prismatecs w/ Afaq-IT</dd>
            <dd class="mt-1 m-0 font-sans text-sm leading-[1.625] text-muted">
              Senior Software Engineer shipping Rafed ERP for NGOs in KSA, working on Teckdo CMS and its AI-powered
              website builder, and building Redot—a Laravel starter kit.
            </dd>
          </div>
          <div class="mt-6">
            <dt class="m-0 font-sans text-xs font-semibold text-muted">Side of the desk</dt>
            <dd class="mt-1.5 m-0 font-serif text-[1.125rem] font-medium text-ink">Open-source packages</dd>
            <dd class="mt-1 m-0 font-sans text-sm leading-[1.625] text-muted">
              Building and maintaining packages like Mini CLI, Livewire Datatables, Laravel Language Extractor, and
              Laravel Toastify.
            </dd>
          </div>
        </dl>
      </aside>
    </section>

    <section
      aria-labelledby="skills-heading"
      class="mt-14 border-t border-ink/8 pt-11 md:mt-[4.5rem] md:pt-[3.25rem] lg:mt-20 lg:pt-14"
    >
      <h2
        id="skills-heading"
        class="mb-5 mt-0 font-serif text-[1.5rem] font-semibold tracking-[-0.025em] text-ink md:mb-6 md:text-[1.75rem] lg:mb-7"
      >
        Stack
      </h2>

      <div
        role="region"
        aria-label="Technical skills by category"
        class="grid gap-6 md:grid-cols-2 md:gap-x-7 md:gap-y-7 lg:gap-x-8 lg:gap-y-7 min-[1200px]:grid-cols-4 min-[1200px]:gap-x-6 min-[1200px]:gap-y-6"
      >
        <div class="flex min-w-0 flex-col gap-2.5">
          <span class="font-sans text-[0.625rem] leading-[1.2] font-bold uppercase tracking-[0.12em] text-accent">
            Languages & frameworks
          </span>
          <ul class="m-0 flex flex-wrap gap-y-1.5 gap-x-[0.45rem] p-0 list-none">
            <li
              class="inline-flex items-center rounded-md border border-ink/14 bg-[linear-gradient(145deg,rgba(246,243,237,0.7),rgba(28,25,23,0.04))] px-[0.7rem] py-[0.35rem] font-sans text-[0.6875rem] leading-[1.25] font-semibold uppercase tracking-[0.03em] text-muted shadow-[0_1px_0_rgba(28,25,23,0.06)] transition-[border-color,color,box-shadow,background] duration-150 hover:border-accent/40 hover:bg-accent/10 hover:text-ink hover:shadow-[0_1px_0_rgba(156,47,26,0.2)] motion-reduce:transition-none"
            >
              PHP
            </li>
            <li
              class="inline-flex items-center rounded-md border border-ink/14 bg-[linear-gradient(145deg,rgba(246,243,237,0.7),rgba(28,25,23,0.04))] px-[0.7rem] py-[0.35rem] font-sans text-[0.6875rem] leading-[1.25] font-semibold uppercase tracking-[0.03em] text-muted shadow-[0_1px_0_rgba(28,25,23,0.06)] transition-[border-color,color,box-shadow,background] duration-150 hover:border-accent/40 hover:bg-accent/10 hover:text-ink hover:shadow-[0_1px_0_rgba(156,47,26,0.2)] motion-reduce:transition-none"
            >
              JavaScript
            </li>
            <li
              class="inline-flex items-center rounded-md border border-ink/14 bg-[linear-gradient(145deg,rgba(246,243,237,0.7),rgba(28,25,23,0.04))] px-[0.7rem] py-[0.35rem] font-sans text-[0.6875rem] leading-[1.25] font-semibold uppercase tracking-[0.03em] text-muted shadow-[0_1px_0_rgba(28,25,23,0.06)] transition-[border-color,color,box-shadow,background] duration-150 hover:border-accent/40 hover:bg-accent/10 hover:text-ink hover:shadow-[0_1px_0_rgba(156,47,26,0.2)] motion-reduce:transition-none"
            >
              TypeScript
            </li>
            <li
              class="inline-flex items-center rounded-md border border-ink/14 bg-[linear-gradient(145deg,rgba(246,243,237,0.7),rgba(28,25,23,0.04))] px-[0.7rem] py-[0.35rem] font-sans text-[0.6875rem] leading-[1.25] font-semibold uppercase tracking-[0.03em] text-muted shadow-[0_1px_0_rgba(28,25,23,0.06)] transition-[border-color,color,box-shadow,background] duration-150 hover:border-accent/40 hover:bg-accent/10 hover:text-ink hover:shadow-[0_1px_0_rgba(156,47,26,0.2)] motion-reduce:transition-none"
            >
              Laravel
            </li>
            <li
              class="inline-flex items-center rounded-md border border-ink/14 bg-[linear-gradient(145deg,rgba(246,243,237,0.7),rgba(28,25,23,0.04))] px-[0.7rem] py-[0.35rem] font-sans text-[0.6875rem] leading-[1.25] font-semibold uppercase tracking-[0.03em] text-muted shadow-[0_1px_0_rgba(28,25,23,0.06)] transition-[border-color,color,box-shadow,background] duration-150 hover:border-accent/40 hover:bg-accent/10 hover:text-ink hover:shadow-[0_1px_0_rgba(156,47,26,0.2)] motion-reduce:transition-none"
            >
              Livewire
            </li>
            <li
              class="inline-flex items-center rounded-md border border-ink/14 bg-[linear-gradient(145deg,rgba(246,243,237,0.7),rgba(28,25,23,0.04))] px-[0.7rem] py-[0.35rem] font-sans text-[0.6875rem] leading-[1.25] font-semibold uppercase tracking-[0.03em] text-muted shadow-[0_1px_0_rgba(28,25,23,0.06)] transition-[border-color,color,box-shadow,background] duration-150 hover:border-accent/40 hover:bg-accent/10 hover:text-ink hover:shadow-[0_1px_0_rgba(156,47,26,0.2)] motion-reduce:transition-none"
            >
              Vue.js
            </li>
            <li
              class="inline-flex items-center rounded-md border border-ink/14 bg-[linear-gradient(145deg,rgba(246,243,237,0.7),rgba(28,25,23,0.04))] px-[0.7rem] py-[0.35rem] font-sans text-[0.6875rem] leading-[1.25] font-semibold uppercase tracking-[0.03em] text-muted shadow-[0_1px_0_rgba(28,25,23,0.06)] transition-[border-color,color,box-shadow,background] duration-150 hover:border-accent/40 hover:bg-accent/10 hover:text-ink hover:shadow-[0_1px_0_rgba(156,47,26,0.2)] motion-reduce:transition-none"
            >
              HTML & CSS
            </li>
            <li
              class="inline-flex items-center rounded-md border border-ink/14 bg-[linear-gradient(145deg,rgba(246,243,237,0.7),rgba(28,25,23,0.04))] px-[0.7rem] py-[0.35rem] font-sans text-[0.6875rem] leading-[1.25] font-semibold uppercase tracking-[0.03em] text-muted shadow-[0_1px_0_rgba(28,25,23,0.06)] transition-[border-color,color,box-shadow,background] duration-150 hover:border-accent/40 hover:bg-accent/10 hover:text-ink hover:shadow-[0_1px_0_rgba(156,47,26,0.2)] motion-reduce:transition-none"
            >
              Tailwind CSS
            </li>
            <li
              class="inline-flex items-center rounded-md border border-ink/14 bg-[linear-gradient(145deg,rgba(246,243,237,0.7),rgba(28,25,23,0.04))] px-[0.7rem] py-[0.35rem] font-sans text-[0.6875rem] leading-[1.25] font-semibold uppercase tracking-[0.03em] text-muted shadow-[0_1px_0_rgba(28,25,23,0.06)] transition-[border-color,color,box-shadow,background] duration-150 hover:border-accent/40 hover:bg-accent/10 hover:text-ink hover:shadow-[0_1px_0_rgba(156,47,26,0.2)] motion-reduce:transition-none"
            >
              jQuery
            </li>
          </ul>
        </div>

        <div class="flex min-w-0 flex-col gap-2.5">
          <span class="font-sans text-[0.625rem] leading-[1.2] font-bold uppercase tracking-[0.12em] text-accent">
            Data, APIs & web
          </span>
          <ul class="m-0 flex flex-wrap gap-y-1.5 gap-x-[0.45rem] p-0 list-none">
            <li
              class="inline-flex items-center rounded-md border border-ink/14 bg-[linear-gradient(145deg,rgba(246,243,237,0.7),rgba(28,25,23,0.04))] px-[0.7rem] py-[0.35rem] font-sans text-[0.6875rem] leading-[1.25] font-semibold uppercase tracking-[0.03em] text-muted shadow-[0_1px_0_rgba(28,25,23,0.06)] transition-[border-color,color,box-shadow,background] duration-150 hover:border-accent/40 hover:bg-accent/10 hover:text-ink hover:shadow-[0_1px_0_rgba(156,47,26,0.2)] motion-reduce:transition-none"
            >
              SQL
            </li>
            <li
              class="inline-flex items-center rounded-md border border-ink/14 bg-[linear-gradient(145deg,rgba(246,243,237,0.7),rgba(28,25,23,0.04))] px-[0.7rem] py-[0.35rem] font-sans text-[0.6875rem] leading-[1.25] font-semibold uppercase tracking-[0.03em] text-muted shadow-[0_1px_0_rgba(28,25,23,0.06)] transition-[border-color,color,box-shadow,background] duration-150 hover:border-accent/40 hover:bg-accent/10 hover:text-ink hover:shadow-[0_1px_0_rgba(156,47,26,0.2)] motion-reduce:transition-none"
            >
              PostgreSQL
            </li>
            <li
              class="inline-flex items-center rounded-md border border-ink/14 bg-[linear-gradient(145deg,rgba(246,243,237,0.7),rgba(28,25,23,0.04))] px-[0.7rem] py-[0.35rem] font-sans text-[0.6875rem] leading-[1.25] font-semibold uppercase tracking-[0.03em] text-muted shadow-[0_1px_0_rgba(28,25,23,0.06)] transition-[border-color,color,box-shadow,background] duration-150 hover:border-accent/40 hover:bg-accent/10 hover:text-ink hover:shadow-[0_1px_0_rgba(156,47,26,0.2)] motion-reduce:transition-none"
            >
              Redis
            </li>
            <li
              class="inline-flex items-center rounded-md border border-ink/14 bg-[linear-gradient(145deg,rgba(246,243,237,0.7),rgba(28,25,23,0.04))] px-[0.7rem] py-[0.35rem] font-sans text-[0.6875rem] leading-[1.25] font-semibold uppercase tracking-[0.03em] text-muted shadow-[0_1px_0_rgba(28,25,23,0.06)] transition-[border-color,color,box-shadow,background] duration-150 hover:border-accent/40 hover:bg-accent/10 hover:text-ink hover:shadow-[0_1px_0_rgba(156,47,26,0.2)] motion-reduce:transition-none"
            >
              REST APIs
            </li>
            <li
              class="inline-flex items-center rounded-md border border-ink/14 bg-[linear-gradient(145deg,rgba(246,243,237,0.7),rgba(28,25,23,0.04))] px-[0.7rem] py-[0.35rem] font-sans text-[0.6875rem] leading-[1.25] font-semibold uppercase tracking-[0.03em] text-muted shadow-[0_1px_0_rgba(28,25,23,0.06)] transition-[border-color,color,box-shadow,background] duration-150 hover:border-accent/40 hover:bg-accent/10 hover:text-ink hover:shadow-[0_1px_0_rgba(156,47,26,0.2)] motion-reduce:transition-none"
            >
              HTTP
            </li>
            <li
              class="inline-flex items-center rounded-md border border-ink/14 bg-[linear-gradient(145deg,rgba(246,243,237,0.7),rgba(28,25,23,0.04))] px-[0.7rem] py-[0.35rem] font-sans text-[0.6875rem] leading-[1.25] font-semibold uppercase tracking-[0.03em] text-muted shadow-[0_1px_0_rgba(28,25,23,0.06)] transition-[border-color,color,box-shadow,background] duration-150 hover:border-accent/40 hover:bg-accent/10 hover:text-ink hover:shadow-[0_1px_0_rgba(156,47,26,0.2)] motion-reduce:transition-none"
            >
              OAuth
            </li>
            <li
              class="inline-flex items-center rounded-md border border-ink/14 bg-[linear-gradient(145deg,rgba(246,243,237,0.7),rgba(28,25,23,0.04))] px-[0.7rem] py-[0.35rem] font-sans text-[0.6875rem] leading-[1.25] font-semibold uppercase tracking-[0.03em] text-muted shadow-[0_1px_0_rgba(28,25,23,0.06)] transition-[border-color,color,box-shadow,background] duration-150 hover:border-accent/40 hover:bg-accent/10 hover:text-ink hover:shadow-[0_1px_0_rgba(156,47,26,0.2)] motion-reduce:transition-none"
            >
              WebSockets
            </li>
          </ul>
        </div>

        <div class="flex min-w-0 flex-col gap-2.5">
          <span class="font-sans text-[0.625rem] leading-[1.2] font-bold uppercase tracking-[0.12em] text-accent">
            Delivery & platform
          </span>
          <ul class="m-0 flex flex-wrap gap-y-1.5 gap-x-[0.45rem] p-0 list-none">
            <li
              class="inline-flex items-center rounded-md border border-ink/14 bg-[linear-gradient(145deg,rgba(246,243,237,0.7),rgba(28,25,23,0.04))] px-[0.7rem] py-[0.35rem] font-sans text-[0.6875rem] leading-[1.25] font-semibold uppercase tracking-[0.03em] text-muted shadow-[0_1px_0_rgba(28,25,23,0.06)] transition-[border-color,color,box-shadow,background] duration-150 hover:border-accent/40 hover:bg-accent/10 hover:text-ink hover:shadow-[0_1px_0_rgba(156,47,26,0.2)] motion-reduce:transition-none"
            >
              Git
            </li>
            <li
              class="inline-flex items-center rounded-md border border-ink/14 bg-[linear-gradient(145deg,rgba(246,243,237,0.7),rgba(28,25,23,0.04))] px-[0.7rem] py-[0.35rem] font-sans text-[0.6875rem] leading-[1.25] font-semibold uppercase tracking-[0.03em] text-muted shadow-[0_1px_0_rgba(28,25,23,0.06)] transition-[border-color,color,box-shadow,background] duration-150 hover:border-accent/40 hover:bg-accent/10 hover:text-ink hover:shadow-[0_1px_0_rgba(156,47,26,0.2)] motion-reduce:transition-none"
            >
              Docker
            </li>
            <li
              class="inline-flex items-center rounded-md border border-ink/14 bg-[linear-gradient(145deg,rgba(246,243,237,0.7),rgba(28,25,23,0.04))] px-[0.7rem] py-[0.35rem] font-sans text-[0.6875rem] leading-[1.25] font-semibold uppercase tracking-[0.03em] text-muted shadow-[0_1px_0_rgba(28,25,23,0.06)] transition-[border-color,color,box-shadow,background] duration-150 hover:border-accent/40 hover:bg-accent/10 hover:text-ink hover:shadow-[0_1px_0_rgba(156,47,26,0.2)] motion-reduce:transition-none"
            >
              Linux
            </li>
            <li
              class="inline-flex items-center rounded-md border border-ink/14 bg-[linear-gradient(145deg,rgba(246,243,237,0.7),rgba(28,25,23,0.04))] px-[0.7rem] py-[0.35rem] font-sans text-[0.6875rem] leading-[1.25] font-semibold uppercase tracking-[0.03em] text-muted shadow-[0_1px_0_rgba(28,25,23,0.06)] transition-[border-color,color,box-shadow,background] duration-150 hover:border-accent/40 hover:bg-accent/10 hover:text-ink hover:shadow-[0_1px_0_rgba(156,47,26,0.2)] motion-reduce:transition-none"
            >
              Bash
            </li>
            <li
              class="inline-flex items-center rounded-md border border-ink/14 bg-[linear-gradient(145deg,rgba(246,243,237,0.7),rgba(28,25,23,0.04))] px-[0.7rem] py-[0.35rem] font-sans text-[0.6875rem] leading-[1.25] font-semibold uppercase tracking-[0.03em] text-muted shadow-[0_1px_0_rgba(28,25,23,0.06)] transition-[border-color,color,box-shadow,background] duration-150 hover:border-accent/40 hover:bg-accent/10 hover:text-ink hover:shadow-[0_1px_0_rgba(156,47,26,0.2)] motion-reduce:transition-none"
            >
              CI/CD
            </li>
            <li
              class="inline-flex items-center rounded-md border border-ink/14 bg-[linear-gradient(145deg,rgba(246,243,237,0.7),rgba(28,25,23,0.04))] px-[0.7rem] py-[0.35rem] font-sans text-[0.6875rem] leading-[1.25] font-semibold uppercase tracking-[0.03em] text-muted shadow-[0_1px_0_rgba(28,25,23,0.06)] transition-[border-color,color,box-shadow,background] duration-150 hover:border-accent/40 hover:bg-accent/10 hover:text-ink hover:shadow-[0_1px_0_rgba(156,47,26,0.2)] motion-reduce:transition-none"
            >
              Nginx
            </li>
          </ul>
        </div>

        <div class="flex min-w-0 flex-col gap-2.5">
          <span class="font-sans text-[0.625rem] leading-[1.2] font-bold uppercase tracking-[0.12em] text-accent">
            Quality & craft
          </span>
          <ul class="m-0 flex flex-wrap gap-y-1.5 gap-x-[0.45rem] p-0 list-none">
            <li
              class="inline-flex items-center rounded-md border border-ink/14 bg-[linear-gradient(145deg,rgba(246,243,237,0.7),rgba(28,25,23,0.04))] px-[0.7rem] py-[0.35rem] font-sans text-[0.6875rem] leading-[1.25] font-semibold uppercase tracking-[0.03em] text-muted shadow-[0_1px_0_rgba(28,25,23,0.06)] transition-[border-color,color,box-shadow,background] duration-150 hover:border-accent/40 hover:bg-accent/10 hover:text-ink hover:shadow-[0_1px_0_rgba(156,47,26,0.2)] motion-reduce:transition-none"
            >
              PHPUnit
            </li>
            <li
              class="inline-flex items-center rounded-md border border-ink/14 bg-[linear-gradient(145deg,rgba(246,243,237,0.7),rgba(28,25,23,0.04))] px-[0.7rem] py-[0.35rem] font-sans text-[0.6875rem] leading-[1.25] font-semibold uppercase tracking-[0.03em] text-muted shadow-[0_1px_0_rgba(28,25,23,0.06)] transition-[border-color,color,box-shadow,background] duration-150 hover:border-accent/40 hover:bg-accent/10 hover:text-ink hover:shadow-[0_1px_0_rgba(156,47,26,0.2)] motion-reduce:transition-none"
            >
              Pest
            </li>
            <li
              class="inline-flex items-center rounded-md border border-ink/14 bg-[linear-gradient(145deg,rgba(246,243,237,0.7),rgba(28,25,23,0.04))] px-[0.7rem] py-[0.35rem] font-sans text-[0.6875rem] leading-[1.25] font-semibold uppercase tracking-[0.03em] text-muted shadow-[0_1px_0_rgba(28,25,23,0.06)] transition-[border-color,color,box-shadow,background] duration-150 hover:border-accent/40 hover:bg-accent/10 hover:text-ink hover:shadow-[0_1px_0_rgba(156,47,26,0.2)] motion-reduce:transition-none"
            >
              Postman
            </li>
            <li
              class="inline-flex items-center rounded-md border border-ink/14 bg-[linear-gradient(145deg,rgba(246,243,237,0.7),rgba(28,25,23,0.04))] px-[0.7rem] py-[0.35rem] font-sans text-[0.6875rem] leading-[1.25] font-semibold uppercase tracking-[0.03em] text-muted shadow-[0_1px_0_rgba(28,25,23,0.06)] transition-[border-color,color,box-shadow,background] duration-150 hover:border-accent/40 hover:bg-accent/10 hover:text-ink hover:shadow-[0_1px_0_rgba(156,47,26,0.2)] motion-reduce:transition-none"
            >
              Code review
            </li>
            <li
              class="inline-flex items-center rounded-md border border-ink/14 bg-[linear-gradient(145deg,rgba(246,243,237,0.7),rgba(28,25,23,0.04))] px-[0.7rem] py-[0.35rem] font-sans text-[0.6875rem] leading-[1.25] font-semibold uppercase tracking-[0.03em] text-muted shadow-[0_1px_0_rgba(28,25,23,0.06)] transition-[border-color,color,box-shadow,background] duration-150 hover:border-accent/40 hover:bg-accent/10 hover:text-ink hover:shadow-[0_1px_0_rgba(156,47,26,0.2)] motion-reduce:transition-none"
            >
              a11y
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section id="projects" aria-labelledby="projects-heading" class="mt-24 border-t border-ink/10 pt-16 md:mt-32">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 class="m-0 font-serif text-[1.875rem] font-semibold tracking-[-0.025em] text-ink" id="projects-heading">
          Selected Work
        </h2>
        <p class="m-0 max-w-[28rem] font-sans text-sm text-muted">Projects I've worked on</p>
      </div>

      <div class="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article
          class="group relative flex h-full flex-col border border-ink/10 bg-surface p-8 transition-[border-color,background-color] duration-150 hover:border-accent/30 hover:bg-panel"
        >
          <a
            href="https://redot.dev"
            target="_blank"
            rel="noopener noreferrer"
            class="absolute inset-0 z-10 rounded-sm focus-ring"
            aria-labelledby="project-redot-title"
          >
            <span class="sr-only">Redot Dashboard — View Website</span>
          </a>
          <div class="relative z-0 flex min-h-0 flex-1 flex-col">
            <span class="font-sans text-xs font-bold tracking-[0.1em] text-accent">01</span>
            <h3
              id="project-redot-title"
              class="mt-4 mb-0 font-serif text-[1.25rem] leading-[1.375] font-semibold text-ink"
            >
              Redot Dashboard
            </h3>
            <p class="mt-3 mb-0 font-sans text-sm leading-[1.625] text-muted">
              A Laravel starter kit for shipping web apps—with auth, datatables, permissions, and a robust localization
              layer—packaged as reusable components and small focused packages.
            </p>
          </div>
          <span
            class="relative z-0 mt-auto inline-flex shrink-0 items-center gap-2 pt-6 font-sans text-sm font-semibold text-ink transition-colors duration-150 group-hover:text-accent"
            aria-hidden="true"
            >View Website <span>&rarr;</span></span
          >
        </article>

        <article
          class="group relative flex h-full flex-col border border-ink/10 bg-surface p-8 transition-[border-color,background-color] duration-150 hover:border-accent/30 hover:bg-panel"
        >
          <a
            href="https://github.com/minicli/minicli"
            target="_blank"
            rel="noopener noreferrer"
            class="absolute inset-0 z-10 rounded-sm focus-ring"
            aria-labelledby="project-minicli-title"
          >
            <span class="sr-only">Mini CLI — View on GitHub</span>
          </a>
          <div class="relative z-0 flex min-h-0 flex-1 flex-col">
            <span class="font-sans text-xs font-bold tracking-[0.1em] text-accent">02</span>
            <h3
              id="project-minicli-title"
              class="mt-4 mb-0 font-serif text-[1.25rem] leading-[1.375] font-semibold text-ink"
            >
              Mini CLI
            </h3>
            <p class="mt-3 mb-0 font-sans text-sm leading-[1.625] text-muted">
              A PHP package for creating CLI applications with ease, contributed to it by improving code quality and
              adding new features.
            </p>
          </div>
          <span
            class="relative z-0 mt-auto inline-flex shrink-0 items-center gap-2 pt-6 font-sans text-sm font-semibold text-ink transition-colors duration-150 group-hover:text-accent"
            aria-hidden="true"
            >View on GitHub <span>&rarr;</span></span
          >
        </article>

        <article
          class="group relative flex h-full flex-col border border-ink/10 bg-surface p-8 transition-[border-color,background-color] duration-150 hover:border-accent/30 hover:bg-panel"
        >
          <a
            href="https://github.com/redot-src/laravel-lang-extractor"
            target="_blank"
            rel="noopener noreferrer"
            class="absolute inset-0 z-10 rounded-sm focus-ring"
            aria-labelledby="project-lang-extractor-title"
          >
            <span class="sr-only">Laravel Language Extractor — View on GitHub</span>
          </a>
          <div class="relative z-0 flex min-h-0 flex-1 flex-col">
            <span class="font-sans text-xs font-bold tracking-[0.1em] text-accent">03</span>
            <h3
              id="project-lang-extractor-title"
              class="mt-4 mb-0 font-serif text-[1.25rem] leading-[1.375] font-semibold text-ink"
            >
              Laravel Language Extractor
            </h3>
            <p class="mt-3 mb-0 font-sans text-sm leading-[1.625] text-muted">
              A Laravel package to extract language keys from project files.
            </p>
          </div>
          <span
            class="relative z-0 mt-auto inline-flex shrink-0 items-center gap-2 pt-6 font-sans text-sm font-semibold text-ink transition-colors duration-150 group-hover:text-accent"
            aria-hidden="true"
            >View on GitHub <span>&rarr;</span></span
          >
        </article>
      </div>
    </section>

    <section id="experience" aria-labelledby="experience-heading" class="mt-24 border-t border-ink/10 pt-16">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 class="m-0 font-serif text-[1.875rem] font-semibold tracking-[-0.025em] text-ink" id="experience-heading">
          Experience
        </h2>
        <p class="m-0 max-w-[28rem] font-sans text-sm text-muted">Roles and education I've had</p>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
        <div class="flex flex-col gap-6">
          <article class="border border-ink/10 bg-surface p-8">
            <div class="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 class="m-0 font-serif text-[1.25rem] font-semibold text-ink">
                Prismatecs w/ Afaq-IT, Heliopolis — Senior Software Engineer
              </h3>
              <p class="m-0 font-sans text-sm font-medium uppercase tracking-[0.05em] text-muted whitespace-nowrap">Sep 2021 - Present</p>
            </div>
            <div class="mt-4">
              <p class="font-sans text-sm leading-[1.625] text-muted mt-0 mb-0">
                Worked at Prismatecs, a software house that partnered with Afaq-IT to develop ERP systems for NGOs in
                KSA.
              </p>
              <p class="font-sans text-sm leading-[1.625] text-muted mt-3 mb-0">
                Developed multiple modules, including a Projects Management module, a Strategy Balance module, a Report
                Builder, and a comprehensive LMS for Quran-reciting NGOs for the Rafed ERP system.
              </p>
              <p class="font-sans text-sm leading-[1.625] text-muted mt-3 mb-0">
                Led CMS refactoring and documentation, improving developer productivity and standardization.
              </p>
              <p class="font-sans text-sm leading-[1.625] text-muted mt-3 mb-0">
                Mentor and support juniors in the team.
              </p>
            </div>
          </article>

          <article class="border border-ink/10 bg-surface p-8">
            <div class="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 class="m-0 font-serif text-[1.25rem] font-semibold text-ink">
                Waffrlly, Cairo — Full Stack Developer
              </h3>
              <p class="m-0 font-sans text-sm font-medium uppercase tracking-[0.05em] text-muted whitespace-nowrap">
                Mar 2020 - Nov 2021
              </p>
            </div>
            <div class="mt-4">
              <p class="font-sans text-sm leading-[1.625] text-muted mt-0 mb-0">
                Waffrlly is a cashback and coupons website that helps people get paid when they buy from online stores.
              </p>
            </div>
          </article>
        </div>

        <aside class="border border-ink/10 bg-panel p-8">
          <p class="m-0 font-sans text-xs font-bold uppercase tracking-[0.1em] text-accent">Education</p>
          <h3 class="mt-4 mb-0 font-serif text-[1.25rem] font-semibold text-ink">Al-Azhar University — Agriculture</h3>
          <p class="mt-2 mb-0 font-sans text-sm font-medium uppercase tracking-[0.05em] text-muted">
            Sep 2020 - Sep 2024
          </p>
        </aside>
      </div>
    </section>

    <section id="writing" aria-labelledby="writing-heading" class="mt-24 border-t border-ink/10 pt-16 md:mt-32">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 class="m-0 font-serif text-[1.875rem] font-semibold tracking-[-0.025em] text-ink" id="writing-heading">
          Writing
        </h2>
        <p class="m-0 max-w-[28rem] font-sans text-sm text-muted">
          Longer notes on building software and working with teams
        </p>
      </div>

      <div v-if="publishedPosts.length === 0" class="mt-12 border border-ink/10 bg-panel p-8">
        <p class="m-0 font-sans text-sm text-muted">No published posts yet.</p>
      </div>

      <div v-else class="mt-12 flex flex-col gap-6">
        <article
          v-for="(post, index) of publishedPosts"
          :key="post.url"
          class="group relative flex flex-col gap-6 border border-ink/10 bg-surface p-8 transition-[border-color,background-color] duration-150 hover:border-accent/30 hover:bg-panel md:flex-row md:items-start md:gap-10"
        >
          <a
            :href="post.url"
            class="absolute inset-0 z-10 rounded-sm focus-ring"
            :aria-labelledby="`writing-title-${index}`"
          >
            <span class="sr-only">{{ post.title }} — Read article</span>
          </a>
          <div class="relative z-0 shrink-0 md:w-36">
            <DateElement :date="post.date" />
          </div>
          <div class="relative z-0 flex min-h-0 min-w-0 flex-1 flex-col">
            <h3
              :id="`writing-title-${index}`"
              class="m-0 font-serif text-[1.25rem] leading-[1.375] font-semibold text-ink transition-colors duration-150 group-hover:text-accent"
            >
              {{ post.title }}
            </h3>
            <div
              v-if="post.excerpt"
              class="mt-3 font-sans text-sm leading-[1.625] text-muted [&_p]:m-0 [&_p+p]:mt-2 [&_a]:relative [&_a]:z-20 [&_a]:pointer-events-auto [&_a]:text-accent [&_a]:no-underline hover:[&_a]:underline"
              v-html="post.excerpt"
            />
            <span
              class="mt-6 inline-flex shrink-0 items-center gap-2 font-sans text-sm font-semibold text-ink transition-colors duration-150 group-hover:text-accent"
              aria-hidden="true"
              >Read article <span>&rarr;</span></span
            >
          </div>
        </article>
      </div>
    </section>

    <section
      id="about"
      aria-labelledby="about-heading"
      class="mt-24 grid gap-12 border-t border-ink/10 pt-16 md:mt-32 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16"
    >
      <div>
        <h2 class="m-0 font-serif text-[1.875rem] font-semibold tracking-[-0.025em] text-ink" id="about-heading">
          Beyond the screen
        </h2>
        <div class="mt-8">
          <p class="m-0 font-serif text-[1.125rem] leading-[1.625] text-muted">
            Coding has always been more than just a job for me; it's a deep passion. I believe in earning the right to
            use complex architecture—starting plain, tight boundaries, and writing code that the next person to open the
            file can easily understand.
          </p>
          <p class="m-0 font-serif text-[1.125rem] leading-[1.625] text-muted mt-6">
            When I step away from the keyboard, my life revolves around continuous learning and family. I spend my
            downtime reading books on programming, marriage, and Islam.
          </p>
          <p class="m-0 font-serif text-[1.125rem] leading-[1.625] text-muted mt-6">
            I also have a long-standing childhood dream of learning to swim—a project that is currently in the backlog,
            but definitely on the roadmap.
          </p>
        </div>
      </div>

      <div
        class="bg-ink p-8 text-surface shadow-[0_20px_25px_-5px_rgba(28,25,23,0.15),0_8px_10px_-6px_rgba(28,25,23,0.1)] selection:bg-surface/25 selection:text-surface"
      >
        <h3 class="m-0 font-serif text-[1.25rem] font-medium text-surface">If we work together</h3>
        <p class="mt-4 mb-0 font-sans text-sm leading-[1.625] text-surface/80">
          You’ll get someone who asks early questions, avoids unnecessary abstraction, and would rather fix the
          foundation than wallpaper over it. I’m not precious about trends—I am picky about leaving things in a state we
          won’t regret later.
        </p>
        <hr class="my-6 border-0 border-t border-t-surface/20" />
        <ul class="m-0 list-none p-0">
          <li class="flex items-start gap-3 text-surface/80">
            <span aria-hidden="true" class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"></span>
            <span class="font-sans text-sm leading-[1.625]">Focus on clear, honest architecture.</span>
          </li>
          <li class="mt-3 flex items-start gap-3 text-surface/80">
            <span aria-hidden="true" class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"></span>
            <span class="font-sans text-sm leading-[1.625]">Practical AI usage tied to real product problems.</span>
          </li>
          <li class="mt-3 flex items-start gap-3 text-surface/80">
            <span aria-hidden="true" class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"></span>
            <span class="font-sans text-sm leading-[1.625]"
              >Optimizing for the user and the future developer equally.</span
            >
          </li>
        </ul>
      </div>
    </section>

    <footer class="mt-24 border-t border-ink/10 pt-8 font-sans text-sm text-muted md:mt-32">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p class="m-0">© {{ new Date().getFullYear() }} Abdelrhman Said.</p>
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
  </div>
</template>
