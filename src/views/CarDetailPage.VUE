<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()

const cars = [
  { id: 1, name: 'BMW M3', price: 65000, img: '/images/bmw-m3.jpg' },
  { id: 2, name: 'Audi RS5', price: 70000, img: '/images/audi-rs5.jpg' },
  { id: 3, name: 'Mercedes AMG C63', price: 85000, img: '/images/mercedes-amg-c63.jpg' },
]

// Finde das richtige Auto basierend auf der ID aus der URL
const car = computed(() => cars.find((car) => car.id === Number(route.params.id)))

// Zurück zur Startseite-Funktion
const goBack = () => {
  router.push('/')
}
</script>

<template>
  <div
    class="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen flex items-center justify-center px-6"
  >
    <div v-if="car" class="max-w-3xl w-full bg-gray-900 p-8 rounded-lg shadow-xl text-center">
      <img
        :src="car.img"
        :alt="car.name"
        class="w-full h-96 object-cover rounded-lg shadow-lg hover:scale-105 transition duration-500"
      />

      <h1 class="text-4xl font-extrabold mt-6 text-yellow-400 drop-shadow-lg">{{ car.name }}</h1>

      <p class="text-lg text-gray-300 mt-4 leading-relaxed">
        Dieses Fahrzeug ist ein echtes Highlight. Perfekte Kombination aus Leistung, Luxus und
        Innovation.
      </p>

      <p class="text-3xl font-bold text-yellow-400 mt-6">
        Preis: {{ car.price.toLocaleString() }} €
      </p>

      <button
        @click="goBack"
        class="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 shadow-md"
      >
        🔙 Zurück zur Fahrzeugliste
      </button>
    </div>

    <div v-else class="text-center text-red-500 text-xl font-semibold">Auto nicht gefunden!</div>
  </div>
</template>
