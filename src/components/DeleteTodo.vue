<script setup>
import axios from 'axios';
import { Icon } from '@iconify/vue';

async function onDelete (id) {
  try {
   await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  } catch (error) {
    console.error(error)
  }
}

</script>

<template>
<Icon @click="onDelete(todo.id)" icon="mdi:trash-can" class="text-red-500 text-4xl cursor-pointer" />
</template>
