<script setup lang="ts">
import { useGLTF } from '@tresjs/cientos'
import type { Object3D } from 'three'

interface GLTFResult {
  nodes: Record<string, Object3D>
  scene: Object3D
}

const [laptop, plant, headphones] = await Promise.all([
  useGLTF('/models/laptop.glb', { draco: true }) as Promise<GLTFResult>,
  useGLTF('/models/plant.glb', { draco: true }) as Promise<GLTFResult>,
  useGLTF('/models/headphones.glb', { draco: true }) as Promise<GLTFResult>,
])

const laptopModel = (laptop.nodes.Macbook ?? laptop.scene.children[0])?.clone(true)
const plantModel = (plant.nodes.Plant ?? plant.scene.children[0])?.clone(true)
const headphonesModel = (headphones.nodes.Headphones ?? headphones.scene.children[0])?.clone(true)
</script>

<template>
  <primitive v-if="laptopModel" :object="laptopModel" />
  <primitive v-if="plantModel" :object="plantModel" />
  <primitive v-if="headphonesModel" :object="headphonesModel" />
</template>
