const __resolved__virtual_storySource_srcUtilUtilgraphStoryVue = `<script setup>
import { defineAsyncComponent } from 'vue'

const UtilGraph = defineAsyncComponent(() => import('./UtilGraph.vue'))

<\/script>

<template lang="pug">
Story(title="Util/Graph" icon="mdi:graph-outline" :layout="{ type: 'single', iframe: true }")
  Variant(title="Round")
    UtilGraph

</template>`;
export {
  __resolved__virtual_storySource_srcUtilUtilgraphStoryVue as default
};
