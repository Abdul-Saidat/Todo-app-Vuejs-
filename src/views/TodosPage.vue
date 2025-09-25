<script setup>
import { ref, onMounted } from 'vue'
import { fetchTodos } from '@/api/todos';

const todos = ref([]);
const page = ref(1)
const loading = ref(false)
const error = ('')

async function loadTodos() {
  loading.value = true;
  // error.value = ''

  try {
    todos.value = await fetchTodos(page.value)
  } catch {
    "Failed to load todos"
  } finally {
    loading.value = false
  }
}

onMounted(loadTodos)
</script>

<template>

  <h1>Todos</h1>

  <button class="cursor-pointer"> CREATE TODO </button>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error" class="text-red-600">{{ error }}</div>
  <ul v-else>
    <li v-for="todo in todos" :key="todo.id">
      <span> {{ todo.title }}</span>
    </li>
  </ul>

  <div class="mt-5 flex gap-2">
    <button :disabled="page === 1" @click="page--; loadTodos()" class="cursor-pointer">Prev</button>
    <button @click="page++; loadTodos()" class="cursor-pointer">Next</button>
  </div>
</template>
