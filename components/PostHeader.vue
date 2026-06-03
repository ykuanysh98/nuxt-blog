<template>
  <div class="mb-8">
    <div class="flex items-center gap-2 mb-4">
      <span
        v-for="tag in post.tags"
        :key="tag"
        class="text-xs font-medium text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full"
      >
        {{ tag }}
      </span>
    </div>
    <h1 class="text-3xl font-bold tracking-tight text-gray-900 mb-3">
      {{ post.title }}
    </h1>
    <p class="text-gray-500 text-lg leading-relaxed mb-4">
      {{ post.description }}
    </p>
    <div class="flex items-center gap-4 text-sm text-gray-400">
      <span>{{ formatDate(post.date) }}</span>
      <span>·</span>
      <span>{{ post.readTime }} min read</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  post: { type: Object, required: true },
})

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}
</script>