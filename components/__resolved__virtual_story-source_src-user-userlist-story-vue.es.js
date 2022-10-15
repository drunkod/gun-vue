const __resolved__virtual_storySource_srcUserUserlistStoryVue = `<script setup>
import { defineAsyncComponent, reactive } from 'vue'

const UserList = defineAsyncComponent(() => import('./UserList.vue'))

<\/script>

<template lang="pug">
Story(title="User/List" icon="la:home")
  Variant(title="Round")
    UserList

  template(#controls)
    .p-2.flex.flex-col.gap-4

</template>`;
export {
  __resolved__virtual_storySource_srcUserUserlistStoryVue as default
};
