const __resolved__virtual_storySource_srcRoomRoombuttonStoryVue = `<script setup>
import { defineAsyncComponent, reactive } from 'vue'

const RoomButton = defineAsyncComponent(() =>
  import('./RoomButton.vue')
)



<\/script>

<template lang="pug">
Story(title="Room/Icon" :layout="{ type: 'single' }")
  Variant(title="Round")
    RoomButton

  template(#controls)
    .p-2.flex.flex-col.gap-4
</template>`;
export {
  __resolved__virtual_storySource_srcRoomRoombuttonStoryVue as default
};
