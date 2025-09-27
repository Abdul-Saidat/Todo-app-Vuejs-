<script setup>
// import AuthModal from '@/components/AuthModal.vue';
// import { ref } from 'vue';
import AuthModal from '@/components/AuthModal.vue';



const { todo, onclose } = defineProps({

  todo: Object,
  onclose: Function
})
// const authmode = ref(null);
// function setAuthMode(mode) {
//   authmode.value = mode;
// }
</script>




<template>
  <!-- <AuthModal> -->
  <!-- <AuthModal v-if="authmode" :onclose="() => setAuthMode(null)"> -->

<AuthModal>

  <section class="">

    <div v-if="todo" @click.self="onclose" class="shadow-lg rounded-lg flex flex-col text-center items-center gap-y-6 max-w-lg mr-0 w-[300px] md:w-lg md:mx-auto py-5 bg-white  text-slate-600">
      <!-- <div class=" border shadow-lg rounded-lg bg-white text-slate-600 flex flex-col gap-y-6 items-center py-5"> -->
        <!-- <div @click="onclose" class="cursor-pointer text-4xl relative top-0 md:left-[12rem] left-[6rem]">&times;</div> -->
        <h1 class=" text-xl text-center font-bold text-slate-600 ">Todo Detail</h1>
        <span class="font-bold text-slate-600">Title: </span>
        <span class="text-slate-600">{{ todo?.title ?? "No Title" }}</span>
        <span>Status:</span>
        <span> {{ todo.completed ? "Completed" : "Uncompleted" }} </span>
        <!-- <Status completionStatus={isChecked} /> -->
        <p>
          <span class="font-bold text-slate-600"> ID: </span>
          <span class="text-slate-600"> {{ todo?.id ?? "No id" }} </span>
        </p>
        <!-- <Link to={"/fetch-todos"}> -->
        <button @click="onclose"
          class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl border cursor-pointer rounded-md px-5 py-2 bg-slate-600 hover:bg-slate-700 text-slate-50 text-sm">
          Back To List
        </button>
        <!-- </Link> -->
      <!-- </div> -->
    </div>
  </section>
</AuthModal>
  <!-- <section class="flex justify-center items-center h-screen px-10 "> -->
  <!-- </section> -->
  <!-- </AuthModal> -->
  <!-- </AuthModal> -->
</template>
