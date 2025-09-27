<script setup lang="js">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { useTodoStore } from '../../utils/todostore';
// import { isAuthenticated } from '../../utils/storage';
// import { useForm } from 'vue-use-form';
// import { auth } from '../../firebase';
// import { createNewTodo } from '@/api/todos';
// import { emit} from 'process';

const authmode = ref(null);

function setAuthMode(mode) {
  authmode.value = mode;
}
// const props = defineProps({
//   onclose: Function
// })

const store = useTodoStore();

const router = useRouter();
const loading = ref(false);
const text = ref('')
const id = ref('')

// const email = ref('')
// const password = ref('')

 async function onSubmit (){
  loading.value = true;
  try {
   const newTodo = {
    id: id.value,
    title: text.value,
    completed: false,
   }

await axios.post("https://jsonplaceholder.typicode.com/todos", newTodo);
store.addTodo(newTodo)
    router.push('/todos')
  } catch (error) {
    console.error(" failed to create new todo", error);
  } finally {
    loading.value = false;
  }

}
</script>


<template>
  <div class="px-4 py-4">
    <header>
      <h1 class="text-xl font-semibold text-center">Create New Todo</h1>
    </header>
    <div>

      <form @submit.prevent="onSubmit" class="py-3">
        <label for="text" class="block font-semibold mb-0.5">Title:</label>
        <input class=" border rounded-md w-full max-w-sm mb-3 px-3 text-black"
         v-model="text" type="text" required>
        <label class="block mb-0.5 font-semibold" for="id">ID:</label>
        <input class="border rounded-md w-full max-w-sm px-3 text-black"
          v-model="id" type="number" required>
        <button class="px-5 py-1 mt-8 border rounded-md cursor-pointer bg-slate-600 hover:bg-slate-700 text-white"
         type="submit" @click="setAuthMode('createtodo')"> Add Todo </button>
      </form>
    </div>

  </div>

</template>
