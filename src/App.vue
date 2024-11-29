

<script setup>

import HelloWorld from './components/HelloWorld.vue'
console.warn("Hello DEV, Welcom to DEV zone")


function easter_egg()
{
  console.error("Grouuuuuuuaaaaaaaaaaaa")
  let document_icon = document.querySelector('link[rel="icon"]')
  if (!document_icon)
  {
    document_icon = document.createElement("link")
    document_icon.setAttribute("rel","icon")
    document.appendChild(document_icon)
  }
  document_icon.setAttribute("href","https://freepngimg.com/save/81977-kaiju-godzilla-figure-netflix-character-fictional-animal/1500x701")
  document.title = "Grouuuaaaaaaaa"

  const vite_vue_img = document.getElementById("vite_vue")
  const vue_img = document.getElementById("vue")
  const prime_vue_img = document.getElementById("prime_vue")
  const tailwind_img = document.getElementById("tailwind")
  const github_img = document.getElementById("github")
  const doc_title_text = document.getElementById("doc_title")

  vite_vue_img.src = "https://freepngimg.com/save/81977-kaiju-godzilla-figure-netflix-character-fictional-animal/1500x701"
  vite_vue_img.width = "300"

  vue_img.src = "https://freepngimg.com/save/81977-kaiju-godzilla-figure-netflix-character-fictional-animal/1500x701"
  vue_img.width = "300"

  prime_vue_img.src = "https://freepngimg.com/save/81977-kaiju-godzilla-figure-netflix-character-fictional-animal/1500x701"
  prime_vue_img.width = "300"

  tailwind_img.src = "https://freepngimg.com/save/81977-kaiju-godzilla-figure-netflix-character-fictional-animal/1500x701"
  tailwind_img.width = "300"

  github_img.src = "https://freepngimg.com/save/81977-kaiju-godzilla-figure-netflix-character-fictional-animal/1500x701"
  github_img.width = "300"

  doc_title_text.innerHTML = ("Grouuuuuaaaaaaa")

}

</script>

<template>
  <div class="bg-gradient-to-t from-purple-500 via-black-500 to-black-500 body">
  <div align="center">
    <div class="p-5 m-5 doc_div">

      <button class="opacity-0 cursor-default" @mousedown="easter_egg">Grouaaaaaaaaaa</button>
      <h1 class="doc_title text-6xl" id="doc_title">Framework used</h1>

      <div class="flex  justify-around ">
        <a href="https://vite.dev" target="_blank" class="hover:scale-125 ease-out duration-300 hoverflex-1 p-5 w-100">
          <img src="/vite.svg" class="logo" alt="Vite logo"id="vite_vue"/>
        </a>

        <a href="https://vuejs.org/" target="_blank" class="hover:scale-125 ease-out duration-300 hoverflex-1 p-5">
          <img src="./assets/vue.svg" class="logo vue" alt="Vue logo p-5" width="100" id="vue"/>
        </a>


        <a href="https://primevue.org/" target="_blank" class="hover:scale-125 ease-out duration-300 hoverflex-1 p-5">
         <img src="https://i2.wp.com/www.primefaces.org/wp-content/uploads/2021/10/primevue-logo-1.png?fit=263%2C300&ssl=1" width="75" class="mt-2" id="prime_vue">
        </a>

        <a href="https://tailwindcss.com/docs/" target="_blank" class="hover:scale-125 ease-out duration-300 hoverflex-1 p-5">
         <img src="https://shadowblood.gallerycdn.vsassets.io/extensions/shadowblood/tailwind-moon/3.0.2/1673948732518/Microsoft.VisualStudio.Services.Icons.Default" width="100" id="tailwind">
        </a>

        <a href=" https://github.com/UserQuentyn/vue-time_zone_selector" target="_blank" class="hover:scale-125 ease-out duration-300 hoverflex-1 p-5">
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png" width="100" id="github">
        </a>

      
      </div>
    </div>

    <HelloWorld msg="Vue time zone selector" class="main_title"/>
  </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.main_title
{
  font-family:"Courier New";
  font-weight:bold;
}

.doc_title
{
  font-family: "Courier New";
}

.body
{
  height: 1500px;
}
</style>
