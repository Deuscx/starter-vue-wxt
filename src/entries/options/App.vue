<script setup lang="ts">
import { storageDemo } from '~/logic/storage'
</script>

<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <div>Options</div>

    <input v-model="storageDemo" class="border border-gray-400 rounded px-2 py-1 mt-2">

    <div class="mt-4">
      Powered by Vite <div  class="i-pixelarticons-zap align-middle inline-block" />
    </div>
  </main>
</template>
