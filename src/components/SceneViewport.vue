<script setup lang="ts">
import { TresCanvas, useTexture } from '@tresjs/core'
import { useGLTF } from '@tresjs/cientos'
import { TresLeches, useControls } from '@tresjs/leches'
import { ref } from 'vue'
import TheExperience from './TheExperience.vue'
import { useState } from '../composables/useState'

const renderTimes = ref(0)
const { tableMaterials } = useState()
const initialMaterial = tableMaterials.value[0]

await Promise.all([
  useGLTF('/models/laptop.glb', { draco: true }),
  useGLTF('/models/standing-desk.glb', { draco: true }),
  useGLTF('/models/plant.glb', { draco: true }),
  useGLTF('/models/headphones.glb', { draco: true }),
  useTexture({
    map: `${initialMaterial.path}/${initialMaterial.filename}_Color.webp`,
    normalMap: `${initialMaterial.path}/${initialMaterial.filename}_NormalDX.webp`,
    roughnessMap: `${initialMaterial.path}/${initialMaterial.filename}_Roughness.webp`,
    displacementMap: `${initialMaterial.path}/${initialMaterial.filename}_Displacement.webp`,
  }),
])

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
  <TresCanvas render-mode="always" alpha @render="onRender">
    <Suspense>
      <TheExperience />
    </Suspense>
  </TresCanvas>
</template>
