const __resolved__virtual_storySource_srcUtilUtilrelayStoryVue = `<script setup>
import { defineAsyncComponent } from 'vue'

const UtilRelay = defineAsyncComponent(() => import('./UtilRelay.vue'))

<\/script>

<template lang="pug">
Story(title="Util/Relay" icon="carbon:bare-metal-server-01")
  Variant(title="Round")
    UtilRelay.h-full

</template>`;
export {
  __resolved__virtual_storySource_srcUtilUtilrelayStoryVue as default
};
