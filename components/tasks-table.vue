
<template>
  <table>
    <tr v-for="task in taskData['results']">
      <td>{{ task['id'] }}</td>
      <td>{{ getFullPlainText(task['properties']['Name']['title']) }}</td>
    </tr>
  </table>

</template>


<script setup lang="ts">

const settings = useSettings();
const { data: taskData } = await useFetch('/api/notion-get-tasks', {
  headers: {
    'Notion-Token': settings.getToken()
  }
});

function getFullPlainText(propData: any) {
  let str = ''
  for (let entry of propData) {
    str += entry['plain_text'];
  }
  return str;
}


</script>