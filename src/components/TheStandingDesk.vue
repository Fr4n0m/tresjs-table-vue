<script setup lang="ts">
import { useTexture, useTres } from '@tresjs/core'
import { useGLTF } from '@tresjs/cientos'
import { useState } from '../composables/useState'
import { watch } from 'vue'
import {
  Color,
  MeshStandardMaterial,
  RepeatWrapping,
  SRGBColorSpace,
} from 'three'
import type { Mesh as MeshType, Texture as TextureType } from 'three'

type TextureSlot = 'map' | 'normalMap' | 'roughnessMap' | 'displacementMap'
type LoadedTextures = Partial<Record<TextureSlot, TextureType | null>>

const { nodes } = await useGLTF('/models/standing-desk.glb', {
  draco: true,
})
const table = nodes.Table as MeshType
const legs = nodes.Leg as MeshType
const control = nodes.Control
const hanger = nodes.Hanger

const { selectedTableMaterial, selectedAccessoriesColor } = useState()

const { invalidate } = useTres()

watch(selectedTableMaterial, async (material) => {
  if (!material) { return }

  const texture = await useTexture({
    map: `${material.path}/${material.filename}_Color.webp`,
    normalMap: `${material.path}/${material.filename}_NormalDX.webp`,
    roughnessMap: `${material.path}/${material.filename}_Roughness.webp`,
    displacementMap: `${material.path}/${material.filename}_Displacement.webp`,
  }) as LoadedTextures

  const tableMaterial = Array.isArray(table.material) ? table.material[0] : table.material
  if (!(tableMaterial instanceof MeshStandardMaterial)) { return }

  invalidate()

  Object.entries(texture).forEach(([key, map]) => {
    if (!map) { return }

    map.wrapS = RepeatWrapping
    map.wrapT = RepeatWrapping
    map.anisotropy = 16
    if (key === 'map') {
      map.colorSpace = SRGBColorSpace
    }

    tableMaterial[key as TextureSlot] = map
  })
}, {
  immediate: true,
})

watch(selectedAccessoriesColor, (color) => {
  if (!color) { return }
  const legsMaterial = Array.isArray(legs.material) ? legs.material[0] : legs.material
  if (!(legsMaterial instanceof MeshStandardMaterial)) { return }

  legsMaterial.color.set(new Color(color.color))
  legsMaterial.metalness = color.metalness
  legsMaterial.roughness = color.roughness
}, {
  immediate: true,
})
</script>

<template>
  <primitive :object="table" />
  <primitive :object="legs" />
  <primitive :object="control" />
  <primitive :object="hanger" />
</template>
