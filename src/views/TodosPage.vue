<script setup>
import { ref, onMounted, computed } from 'vue'
import { fetchTodos } from '@/api/todos';
import AuthModal from '@/components/AuthModal.vue';
import CreateTodo from '@/components/CreateTodo.vue';
import { useTodoStore } from '../../utils/todostore';
import TodoDetail from '@/components/TodoDetail.vue';
// import { title } from 'process';
const authmode = ref(null);

function setAuthMode(mode) {
  authmode.value = mode;
}

const store = useTodoStore();

const selectedTodo = ref(null)

function openModal(todo) {
  selectedTodo.value = todo
}

function closeModal() {
  selectedTodo.value = null;
}

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
const allTodos = computed(() => {
  return [...store.todos, ...todos.value]
} )

onMounted(loadTodos)
</script>

<template>

  <h1>Todos</h1>

  <button @click="setAuthMode('create')" > ADD TODO </button>
  <AuthModal v-if="authmode" :onclose="() => setAuthMode(null)">
    <component :is="authmode === 'create' ? CreateTodo : '' "/>


  </AuthModal>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error" class="text-red-600">{{ error }}</div>
  <ul v-else>
    <li v-for="todo in allTodos" :key="todo.id">
      <span @click="openModal(todo)" class="text-white cursor-pointer"> {{ todo.title }}</span>
    </li>
  </ul>

  <div class="mt-5 flex gap-2">
    <button :disabled="page === 1" @click="page--; loadTodos()" class="cursor-pointer">Prev</button>
    <button @click="page++; loadTodos()" class="cursor-pointer">Next</button>
  </div>
<TodoDetail v-if="selectedTodo" :todo="selectedTodo" :onclose="closeModal" />
</template>
