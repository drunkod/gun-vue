const __resolved__virtual_storySource_srcUserUsercreateStoryVue = `<script setup>
import { defineAsyncComponent, reactive } from 'vue'

const UserCreate = defineAsyncComponent(() =>
  import('./UserCreate.vue')
)

<\/script>

<template lang="pug">
Story(title="User/Create" icon="la:magnet")
  Variant(title="Round")
    UserCreate

  template(#controls)
    .p-2.flex.flex-col.gap-4

</template>`;
export {
  __resolved__virtual_storySource_srcUserUsercreateStoryVue as default
};
