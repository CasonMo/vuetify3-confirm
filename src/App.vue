<script setup>
import {getCurrentInstance, ref} from 'vue'
const {proxy} = getCurrentInstance()
proxy.$confirm('hello').then((res) => {
  console.log(res)
}).catch(err=>{
  console.log(err);
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
