<script setup>
import { ref, onMounted, computed } from 'vue'

import axios from 'axios';

import { fetchTodos } from '@/api/todos';

import AuthModal from '@/components/AuthModal.vue';
import CreateTodo from '@/components/CreateTodo.vue';
import SignOut from '@/components/SignOut.vue';
import TodoDetail from '@/components/TodoDetail.vue';

import { useTodoStore } from '../../utils/todostore';

import { Icon } from '@iconify/vue';
const authmode = ref(null);
const searchTerm = ref('')
const totalPage = 200;

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
})


async function onDelete(id) {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    store.todos = store.todos.filter((t) => t.id !== id)
    todos.value = todos.value.filter((t) => t.id !== id)
  } catch (error) {
    console.error(error)
  }
}

const searchResult = computed(() =>
  allTodos.value.filter((todo) => (todo.title).toLowerCase().includes(searchTerm.value.toLowerCase()))

)
onMounted(loadTodos)
</script>

<template>
  <section class="flex items-center justify-center w-full ">

    <div class="flex flex-col gap-10 py-15 mx-auto ">

      <h1 class="text-center text-5xl md:text-6xl">TODO-LIST</h1>

      <svg class="h-[1.5em] opacity-50 inline text-white text-xl" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
      <input type="search" name="search" id="search" placeholder="Search"
        class="border rounded-sm block h-8 px-2 text-white" v-model="searchTerm">

      <button class="border cursor-pointer rounded-md px-5 py-2 btn bg-slate-600 hover:bg-slate-700 text-slate-50"
        @click="setAuthMode('create')"> Create Todo </button>
      <AuthModal v-if="authmode" :onclose="() => setAuthMode(null)">
        <component :is="authmode === 'create' ? CreateTodo : ''" />


      </AuthModal>
      <div class="">

        <div v-if="loading">Loading...</div>
        <div v-else-if="error" class="text-red-600">{{ error }}</div>

        <ul v-else class=" space-y-4">
          <li v-for="todo in searchResult" :key="todo.id"
            class="md:w-[600px] flex justify-between gap-4 border px-5 py-4 mb-4 rounded-lg shadow-lg">
            <span @click="openModal(todo)" class="text-white cursor-pointer"> {{ todo.title }}</span>
            <Icon @click="() => onDelete(todo.id)" icon="mdi:trash-can" class="text-red-500 text-xl cursor-pointer" />
          </li>
        </ul>
      </div>

      <div class="mt-5 flex gap-10 justify-center text-white">
        <button :disabled="page === 1" @click="page--; loadTodos()"
          class="cursor-pointer px-4 py-1 border hover:bg-slate-700">Prev</button>
        <div><strong> Page</strong> <span class="text-slate-300"> {{ page }} </span> of <span class="text-slate-300">{{
            totalPage }}</span></div>
        <button @click="page++; loadTodos()" class="cursor-pointer px-4 py-1 border hover:bg-slate-700">Next</button>
      </div>
      <div v-if="selectedTodo" :todo="selectedTodo" :onclose="closeModal" class="fixed z-50 w-full h-screen mx-auto">

        <TodoDetail v-if="selectedTodo" :todo="selectedTodo" :onclose="closeModal" />
      </div>
      <div class="flex items-center justify-center mx-auto ">
        <SignOut />
      </div>
    </div>
  </section>
</template>
