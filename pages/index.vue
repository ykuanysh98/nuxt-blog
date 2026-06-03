<template>
  <div>
    <div class="mb-10">
      <h1 class="text-3xl font-bold tracking-tight mb-2">All Posts</h1>
      <p class="text-gray-500">Thoughts on frontend development, Vue, and the web.</p>
    </div>

    <div v-if="pending" class="flex flex-col gap-4">
      <Postskeleton v-for="n in 3" :key="n" />
    </div>

    <div v-else class="flex flex-col gap-4">
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

const { posts, pending } = usePosts()
</script>