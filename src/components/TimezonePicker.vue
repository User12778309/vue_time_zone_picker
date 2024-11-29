<script setup>
import { ref } from "vue"

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

class Mouse
{
    constructor()
    {
      this.x = 0
      this.y = 0
    }

    mouse_move(event)
    { 
        this.x = event.clientX
        this.y = event.clientY
        console.log("X : " + this.x + " | Y : " + this.y)

    }

    mouse_leave()
    {
        console.log("Mouse Leave")
    }

    mouse_down()
    {
        console.log(this.x)
        console.log(this.y)
    }

}

const mouse = new Mouse()

class Canvas
{

    get_all_canvas()
    {
      canvas_data.value.forEach((item )=> {
        const canvas = document.getElementById(item.id)
        const canvas_context = canvas.GetContext("2d")
        const canvas_image_data = canvas_context.getImageData(mouse.x,mouse.y,1,1)

        const [r,g,b,a] = canvas_image_data.data
      })
      
    }
}



console.log(mouse.x)

</script>

<template>
  <div class="canvas_div relative cursor-pointer">

  <img src="/public/canvas/fuseau-heure.png" class="absolute">
  
  <img v-for="item in canvas_data" :src="item.path" :id="item.id" class="absolute hover:opacity-0 opacity-50 time_selector_canvas" @mouseleave="mouse.mouse_leave" @mousemove="mouse.mouse_move" @mousedown="mouse.mouse_down">
  <slot name="content">

  </slot>

  </div>


</template>


<style scoped>
</style>







