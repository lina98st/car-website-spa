<script setup lang="ts">
import CarCard from '../components/CarCard.vue'

// TypeScript Interface für Autos
interface Car {
  id: number
  name: string
  price: number
  img: string
}

// Typisierte Liste von Autos
const cars: Car[] = [
  { id: 1, name: 'BMW M3', price: 65000, img: './images/bmw-m3.webp' },
  { id: 2, name: 'Audi RS5', price: 70000, img: './images/audi-rs5.webp' },
  { id: 3, name: 'Mercedes AMG C63', price: 85000, img: './images/mercedes-amg-c63.webp' },
]
</script>

<template>
  <div class="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-black min-h-screen py-16">
    <div class="container mx-auto px-8">
      <h1
        class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-yellow-400 mb-10 tracking-wide drop-shadow-xl"
      >
        Luxus & Performance
      </h1>

      <p class="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
        Erlebe eine exklusive Auswahl an Premium-Fahrzeugen – von sportlichen Limousinen bis hin zu
        luxuriösen SUVs.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <CarCard
          v-for="car in cars"
          :key="car.id"
          :car="car"
          class="transform hover:scale-105 transition duration-500 ease-in-out"
        />
      </div>
    </div>
  </div>
</template>
