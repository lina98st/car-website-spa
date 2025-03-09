<script setup lang="ts">
import { defineProps } from 'vue'

type Car = { id: number; name: string; price: number; img: string }

defineProps<{ car: Car }>()
</script>

<template>
  <div class="p-8">
    <img :src="car.img" :alt="car.name" class="w-full h-60 object-cover rounded-md" />
    <h1 class="text-2xl font-bold mt-4">{{ car.name }}</h1>
    <p class="text-lg text-gray-700">Preis: {{ car.price }} €</p>
  </div>
</template>
