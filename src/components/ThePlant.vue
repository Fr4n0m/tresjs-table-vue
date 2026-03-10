<script setup lang="ts">
import { useGLTF } from '@tresjs/cientos'

const { scene } = await useGLTF('/models/plant.glb', { draco: true })
</script>

<template>
  <primitive :object="scene" />
</template>
