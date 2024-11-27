<script setup>
import { ref } from 'vue'
import Button from 'primevue/button';
import Card from 'primevue/card';

import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';


import Popover from 'primevue/popover';

import TimeZonePicker from './TimezonePicker.vue'


defineProps({
  msg: String,
})

const visible = ref(false);

const value = ref(0)

const toggle = (event) => {
    op.value.toggle(event);
}

const op = ref();
const members = ref([
    { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' }
]);

</script>

<template>

  <Card class="ml-5 size-96">
    <template #title>Intro</template>
    <template #content>
      <div class="m-4">

        <h1 class="text-3xl font-bold">
          {{ msg }}
        </h1>

        <div class="flex flex-col">
          <div class="flex-0">
            <Button type="button" icon="pi pi-share-alt" label="Popup" @click="toggle" />
          </div>
          <div class="flex-0">
            <h1>{{ value }}</h1>
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
            <div class="flex flex-col gap-4 w-[25rem]">
                <div>
                    <h1>Hello </h1>
                    <Button type="button" label="Inc" @click="value = value+1"></Button>
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
</style>
