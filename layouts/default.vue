<template>
  <div class="min-h-screen bg-white text-gray-900">
    <AppHeader />
    <main class="max-w-3xl mx-auto px-6 py-12">
      <slot />
    </main>
  </div>
</template>

<script setup>
import AppHeader from '~/components/AppHeader.vue'
</script>