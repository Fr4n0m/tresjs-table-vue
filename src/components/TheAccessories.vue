<script setup lang="ts">
import { useGLTF } from '@tresjs/cientos'
import type { Object3D } from 'three'

interface GLTFResult {
  scene: Object3D
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

async function loadWithRetry(path: string, attempts = 3): Promise<GLTFResult> {
  let lastError: unknown
  for (let i = 0; i < attempts; i++) {
    try {
      return await useGLTF(path, { draco: true }) as GLTFResult
    }
    catch (error) {
      lastError = error
      if (i < attempts - 1) {
        await sleep(250 * (i + 1))
      }
    }
  }
  throw lastError
}

const laptop = await loadWithRetry('/models/laptop.glb')
const plant = await loadWithRetry('/models/plant.glb')
const headphones = await loadWithRetry('/models/headphones.glb')

const laptopModel = laptop.scene.clone(true)
const plantModel = plant.scene.clone(true)
const headphonesModel = headphones.scene.clone(true)
</script>

<template>
  <primitive v-if="laptopModel" :object="laptopModel" />
  <primitive v-if="plantModel" :object="plantModel" />
  <primitive v-if="headphonesModel" :object="headphonesModel" />
</template>
