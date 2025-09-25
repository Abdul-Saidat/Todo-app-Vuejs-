<script setup>
// import { ref } from 'vue';
import { RouterLink } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
// import AuthModal from './components/AuthModal.vue';
// import SignIn from './components/SignIn.vue';
// import SignUp from './components/SignUp.vue';
// import TodosPage from './views/TodosPage.vue';

// const authmode = ref(null);

// function setAuthMode(mode) {
//   authmode.value = mode;
// }

</script>

<!-- I will have my landing page here -->

<template>
  <header class="flex flex-col">
    <!-- <h1 class="text-5xl md:text-6xl text-center"> TODO APP</h1> -->
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <!-- i will have my sign up and sign in buttons here, when they are clicked and the
         modal shows, it will route to /todos -->
        <RouterLink to="/">Home</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
      </nav>
    </div>
    <div>

    </div>
  </header>
  <!-- <div class="py-5">
    <p class="text-[18px]">
      This is a simple Todo app built with Next.js, React, TypeScript,
      TailwindCSS and Firebase authentication.
    </p>
    <div class="my-5">
      <span class="font-semibold text-xl">Features:</span>
      <ul>
        <li>
          <span role="img" aria-label="check">
            ✅
          </span>
          Authentication -->
        <!-- </li>
        <li>
          <span role="img" aria-label="check">
            ✅
          </span>
          View all Todos
        </li>
        <li>
          <span role="img" aria-label="check">
            ✅
          </span>
          View each Todo&apos;s detail
        </li>
        <li>
          <span role="img" aria-label="check">
            ✅
          </span>
          Create new Todos -->
        <!-- </li>
        <li>
          <span role="img" aria-label="check">
            ✅
          </span>
          Delete Todos
        </li>
        <li>
          <span role="img" aria-label="check">
            ✅
          </span>
          Filter Todos based on status (completed or uncompleted)
        </li>
        <li>
          <span role="img" aria-label="check">
            ✅
          </span>
          Real time pagination
        </li>
      </ul>
    </div> -->

    <!-- <h1 class="text-xl md:text-2xl text-center md:text-left">
      Are you ready to smash your daily goals?
    </h1>
    <h2>
      Click the buttons below to signup if you don&apos;t have an account
      yet or sign in if you do.
    </h2>
    <div class="flex gap-5 mt-3">
      <button class="px-5 py-1 border rounded-full cursor-pointer bg-slate-700 hover:bg-slate-800 text-white"
        @click="setAuthMode('signup')">

        Sign Up
      </button>
      <button class="px-5 py-1 border rounded-full cursor-pointer bg-slate-600 hover:bg-slate-700 text-white"
        @click="setAuthMode('signin')">

        Sign In
      </button>
    </div>
  </div> -->

  <!-- <AuthModal v-if="authmode" :onclose="() => setAuthMode(null)">
    <component :is="authmode === 'signin' ? SignIn : SignUp" />

  </AuthModal>
 -->

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    /* text-align: left; */
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
