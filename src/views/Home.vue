<script setup lang="ts">
import CarCard from '../components/CarCard.vue'

const cars = [
  { id: 1, name: 'BMW M3', price: 65000, img: '/images/bmw-m3.jpg' },
  { id: 2, name: 'Audi RS5', price: 70000, img: '/images/audi-rs5.jpg' },
  { id: 3, name: 'Mercedes AMG C63', price: 85000, img: '/images/mercedes-amg-c63.jpg' },
]
</script>

<template>
  <div class="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <CarCard v-for="car in cars" :key="car.id" :car="car" />
  </div>
</template>
