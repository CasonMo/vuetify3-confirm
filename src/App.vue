<script setup>
import { ref } from 'vue'

this.$confirm('nihao').then(() => {
console.log("yes")
}).catch(()=>{
  console.log("no")
});

let range = ref({ start: null, end: null })

// variant options: 'underlined' | 'outlined' | 'filled' | 'solo' | 'plain'
</script>

<template>
  <v-app id="app">

  </v-app>
</template>

<style scoped>
</style>
