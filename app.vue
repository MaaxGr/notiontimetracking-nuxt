<template>
  <div>
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
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>