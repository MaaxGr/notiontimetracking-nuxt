
<template>
  <h1>Settings</h1>

  <label for="notion_token">Notion Token:</label><br>
  <input id="notion_token" v-model="notionToken" type="password">

</template>

<script setup lang="ts">

import {onMounted} from "vue";
import useSettings from "~/composables/useSettings";

let settings = useSettings();
let notionToken = ref('');

onMounted(() => {
  if (settings.isTokenConfigured()) {
    notionToken.value = settings.getToken();
  }
})

watch(notionToken, (newToken) => {
  settings.setToken(newToken)
});

</script>
