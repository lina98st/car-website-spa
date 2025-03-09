<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import CarDetails from '@/components/CarDetails.vue' // Sicherstellen, dass der Pfad korrekt ist

const route = useRoute()
const cars = [
  { id: 1, name: 'BMW M3', price: 65000, img: 'bmw-m3.jpg' },
  { id: 2, name: 'Audi RS5', price: 70000, img: 'audi-rs5.jpg' },
]

const car = computed(() => cars.find((car) => car.id === Number(route.params.id)))
</script>

<template>
  <div v-if="car" class="p-8">
    <CarDetails :car="car" />
  </div>
  <div v-else class="text-center text-red-500 text-lg p-8">Auto nicht gefunden!</div>
</template>
