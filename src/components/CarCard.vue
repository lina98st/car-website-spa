<script setup lang="ts">
import { defineProps } from 'vue'

type Car = { id: number; name: string; price: number; img: string }

defineProps<{ car: Car }>()
</script>

<template>
  <div class="border p-4 rounded-lg shadow-md bg-white">
    <img :src="car.img" :alt="car.name" class="w-full h-40 object-cover rounded-md" />
    <h3 class="text-lg font-bold mt-2">{{ car.name }}</h3>
    <p class="text-gray-700">Preis: {{ car.price }} €</p>
    <RouterLink :to="`/car/${car.id}`" class="text-blue-500 underline mt-2 inline-block">
      Details
    </RouterLink>
  </div>
</template>
