<template>
  <h1>Home</h1>

  <div v-if="helloResponse == 'loading'">Loading...</div>
  <div v-if="helloResponse == 'no_token'">No token configured. Please create an integration and add the token to <nuxt-link to="/settings">the settings. </nuxt-link></div>
  <div v-if="helloResponse == 'invalid_token'">The token in the settings is invalid. Please create a new integration an pass the valid token to <nuxt-link to="/settings">the settings. </nuxt-link></div>
  <div v-if="helloResponse == 'yes'">
    <tasks-table></tasks-table>
  </div>

</template>

<script setup lang="ts">


const helloResponse = ref('loading');
const settings = useSettings();

onMounted(async () => {
  helloResponse.value = await $fetch('/api/notion-hello', {
    headers: {
      'Notion-Token': settings.getToken()
    }
  });
});

</script>
