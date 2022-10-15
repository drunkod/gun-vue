const __resolved__virtual_storySource_srcUserUsericonStoryVue = `<script setup>
import { defineAsyncComponent, reactive } from 'vue'

const UserIcon = defineAsyncComponent(() =>
  import('./UserIcon.vue')
)

const state = reactive({
  size: 200,
})


<\/script>

<template lang="pug">
Story(title="User/Icon" icon="la:user")
  Variant(title="Round")
    UserIcon(v-bind="state")

  template(#controls)
    .p-2.flex.flex-col.gap-4
      .flex.gap-2
        label(for="size") Size
        input#size(
          type="range"
          v-model="state.size"
          :min="40"
          :max="500"
          )
</template>`;
export {
  __resolved__virtual_storySource_srcUserUsericonStoryVue as default
};
