<script setup>
import { ref } from "vue"

console.log("Hello DEV, select zone")

const canvas_data = ref([
  {id:"-1",path:"./canvas/-1.png"},
  {id:"-2",path:"./canvas/-2.png"},
  {id:"-3",path:"./canvas/-3.png"},
  {id:"-4",path:"./canvas/-4.png"},
  {id:"-5",path:"./canvas/-5.png"},
  {id:"-6",path:"./canvas/-6.png"},
  {id:"-7",path:"./canvas/-7.png"},
  {id:"-8",path:"./canvas/-8.png"},
  {id:"-9",path:"./canvas/-9.png"},
  {id:"-10",path:"./canvas/-10.png"},
  {id:"-11",path:"./canvas/-11.png"},
  {id:"+1",path:"./canvas/+1.png"},
  {id:"+2",path:"./canvas/+2.png"},
  {id:"+3",path:"./canvas/+3.png"},
  {id:"+4",path:"./canvas/+4.png"},
  {id:"+5",path:"./canvas/+5.png"},
  {id:"+6",path:"./canvas/+6.png"},
  {id:"+7",path:"./canvas/+7.png"},
  {id:"+8",path:"./canvas/+8.png"},
  {id:"+9",path:"./canvas/+9.png"},
  {id:"+10",path:"./canvas/+10.png"},
  {id:"+11",path:"./canvas/+11.png"},
  {id:"+12",path:"./canvas/+12.png"},
  {id:"+13",path:"./canvas/+13.png"},
  {id:"0",path:"./canvas/0.png"},
])

</script>


<template>
  <div class="canvas_div relative cursor-help">

  <img src="/public/canvas/fuseau-heure.png" class="absolute">
  
  <img v-for="item in canvas_data" :src="item.path" class="absolute time_selector_canvas">
  <slot name="content">

  </slot>

  </div>


</template>


<style scoped>

/* Nothing here */

</style>
