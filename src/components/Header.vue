<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav
    class="bg-gradient-to-r from-blue-900 to-blue-400 shadow-lg p-6 text-white flex justify-between items-center h-16"
  >
    <div class="text-xl font-extrabold tracking-wide uppercase">
      <RouterLink to="/" class="hover:text-gray-200 transition duration-300">Autohaus</RouterLink>
    </div>
    <div class="space-x-6">
      <RouterLink to="/" class="hover:text-gray-300 transition duration-300">Home</RouterLink>
      <RouterLink to="/about" class="hover:text-gray-300 transition duration-300"
        >Über uns</RouterLink
      >
    </div>
  </nav>
</template>
