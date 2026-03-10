<script setup lang="ts">
import { useTres } from '@tresjs/core'
import { useGLTF } from '@tresjs/cientos'

const { invalidate } = useTres()
const { scene } = await useGLTF('/models/headphones.glb', { draco: true })
invalidate()
</script>

<template>
  <primitive :object="scene" />
</template>
