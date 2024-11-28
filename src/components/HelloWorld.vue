

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
            <Button type="button" icon="pi pi-globe" label="Select zone" @click="toggle" class="mt-10 select_zone_button"/>
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
                    <h1 class="text-5xl mt-3 mb-10">Select your zone</h1>
                    <TimeZonePicker>
                      <!--  Nothing Here  -->
                    </TimeZonePicker>
                </div>
            </div>
        </Popover>



</template>

<style scoped>
.read-the-docs {
  color: #888;
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
}
</style>
