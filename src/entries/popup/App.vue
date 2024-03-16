<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue';
import { storageDemo } from '~/logic/storage'
import { browser } from 'wxt/browser';

function openOptionsPage() {
  browser.runtime.openOptionsPage()
}
</script>

<template>
  <div>
    <a href="https://wxt.dev" target="_blank">
      <img src="/wxt.svg" class="logo" alt="WXT logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <div class="mt-2">
      <span class="opacity-50">Storage:</span> {{ storageDemo }}
    </div>
    <button class="btn mt-2" @click="openOptionsPage">
      Open Options
    </button>
  </div>
  <HelloWorld msg="WXT + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #54bc4ae0);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
