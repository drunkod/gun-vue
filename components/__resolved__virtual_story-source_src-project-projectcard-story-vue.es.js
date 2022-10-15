const __resolved__virtual_storySource_srcProjectProjectcardStoryVue = `<script setup>
import { defineAsyncComponent, reactive } from 'vue'

const ProjectCard = defineAsyncComponent(() => import('./ProjectCard.vue'))

const state = reactive({
  hash: "123",
})



<\/script>

<template lang="pug">
Story(title="Project/Card" icon="la:toolbox")
  Variant(title="Round")
    ProjectCard(v-bind="state")

  template(#controls)
    .p-4.flex.flex-col.gap-4

</template>`;
export {
  __resolved__virtual_storySource_srcProjectProjectcardStoryVue as default
};
