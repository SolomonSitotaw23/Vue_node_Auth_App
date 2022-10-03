<template>
  <div>
    <h4 class="text-h4">Messages</h4>
    <v-card>
      <v-list
        :items="Messages"
        item-title="Messages"
        item-value="Messages.idx"
      ></v-list>
      <v-icon icon="fas fa-plus" />
    </v-card>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
const Messages = ref([]);

onMounted(async () => {
  Messages.value = (await axios.get("http://localhost:3000/messages")).data;
  console.log();
  // console.log(Messages);
});
</script>
