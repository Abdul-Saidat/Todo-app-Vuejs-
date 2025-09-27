<script setup>

const props = defineProps({
  onclose: {
    type: Function,
    required: false
  }
})

</script>




<template>
  <div class="w-full h-screen z-50 bg-black/70 fixed top-0 right-0 flex items-center justify-center">
    <div class="bg-slate-200 text-slate-500 w-[300px] md:w-[450px] rounded-xl shadow-lg relative" @click.stop>

      <button class="cursor-pointer absolute top-0 right-5 text-3xl z-10" @click="props.onclose">

        &times;
      </button>
      <slot />
    </div>
  </div>
</template>

<style scoped>
:root {
  /* --bg: oklch(98.4% 0.003 247.858); */
  --overlay: hsla(0, 0%, 0%, 0.95);
  /* --font: "Montserrat", sans-serif; */
}
</style>
