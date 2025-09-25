<script setup lang="js">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';


const isSigningOut = ref(false);
const router = useRouter();

const onSubmit = async () => {
  isSigningOut.value = true;
  try {
    await signOut(auth);

    router.push('/')
  } catch (error) {

    console.error("error navigating:", error);
  }
};

</script>

<template>

  <button class="px-20 py-2 md:w-xl text-white bg-red-500 hover:bg-red-700 cursor-pointer rounded-full" type="submit"
    @click="onSubmit">
    {{ isSigningOut ? "Signing OOut" : "Sign Out" }}
  </button>
</template>
