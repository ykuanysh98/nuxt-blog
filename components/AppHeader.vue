<template>
  <header class="border-b border-gray-100 py-5">
    <div class="max-w-3xl mx-auto px-6 flex items-center justify-between">
      <NuxtLink to="/" class="text-xl font-bold tracking-tight">
        dev<span class="text-blue-500">blog</span>
      </NuxtLink>
      <nav class="flex gap-6 text-sm text-gray-500">
        <NuxtLink to="/" class="hover:text-gray-900 transition-colors">Posts</NuxtLink>
        <NuxtLink to="/about" class="hover:text-gray-900 transition-colors">About</NuxtLink>
      </nav>
    </div>
  </header>
</template>