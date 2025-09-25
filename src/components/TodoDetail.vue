<script setup>
// import { useRouter } from 'vue-router';
import AuthModal from './AuthModal.vue';

// const router = useRouter();
const { todo, onclose } = defineProps({

  todo: Object,
  onclose: Function
})
</script>




<template>
<AuthModal>


  <section class="flex justify-center items-center h-screen px-10 ">
    <div v-if="todo" @click.self="onclose" class="w-full max-w-lg mx-auto ">
      <div class=" border shadow-lg rounded-lg backdrop-blur-lg flex flex-col gap-y-6 items-center py-5">
        <h1 class=" text-xl text-center font-bold text-slate-600 ">Todo Detail</h1>
        <span class="font-bold text-white">Title: </span>
        <span class="text-slate-600">{{ todo?.title ?? "No Title" }}</span>
        <!-- <Status completionStatus={isChecked} /> -->
        <p>
          <span class="font-bold text-slate-600"> ID: </span>
          <span class="text-slate-600"> {{todo?.id ?? "No id"}} </span>
        </p>
        <!-- <Link to={"/fetch-todos"}> -->
        <button @click="onclose"
          class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl border cursor-pointer rounded-md px-5 py-2 bg-slate-600 hover:bg-slate-700 text-slate-50 text-sm">
          Back To List
        </button>
        <!-- </Link> -->
      </div>
    </div>
  </section>
</AuthModal>
</template>
