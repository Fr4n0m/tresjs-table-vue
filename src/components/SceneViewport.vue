<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { TresLeches, useControls } from '@tresjs/leches'
import { ref } from 'vue'
import TheExperience from './TheExperience.vue'

const renderTimes = ref(0)

useControls('fpsgraph')

useControls({
  renderTimes: {
    value: renderTimes,
    type: 'graph',
    label: 'Render Times (ms)',
    onUpdate: () => {
      renderTimes.value = 0
    },
  },
})

function onRender() {
  renderTimes.value = 1
}
</script>

<template>
  <TresLeches />
  <TresCanvas render-mode="on-demand" alpha @render="onRender">
    <TheExperience />
  </TresCanvas>
</template>
