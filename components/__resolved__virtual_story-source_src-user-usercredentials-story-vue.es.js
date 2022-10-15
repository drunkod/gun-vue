const __resolved__virtual_storySource_srcUserUsercredentialsStoryVue = `<script setup>
import { defineAsyncComponent, reactive } from 'vue'

const UserCredentials = defineAsyncComponent(() =>
  import('./UserCredentials.vue')
)

<\/script>

<template lang="pug">
Story(title="User/Credentials" icon="la:suitcase")
  Variant(title="Round")
    UserCredentials

  template(#controls)
    .p-2.flex.flex-col.gap-4

</template>`;
export {
  __resolved__virtual_storySource_srcUserUsercredentialsStoryVue as default
};
