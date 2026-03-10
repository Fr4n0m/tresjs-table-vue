<script setup lang="ts">
import UITableSelector from './components/UITableSelector.vue'
import UIAccessoriesSelector from './components/UIAccessoriesSelector.vue'
import { defineAsyncComponent } from 'vue'

const SceneViewport = defineAsyncComponent(() => import('./components/SceneViewport.vue'))
</script>

<template>
  <main class="relative mx-auto h-screen flex items-center">
    <div class="w-full h-screen flex">
      <section class="scene-grab min-h-400px w-2/3">
        <Suspense>
          <SceneViewport />
          <template #fallback>
            <div class="h-full w-full grid place-items-center bg-dark-800 text-gray-100">
              Cargando escena 3D...
            </div>
          </template>
        </Suspense>
      </section>
      <aside class="bg-dark text-gray shadow-md w-1/3">
        <header class="p-8 bg-dark-700">
          <h1>
            Configurador de escritorio
          </h1>
        </header>
        <div class="p-8">
          <UITableSelector />
          <UIAccessoriesSelector />
        </div>
      </aside>
    </div>
  </main>
</template>
