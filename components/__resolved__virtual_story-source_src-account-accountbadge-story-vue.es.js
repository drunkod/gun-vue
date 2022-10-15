const __resolved__virtual_storySource_srcAccountAccountbadgeStoryVue = `<script setup>
import { watchOnce } from '@vueuse/core';
import { defineAsyncComponent, reactive, onMounted } from 'vue'

const AccountBadge = defineAsyncComponent(() => import('./AccountBadge.vue'))
const AccountSelect = defineAsyncComponent(() => import('./AccountSelect.vue'))

const state = reactive({
  pub: "We2MxFrbFH37008fNmreSk9hdHLJNMVhrSMIIbOO5Ao.FbNrdt118-TCYzGYRo94Xa8EUWwwV-7DIopXSE9OZD8",
  size: 200
})

function mySetup() {
  onMounted(async () => {
    const { useGuests } = await import('#composables')
    const { guests } = useGuests()
    watchOnce(guests, g => {
      state.pub = Object.keys(guests)[0]
    })
  })
}

<\/script>

<template lang="pug">
Story(title="Account/Badge" icon="la:id-badge" :setup-app="mySetup")
  Variant(title="Round")
    AccountBadge(v-bind="state")

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
      AccountSelect(v-model:pub="state.pub")
</template>`;
export {
  __resolved__virtual_storySource_srcAccountAccountbadgeStoryVue as default
};
