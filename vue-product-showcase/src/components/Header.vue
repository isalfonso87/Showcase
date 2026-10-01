<template>
  <header class="bg-header-navy text-white py-3 shadow-sm">
    <div class="container d-flex justify-content-between align-items-center flex-wrap gap-2">
      <div>
        <h1 class="h3 m-0 text-white fw-bold">Showcase Store</h1>
        <p class="m-0 small text-celeste">Catálogo de productos</p>
      </div>
      <button 
        class="btn btn-custom-green px-3 py-2 rounded-2" 
        @click="toggleTheme" 
        :aria-label="'Cambiar a modo ' + (isDark ? 'claro' : 'oscuro')"
      >
        {{ isDark ? 'Modo Claro' : 'Modo Oscuro' }}
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'light'
  isDark.value = savedTheme === 'dark'
  document.documentElement.setAttribute('data-theme', savedTheme)
})
</script>