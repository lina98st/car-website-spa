<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <Header />
    <main class="flex-grow container mx-auto p-6">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style>
/* Falls du globale Styles für App.vue brauchst, kannst du sie hier hinzufügen */
</style>
