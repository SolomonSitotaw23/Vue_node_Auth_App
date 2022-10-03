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
const Messages = ["hi", "hello", "itsWorking"];
</script>
