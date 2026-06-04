<template>
  <div v-if="post">
    <NuxtLink to="/" class="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-700 mb-10 transition-colors">
      ← All posts
    </NuxtLink>

    <!-- Header -->
    <PostHeader :post="post" />

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
    ogType: 'article',
    ogUrl: `https://yourdomain.com/blog/${post.slug}`,
    twitterCard: 'summary',
    twitterTitle: post.title,
    twitterDescription: post.description,
    articlePublishedTime: post.date,
    articleTag: post.tags,
  })
} else {
  // 404 
  useHead({ title: 'Post not found' })
}
</script>