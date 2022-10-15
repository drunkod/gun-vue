const __resolved__virtual_storySource_srcUserUserpassStoryVue = `<script setup>
import { defineAsyncComponent } from 'vue'

const UserPass = defineAsyncComponent(() => import('./UserPass.vue'))

<\/script>

<template lang="pug">
Story(title="User/Pass" icon="la:passport")
  Variant(title="Round")
    UserPass

  template(#controls)
    .p-2.flex.flex-col.gap-4

</template>`;
export {
  __resolved__virtual_storySource_srcUserUserpassStoryVue as default
};
