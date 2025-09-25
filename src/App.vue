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

    <!-- <div class="wrapper"> -->
      <HelloWorld msg="You did it!" />

      <nav>
        <!-- i will have my sign up and sign in buttons here, when they are clicked and the
         modal shows, it will route to /todos -->
        <RouterLink to="/">Home</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
      </nav>
    <!-- </div> -->
    <div>

    </div>
  </header>


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
