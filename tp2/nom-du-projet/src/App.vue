<script setup>
import HelloWorld from './components/HelloWorld.vue'
import NavLink from './components/NavLink.vue'

</script>

<template>
  <div id="app">
        <nav>
            <NavLink url="/" text="Accueil"></NavLink>
            <NavLink url="/" text="Page 2"></NavLink>
            <NavLink url="/" text="Page 3"></NavLink>
        </nav>
    </div>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
