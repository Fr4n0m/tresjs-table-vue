<script setup lang="ts">
import { useTres } from '@tresjs/core'
import { useGLTF } from '@tresjs/cientos'
import type { Object3D } from 'three'

const { invalidate } = useTres()
const { nodes, scene } = await useGLTF('/models/headphones.glb', { draco: true })
const model = ((nodes as Record<string, Object3D>).Headphones ?? scene.children[0])?.clone(true)

invalidate()
</script>

<template>
  <primitive v-if="model" :object="model" />
</template>
