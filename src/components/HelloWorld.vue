

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button';
import Card from 'primevue/card';

import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';

import 'primeicons/primeicons.css'


import Popover from 'primevue/popover';

import TimeZonePicker from './TimezonePicker.vue'


defineProps({
  msg: String,
})

const visible = ref(false);
;

const toggle = (event) => {
    op.value.toggle(event);
}

const op = ref();
;

</script>

<template align="center">

  <Card class="ml-5 size-96 main_card" align="center">
    <template #content>
      <div class="m-4">

        <h1 class="text-3xl font-bold mt-10 main_card_text">
          {{ msg }}
        </h1>

        <div class="flex flex-col border-10">
          <div class="flex-0">
            <Button type="button" size="large"@click="toggle" class="select_zone_button"><i class="pi pi-globe" style="font-size:50px;color:white"></i></Button>
          </div>
          <div class="flex-0">
          </div>

        </div>
      </div>
    </template>
  </Card>


    <Popover ref="op" align="center">
            <div class="flex flex-col gap-4 w-[35rem] main_popover_div">
                <div>
                    <h1 class="text-5xl mt-3 mb-10 main_popover_title">Select your zone</h1>
                    <TimeZonePicker>
                      <!--  Nothing Here  -->
                    </TimeZonePicker>
                </div>
            </div>
        </Popover>



</template>

<style scoped>  /* Nothing Here */

.easter_egg_div
{
  margin-top:375px;
}

.main_popover_div
{
  height:500px;
}

.main_card_text
{
  font-family: "Courier New";
  font-size:40px;
}

.main_card
{
  width:1000px;
  margin-top:100px;
  border:10px;
  border-color:rgba(56, 255, 179, 0.781) ;
  border-style: inset;
  background-image: linear-gradient(to top left,green,black);
}

.select_zone_button
{
  margin-top: 100px;
  height:100px;
  width:200px;
  transition: width 0.5s ease-in-out;
  transition: border-radius 0.25s;
}

.select_zone_button:hover
{
  width:125px;
  border-radius:75px;
  scale:1.2;
}

.main_popover_title
{
  font-family: "Courier New";

}
</style>

