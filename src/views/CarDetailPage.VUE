<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const cars = [
  { id: 1, name: 'BMW M3', price: 65000, img: '/images/bmw-m3.jpg' },
  { id: 2, name: 'Audi RS5', price: 70000, img: '/images/audi-rs5.jpg' },
  { id: 3, name: 'Mercedes AMG C63', price: 85000, img: '/images/mercedes-amg-c63.jpg' },
]

// Finde das richtige Auto basierend auf der ID aus der URL
const car = computed(() => cars.find((car) => car.id === Number(route.params.id)))
</script>

<template>
  <div v-if="car" class="p-8">
    <img :src="car.img" :alt="car.name" class="w-full h-96 object-cover rounded-md" />
    <h1 class="text-2xl font-bold mt-4">{{ car.name }}</h1>
    <p class="text-lg text-gray-700">Preis: {{ car.price }} €</p>
  </div>
  <div v-else class="text-center text-red-500 text-lg p-8">Auto nicht gefunden!</div>
</template>
