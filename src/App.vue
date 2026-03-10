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
              Loading 3D scene...
            </div>
          </template>
        </Suspense>
      </section>
      <aside class="bg-dark text-gray shadow-md w-1/3">
        <header class="p-8 bg-dark-700">
          <h1>
            Desk Configurator
          </h1>
        </header>
        <div class="p-8">
          <UITableSelector />
          <UIAccessoriesSelector />
        </div>
      </aside>
    </div>
    <div class="fixed bottom-3 left-3 z-20 max-w-[92vw] rounded-xl border border-white/12 bg-dark-800/88 px-4 py-3 text-gray-100 shadow-xl backdrop-blur-md">
      <p class="m-0 text-[11px] text-gray-300">
        Open source: PRs are welcome.
      </p>
      <div class="mt-2 flex flex-wrap items-center gap-2">
        <a
          href="https://github.com/Fr4n0m/tresjs-table-vue"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-md border border-white/14 bg-white/10 px-3 py-1.5 text-xs text-white no-underline transition-colors hover:bg-white/18"
        >
          <i class="i-carbon-logo-github text-sm"></i>
          <span>GitHub</span>
        </a>
        <a
          href="https://codebyfran.es"
          target="_blank"
          rel="noopener noreferrer"
          class="px-2 py-1 text-xs text-gray-100 no-underline transition-opacity hover:underline hover:opacity-75"
        >
          Fr4n0m
        </a>
      </div>
    </div>
  </main>
</template>
