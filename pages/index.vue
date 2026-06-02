<template>
  <div>
    <div class="mb-10">
      <h1 class="text-3xl font-bold tracking-tight mb-2">All Posts</h1>
      <p class="text-gray-500">Thoughts on frontend development, Vue, and the web.</p>
    </div>

    <div class="flex flex-col gap-4">
      <PostCard v-for="post in posts" :key="post.slug" :post="post" />
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'devblog — Frontend articles',
  description: 'Thoughts on Vue, Nuxt, and modern frontend development.',
  ogTitle: 'devblog',
  ogDescription: 'Thoughts on Vue, Nuxt, and modern frontend development.',
})

const { posts } = usePosts()
</script>