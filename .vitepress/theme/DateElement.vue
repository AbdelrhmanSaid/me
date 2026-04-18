<script setup lang="ts">
import type { Post } from './posts.data.js'

const props = defineProps<{ date: Post['date'] }>()

function getDateTime() {
  return new Date(props.date.time).toISOString()
}
</script>

<template>
  <dl class="m-0">
    <dt class="sr-only">Published on</dt>
    <dd class="m-0 font-sans text-xs font-medium uppercase tracking-[0.05em] text-muted">
      <time :datetime="getDateTime()">{{ date.string }}</time>
    </dd>
  </dl>
</template>
