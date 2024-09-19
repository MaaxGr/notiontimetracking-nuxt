<template>
  <div>
    <div style="display: flex; gap: 8px">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/settings">Settings</nuxt-link>
    </div>

    <NuxtPage></NuxtPage>
  </div>
</template>

<script setup>

const colorMode = useColorMode()

console.log(colorMode.preference)
</script>

<style>
body {
  font-family: sans-serif;
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}

a {
  text-decoration: none;
  color: #367bff;
}

.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}


</style>