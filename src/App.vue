<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="container mx-auto ">
    <div class="p-5 m-5">

      <div class="flex">
        <a href="https://vite.dev" target="_blank" class="flex-1 p-5">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>

        <a href="https://vuejs.org/" target="_blank" class="flex-1 p-5">
          <img src="./assets/vue.svg" class="logo vue" alt="Vue logo p-5" />
        </a>


        <a href="https://primevue.org/" target="_blank" class="flex-1 p-5">
         <h1>Primevue</h1>
        </a>

        <a href="https://tailwindcss.com/docs/" target="_blank" class="flex-1 p-5">
         <h1>Tailwind</h1>
        </a>

        <a href=" https://github.com/UserQuentyn/vue-time_zone_selector" target="_blank" class="flex-1 p-5">
         <h1>Depot Quentyn</h1>
        </a>

      
      </div>
    </div>

    <HelloWorld msg="Hello Mathys, c'est vu !" />
  </div>
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
