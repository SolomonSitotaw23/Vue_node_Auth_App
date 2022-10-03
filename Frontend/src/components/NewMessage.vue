<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
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
