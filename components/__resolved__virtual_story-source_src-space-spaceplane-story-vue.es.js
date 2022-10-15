const __resolved__virtual_storySource_srcSpaceSpaceplaneStoryVue = `<script setup>
import { defineAsyncComponent } from 'vue'

const SpacePlane = defineAsyncComponent(() => import('./SpacePlane.vue'))

<\/script>

<template lang="pug">
Story(title="Space/Plane" icon="la:draw-polygon" :layout="{ type: 'single', iframe: false }")
  Variant(title="Round")
    SpacePlane.h-90vh

</template>`;
export {
  __resolved__virtual_storySource_srcSpaceSpaceplaneStoryVue as default
};
