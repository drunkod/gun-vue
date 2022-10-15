const __resolved__virtual_storySource_srcUserUsergraphStoryVue = `<script setup>
import { defineAsyncComponent, reactive } from 'vue'

const UserGraph = defineAsyncComponent(() =>
  import('./UserGraph.vue')
)

<\/script>

<template lang="pug">
Story(title="User/Graph" icon="la:sitemap")
  Variant(title="Round")
    UserGraph

  template(#controls)
    .p-2.flex.flex-col.gap-4

</template>`;
export {
  __resolved__virtual_storySource_srcUserUsergraphStoryVue as default
};
