export function usePosts() {
  const modules = import.meta.glob('~/content/posts/*.json', { eager: true })

  const posts = Object.values(modules)
    .map(m => m.default || m)
    .sort((a, b) => new Date(b.date) - new Date(a.date)) 

  function getBySlug(slug) {
    return posts.find(p => p.slug === slug) || null
  }

  return { posts, getBySlug }
}