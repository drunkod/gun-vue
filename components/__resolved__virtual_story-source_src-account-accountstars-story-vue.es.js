const __resolved__virtual_storySource_srcAccountAccountstarsStoryVue = `<script setup>
import { defineAsyncComponent, reactive } from 'vue'
import { hstEvent } from 'histoire/client'

const AccountStars = defineAsyncComponent(() => import('./AccountStars.vue'))
const AccountSelect = defineAsyncComponent(() => import('./AccountSelect.vue'))

const state = reactive({
  pub: "",
})



<\/script>

<template lang="pug">
Story(title="Account/Stars" icon="la:star")
  Variant(title="Round")
    AccountStars(v-model:pub="state.pub")

  template(#controls)
    .p-2.flex.flex-col.gap-4
      AccountSelect(v-model:pub="state.pub")

</template>

<docs lang="md">
### Select a user among current room guests

</docs>`;
export {
  __resolved__virtual_storySource_srcAccountAccountstarsStoryVue as default
};
