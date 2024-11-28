

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

  <Card class="ml-5 size-96" align="center">
    <template #content>
      <div class="m-4">

        <h1 class="text-3xl font-bold mt-10">
          {{ msg }}
        </h1>

        <div class="flex flex-col">
          <div class="flex-0">
            <Button type="button" icon="pi pi-globe" label="Select zone" @click="toggle" class="mt-10"/>
          </div>
          <div class="flex-0">
          </div>

        </div>

       
        <!--
        <Button class="ml-4 mt-5" label="Oui"  @click="visible = true"/>
        -->
      </div>
    </template>
  </Card>

<!--
  <div class="card flex justify-center">
        <Dialog v-model:visible="visible" modal header="Edit Profile" :style="{ width: '25rem' }">
            <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
            <div class="flex items-center gap-4 mb-4">
                <label for="username" class="font-semibold w-24">Username</label>
                <InputText id="username" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex items-center gap-4 mb-8">
                <label for="email" class="font-semibold w-24">Email</label>
                <InputText id="email" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex justify-end gap-2">
                <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
                <Button type="button" label="Save" @click="visible = false"></Button>
            </div>
        </Dialog>
    </div>
-->

    <Popover ref="op">
            <div class="flex flex-col gap-4 w-[35rem]">
                <div>
                    <h1 class="popover_title">Select your zone</h1>
                    <TimeZonePicker>
                      <!--
                      <template #content>
                        <h1>Hello</h1>
                      </template>
                      -->
                      
                    </TimeZonePicker>
                </div>
            </div>
        </Popover>



</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.popover_title
{
  font-size:45px;

  margin-top:25px;
  margin-bottom:25px;
  margin-left:75px;
  margin-right:50px;

  font-family: "Courier New";
}
</style>
