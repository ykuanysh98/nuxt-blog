<template>
  <div v-if="post">
    <NuxtLink to="/" class="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-700 mb-10 transition-colors">
      ← All posts
    </NuxtLink>

    <!-- Header -->
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
      <p class="text-gray-500 text-lg leading-relaxed mb-4">{{ post.description }}</p>
      <div class="flex items-center gap-4 text-sm text-gray-400">
        <span>{{ formatDate(post.date) }}</span>
        <span>·</span>
        <span>{{ post.readTime }} min read</span>
      </div>
    </div>

    <hr class="border-gray-100 mb-8" />

    <!-- Body -->
    <div class="prose prose-gray max-w-none text-gray-700 leading-relaxed text-base">
      {{ post.body }}
    </div>
  </div>

  <!-- 404 -->
  <div v-else class="text-center py-20">
    <p class="text-gray-400">Post not found.</p>
    <NuxtLink to="/" class="text-blue-500 text-sm mt-2 inline-block">← Back to posts</NuxtLink>
  </div>
</template>

<script setup>
const route = useRoute()
const { getBySlug } = usePosts()

const post = getBySlug(route.params.slug)

// SSR 
if (post) {
  useSeoMeta({
    title: post.title,
    description: post.description,
    ogTitle: post.title,
    ogDescription: post.description,
    articlePublishedTime: post.date,
  })
} else {
  // 404 
  useHead({ title: 'Post not found' })
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}
</script>