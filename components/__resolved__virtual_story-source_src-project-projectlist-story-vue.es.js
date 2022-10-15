const __resolved__virtual_storySource_srcProjectProjectlistStoryVue = `<script setup>
import { defineAsyncComponent, reactive } from 'vue'

const ProjectList = defineAsyncComponent(() => import('./ProjectList.vue'))

const state = reactive({

})



<\/script>

<template lang="pug">
Story(title="Project/List" icon="la:tools")
  Variant(title="Round")
    ProjectList(v-bind="state")

  template(#controls)
    .p-4.flex.flex-col.gap-4

</template>`;
export {
  __resolved__virtual_storySource_srcProjectProjectlistStoryVue as default
};
