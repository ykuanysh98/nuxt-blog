import { ref } from 'vue'

export function usePosts() {
  const pending = ref(true)

  const modules = import.meta.glob('~/content/posts/*.json', { eager: true })

  const posts = Object.values(modules)
    .map(m => m.default || m)
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  if (import.meta.client) {
    setTimeout(() => { pending.value = false }, 400)
  } else {
    pending.value = false
  }

  function getBySlug(slug) {
    return posts.find(p => p.slug === slug) || null
  }

  return { posts, pending, getBySlug }
}