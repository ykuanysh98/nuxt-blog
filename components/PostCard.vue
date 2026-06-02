<template>
  <NuxtLink :to="`/blog/${post.slug}`" class="block group">
    <article class="border border-gray-100 rounded-xl p-6 hover:border-gray-300 hover:shadow-sm transition-all duration-200">
      <div class="flex items-center gap-2 mb-3">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="text-xs font-medium text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full"
        >
          {{ tag }}
        </span>
      </div>
      <h2 class="text-lg font-semibold text-gray-900 group-hover:text-blue-500 transition-colors mb-2">
        {{ post.title }}
      </h2>
      <p class="text-sm text-gray-500 leading-relaxed mb-4">
        {{ post.description }}
      </p>
      <div class="flex items-center gap-4 text-xs text-gray-400">
        <span>{{ formatDate(post.date) }}</span>
        <span>{{ post.readTime }} min read</span>
      </div>
    </article>
  </NuxtLink>
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