<script setup lang="js">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// import { useForm } from 'vue-use-form';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';


const router = useRouter();
const loading = ref(false);

const email = ref('')
const password = ref('')

 async function onSubmit (){
  loading.value = true;
  try {
    // console.log(data);
    console.log(auth, email.value, password.value);

    await createUserWithEmailAndPassword(auth, email.value, password.value);
    router.push('/todos')
    // reset();
  } catch (error) {
    console.error("Login failed", error);
  } finally {
    loading.value = false;
  }

}

// const onError = createErrorHandler((errors) => {
//   console.log('validate error', errors)
// })
</script>


<template>
  <div class="px-4 py-4">
    <header>
      <h1 class="text-xl font-semibold">Sign Up</h1>
    </header>

    <form @submit.prevent="onSubmit" class="py-3">
      <label for="email" class="block font-semibold mb-0.5">Email</label>
      <input class=" border rounded-md w-full max-w-sm mb-3 px-3 text-black"
       v-model="email" type="email" required>
      <label class="block mb-0.5 font-semibold" for="password">Password</label>
      <input class="border rounded-md w-full max-w-sm px-3 text-black"
        v-model="password" type="password" required>
      <button class="px-5 py-1 mt-8 border rounded-md cursor-pointer bg-slate-600 hover:bg-slate-700 text-white"
        type="submit"> {{ loading ? "Creating account" : "Sign up" }} </button>

    </form>
  </div>

</template>
